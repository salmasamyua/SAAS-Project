import React,{ useState} from 'react'
import '../AdvisorCSS/advisor.css';
import Nav from '../Nav'
import axios from 'axios';

export default function ShowSubject() {
  const userjwt = localStorage['token'];
  const [courses, setCourses] = useState([]);
  const [category, setCategory] = useState("SEN");
  
  const handleSubmit = () =>{
    axios({
      method: "POST",
      url: "http://saasproject-001-site1.itempurl.com/api/Courses/GetAllCourses",
      data: {
        categoryid: category,
      },
      headers: {
        Authorization: `Bearer ${userjwt}`,
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        setCourses(res.data);
        document.querySelector("#courses").style.display = "block";
      })
      .catch((err) => console.log(err.response));
  }
  return (
    <div>
    <div className='advisor'>
        <Nav/>
        <section className="secAdvisor0">
          <div className="container">
              <div className="row">
              <div className="col-md-6 col-sm-12">
                  <div className="text">
                  <h3>Welcome To SAAS</h3>
                  <h1>The perfect system for any acadimic advisor</h1>
                  </div>
              </div>
              <div className="col-md-6 col-sm-12 colAdvisor1">
                  <img className="float-end" src="../Images/Software code testing-pana.png" alt="Software" />
              </div>
              </div>
          </div>
        </section>
        <section id='allCourses'>
          <div className='container'>
            <div id="selectCourse">
            <label htmlFor="course">choose the category of the courses you want to list:</label>
            <select name="course" id="course" value={category} onChange={e => setCategory(e.target.value)}>
              <option value="SEN">SEN</option>
              <option value="CSC">CSC</option>
              <option value="ISC">ISC</option>
              <option value="MAT">MAT</option>
              <option value="GEN">GEN</option>
              <option value="UNI">UNI</option>
            </select>
            <button type="button" onClick={handleSubmit}> List</button>
            </div>
            <ul id="courses">
              {courses ? (
                courses.map(course =>(
                  <li key={course.courseCode}>
                  <h6>{course.courseName}</h6>
                  <p>{course.courseCode}</p>
                  <p>{course.level}</p>
                  <p>{course.instructorName}</p>
                </li>
                ))
              ) : <li>There are no courses in this category</li> }
            </ul>
          </div>
        </section>
        <section className='goBack'>
          <a href='/homePage'>Go Back</a>
        </section>
    </div>
    </div>
  )
}
