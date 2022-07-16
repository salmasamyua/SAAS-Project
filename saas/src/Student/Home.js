import React, { useEffect, useState } from 'react';
import '../CSS/styleHome.css';
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
              <a href="/profile">Start Recommendation</a>
            </div>
          </div>
        </section>
      </div>
    )
}

export default Home;
