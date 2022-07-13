import React from 'react';
import '../CSS/admin.css';

export default function AllCourses() {
  window.onscroll = function () {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.querySelector("#name").style.display = "none";
      document.querySelector("#email").style.display = "none";
      document.querySelector("#profile").style.cssText = `
                padding: 10px;
                height: 100px;
                background-image: none;
                background-color: #064B68;
                z-index: 2;
                `;
      document.querySelector("#profilePhoto").style.cssText = `
                width: 70px;
                height: 70px; 
                `;
      document.querySelector("header").style.marginBottom = "150px";
      document.querySelector("#allCourses").style.marginTop = "-150px";
    }
  }; 
  return (
    <div>
    <header>
      <a href='/admin' id="profile">
          <div id="profilePhoto"></div>
          <h4 id="name">Mohamed Ahmed Ali</h4>
          <p id="email">MAA@ci.suez.edu.eg</p>
      </a>
    </header>
    <section id='allCourses'>
    <div className='container'>
            <a href='admin.html'><i className="bi bi-arrow-left"></i> The Courses</a>
            <div id="selectCourse">
            <label htmlFor="course">choose the category of the courses you want to list:</label>
            <select name="course" id="course">
              <option value="SEN">SEN</option>
              <option value="CSC">CSC</option>
              <option value="ISC">ISC</option>
              <option value="MAT">MAT</option>
              <option value="GEN">GEN</option>
              <option value="UNI">UNI</option>
            </select>
            <button type="button"> List</button>
            </div>
            <ul id="courses">
              <li>
                <h6>Introduction to Computer Science</h6>
                <p>Code: CSC101</p>
                <p>Level: Level 1</p>
                <p>Lecturer: Dr.Ahmed Fouad</p>
                <button type="button" onclick="delete"><i className="bi bi-x-circle-fill"></i></button>
                <button type="button" onclick="edit"><i className="bi bi-pencil-fill"></i></button>
              </li>
            </ul>
          </div>
    </section>
  </div>
  )
}
