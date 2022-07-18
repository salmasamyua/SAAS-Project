import React, { useEffect, useState } from 'react';
import '../CSS/styleHome.css';
import Navbar from './Navbar';
// import Chart from 'chart.js/auto';
// import {Line} from 'react-chartjs-2';
// import {CategoryScale} from 'chart.js'; 
// Chart.register(CategoryScale);

 function Home() {

  const userjwt = localStorage['token'];
  const [gpa, setGpa] =useState("");
  const [student, setStudent] = useState("");
  const [message, setMassege] = useState("");
  const [courses, setCourses] = useState("");
  //const [semseter, setSemester] = useState([])
    useEffect(() => {
      document.title = 'SAAS | Home';
        fetch('http://saasproject-001-site1.itempurl.com/api/Students/GetTotalHoursAndGpa', {
          method: "Get",
          headers:{
            Authorization : `Bearer ${userjwt}`,
             'Accept': 'application/json',
             'Content-Type': 'application/json'
          }})
          .then((response) => response.json())
          .then((data) => {
            setStudent(data)
            setGpa(parseFloat(student.gpa).toPrecision(2))
          }
          );
          fetch('http://saasproject-001-site1.itempurl.com/api/Students/GetCurrentCourses', {
            method: "Get",
            headers:{
              Authorization : `Bearer ${userjwt}`,
            }})
            .then((response) => response.json())
            .then((data) => {
              if(data.length !== 0){
                setCourses(data)
              }else if(data.length === 0){
                setMassege("you Don't have any current courses yet")
              }else{
                console.log("some error occcur")
              }
            }
            );
            // fetch('http://saasproject-001-site1.itempurl.com/api/Students/GetSemesterAndGrade', {
            //   method: "Get",
            //   headers:{
            //     Authorization : `Bearer ${userjwt}`,
            //   }})
            //   .then((response) => response.json())
            //   .then((data) => {
            //     if(data.length !== 0){
            //       setSemester(data)
            //       //console.log(semseter)
            //     }else if(data.length === 0){
            //       setSemester(data)
            //     }else{
            //       console.log("some error occcur")
            //     }
            //   }
            //   );
      });
    const handleControl = (e) => {
      e.preventDefault();
      fetch('http://saasproject-001-site1.itempurl.com/api/RecCourses/IsCheckControll', {
        method: "Get",
        headers:{
          Authorization : `Bearer ${userjwt}`,
           'Accept': 'application/json',
           'Content-Type': 'application/json'
        }})
        .then((response) => response.json())
        .then((data) => {
          if(data === true){
              document.querySelector('#modal').style.display = "block"
          }else{
            alert("Recommendation System is not available at the moment.")
          }
          //console.log(data)
        }
        );
    }
      // const state = {
      //   labels: [semseter.semseterName],
      //   datasets: [
      //         {
      //           label: 'Performance',
      //           fill: true,
      //           lineTension: 0.5,
      //           backgroundColor: "rgba(255,255,255,1.0)",
      //           borderColor: "rgba(0,0,0,0.1)",
      //           borderWidth: 2,
      //           data: [parseFloat(semseter.gpAofSemester)],
      //         }
      //   ]
      
      // } 
      // const colors = (str) =>{
      //   if(str === "M"){
      //     setColor("pink")
      //     return color;
      //   } else if(str === 'U'){
      //     setColor('purple')
      //     return color;
      //   } else if(str === 'C'){
      //     setColor('cyan')
      //     return color;
      //   } else if(str === 'I'){
      //     setColor('indigo')
      //     return color;
      //   } else if(str === 'S'){
      //     setColor('deepOrange')
      //     return color;
      //   } else{
      //     setColor('green')
      //     return color;
      //   }
      // }
    return (
      <div>
        <Navbar/>
          <section className="sectionHome0">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div className="text">
                  <h3>Welcome To SAAS</h3>
                  <h1>Software Department</h1>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 col1">
                <img
                  className="float-end"
                  src="../Images/Software code testing-pana.png"
                  alt="Software"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="sectionHome1">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12 cardd">
                <h3>Your Performace</h3>
                  <div className="card">
                    <p>Total GPA</p>
                    <div className="circle circlea">{gpa}</div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 cardd card2">
                  <div className="card">
                    <p>Total Hours</p>
                    <div className="circle circleb">{student.hours}</div>
                  </div>
              </div>
              {/* <div className="col-md-6 col-sm-12 col2">
                {/* <Line style={{width: '80%', maxWidth: '90%'}} data={state} options={{ 
                  title:{
                      display:true,
                      fontSize:20
                    },legend:{
                      display:true,
                      position:'right'
                    }
                  }} 
                /> */}
                {/* <canvas id="myChart" style={{width: '80%', maxWidth: '90%'}}></canvas> */}
              {/* </div> */}
            </div>
          </div>
        </section>

        <section className="sectionHome2">
          <div className="container">
            <h3>Current Courses</h3>
            <div className="cardds">
              {courses ?
              (courses.map(course =>(
                <div className="cards" key={course.courseCode}>
                  <h2 style={{backgroundColor: '#d7daeb', color: '#4050bc'}}>{course.abbreviation}</h2>
                  <p>{course.courseName} ({course.courseCode})</p>
                  <p className="text-muted fw-light">
                    <i className="bi bi-person-fill"></i>{course.instructorName}
                  </p>
                </div>
              ))) : (<div className="message">{message}</div>)
            }
            </div>
          </div>
        </section>

        <section className="sectionHome3">
          <div className="container">
            <h3>Recommended Courses</h3>
            <div className="reco">
              <a href=" " onClick={handleControl}>Start Recommendation</a>
              <div id="modal" style={{display: "none"}}>
              <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Start
              </button>

              
              <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="staticBackdropLabel">Recommended Courses</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        your Courses :
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-primary">Save</button>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
}

export default Home;
