import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import '../CSS/stylePerformance.css';
import Navbar from './Navbar';
import axios from 'axios';

 function Analysis () {
    const userjwt = localStorage['token'];
    const [semester, setSemester] = useState([]);
    const [message, setMassege] = useState("");
    const [course, setCourse] = useState([]);
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
            axios({
                method: "POST",
                url: "http://saasproject-001-site1.itempurl.com/api/Students/GetCoursesOnSemester",
                data: {
                    semestername: "1St",
                },
                headers: {
                  Authorization: `Bearer ${userjwt}`,
                  Accept: "application/json",
                  "Content-Type": "multipart/form-data",
                },
              })
                .then((res) => {
                  setCourse(res.data);
                  //   if(res.length !== 0){
                  //       setCourse(res.data)
                  //   }else if(res.length === 0){
                  //     setMassege("you Don't have any Previous Semester yet")
                  // }else{
                  //     console.log("some error occcur")
                  // }
                })
                .catch((err) => console.log(err.response));
      });

    return (
      <div>
        <Navbar/>
        <section className="secAnaysis1">
            <h2><NavLink to="/home">Home </NavLink><p> { " >> " } Analysis</p></h2>
        </section>

        <section className="secAnaysis2">
        <div className="container">
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
                ))) : (<></>)}
                    <div className="collapse" id="collapseExample">
                        {course.map(course =>(
                            <div key={course.courseName} className="card card-body">
                                <p>{course.courseName} <b>{parseFloat(course.gpa).toPrecision(3)}</b></p>
                            </div>  
                        ))}
                    </div>
                    <p id='message'>{message}</p>
        </div>
        </section>
      </div>
    )
}

export default Analysis;