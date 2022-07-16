import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import '../CSS/stylePerformance.css';

 function Analysis () {
    const userjwt = localStorage['token'];
    const [semester, setSemester] = useState([]);
    const [message, setMassege] = useState("");
    const [course, setCourse] = useState([]);
    const formData = new FormData();
    useEffect(() => {
        document.title = 'SAAS | Analysis';
        fetch('http://saasproject-001-site1.itempurl.com/api/Students/GetSemesterAndGrade', {
            method: "Get",
            headers:{
              Authorization : `Bearer ${userjwt}`,
               'Accept': 'application/json',
               'Content-Type': 'application/json'
            }})
            .then((response) => response.json())
            .then((data) => {
                if(data.length !== 0){
                    setSemester(data)
                  }else if(data.length === 0){
                    setMassege("you Don't have any Previous Semester yet")
                  }else{
                    console.log("some error occcur")
                }
            }
            );
            fetch('http://saasproject-001-site1.itempurl.com/api/Students/GetCoursesOnSemester', {
            method: "POST",
            body: formData.append({
                semestername: "1St"
            }),
            headers:{
              Authorization : `Bearer ${userjwt}`,
               'Accept': 'application/json',
               'Content-Type': 'application/json'
            }})
            .then((response) => response.json())
            .then((data) => {
                setCourse(data)
                // if(data.length !== 0){
                //     setSemester(data)
                //   }else if(data.length === 0){
                //     setMassege("you Don't have any Previous Semester yet")
                //   }else{
                //     console.log("some error occcur")
                // }
            }
            );
      });
        // for (let index = 0; index < semester.length; index++) {
        //     const semesterNumber = semester[index];
        //     setSemester(semesterNumber)
            
        // }

    return (
      <div>
        <section className="secAnaysis1">
            <h2><NavLink to="/">Home </NavLink><p> { " >> " } Analysis</p></h2>
        </section>

        <section className="secAnaysis2">
        <div className="container">
            {/* <div className="row">
            <div className="col-md-4 col-sm-12 coll"> */}
                {semester ? 
                (semester.map(semester => (
                    <a key={semester.semesterName} className="btn btn-primary collapsible" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                        {semester.semesterName}
                        <div className="middle">
                            <div className="bar-container">
                                <div className="bar-5">{parseFloat(semester.gpAofSemester).toPrecision(2)}</div>
                            </div>
                        </div>
                    </a>
                ))) : (<div>{message}</div>)}
                    <div className="collapse" id="collapseExample">
                        {course.map(course =>(
                            <div key={course.courseName} className="card card-body">
                                <p>{course.courseName} <b>{course.gpa}</b></p>
                                {/* <p>Inro to Quality and Anti-corruption <b>3</b></p>
                                <p>Discrete Maths <b>2.8</b></p>
                                <p>Statistics and Probability <b>2.3</b></p>
                                <p>Intro to Computer Science <b>2.7</b></p>
                                <p>Digital Circuit <b>2.4</b></p>
                                <p>Into to Information Systems <b>3</b></p> */}
                            </div>
                        ))}
                    </div>
            {/* </div> */}
            {/* <div className="col-md-4 col-sm-12 coll">
                    <a className="btn btn-primary collapsible" data-bs-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Semester 2
                    <div className="middle">
                        <div className="bar-container">
                            <div className="bar-4">3.1</div>
                        </div>
                    </div>
                    </a>
                <div className="collapse" id="collapseExample1">
                    <div className="card card-body">
                        <p>Computer Sciences <b>3.2</b></p>
                        <p>Human Rights <b>3.3</b></p>
                        <p>Linear Algebra <b>2.8</b></p>
                        <p>Programmig Principts <b>2.7</b></p>
                        <p>Multimedia <b>3</b></p>
                        <p>Technical Writing <b>2.8</b></p>
                        <p>Systems Analysis & Design <b>3</b></p>   
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-sm-12 coll">
                    <a className="btn btn-primary collapsible" data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample">
                        Semester 3
                        <div className="middle">
                            <div className="bar-container">
                            <div className="bar-3">2.2</div>
                            </div>
                        </div>
                    </a>
                <div className="collapse" id="collapseExample2">
                    <div className="card card-body">
                        <p>Software Engineering I <b>2.7</b></p>
                        <p>Object Oriented Programming <b>2</b></p>
                        <p>Web Design and Development <b>2.8</b></p>
                        <p>Data Structures <b>2.3</b></p>
                        <p>Database Systems <b>2.7</b></p>
                        <p>Computer Networks <b>2.4</b></p>                    </div>
                    </div>
            </div> */}
            {/* </div> */}
        </div>
        </section>
      </div>
    )
}

export default Analysis;