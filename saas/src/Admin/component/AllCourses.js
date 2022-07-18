import React, {useState} from 'react';
import "../CSS/component.css";
import axios from 'axios';

export default function AllCourses() {

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
        document.querySelector("ul").style.display = "block";
      })
      .catch((err) => console.log(err.response));
  }
  return (
    <div>
        <a href='/admin' id="profileHeader">
          <div id="profile"></div>
        </a>
    <section id='allCourses'>
    <div className='container'>
            <a href='/admin'><i className="bi bi-arrow-left"></i> The Courses</a>
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
  </div>
  )
}
