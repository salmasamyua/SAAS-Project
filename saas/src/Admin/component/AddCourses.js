import React from 'react';
import '../CSS/admin.css';

export default function AddCourses() {
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
      document.querySelector("#addNewCourses").style.marginTop = "-150px";
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
       <section id="addNewCourses">
        <div className='container'>
            <a href='admin.html'><i className="bi bi-arrow-left"></i> Add Course</a>
          <form action="" method="post">
            <label htmlFor="code">Enter course code:</label>
            <input type="text" id="code" name="code" required />
            <label htmlFor="courseEnglish">Enter course name (English):</label>
            <input type="text" id="courseEnglish" name="courseEnglish" required />
            <label htmlFor="nameArabic">Enter course name (Arabic):</label>
            <input type="text" id="nameArabic" name="nameArabic" required />
            <label htmlFor="catCourse">choose the category of the course:</label>
            <select name="catCourse" id="catCourse">
              <option value="SEN">SEN</option>
              <option value="CSC">CSC</option>
              <option value="ISC">ISC</option>
              <option value="MAT">MAT</option>
              <option value="GEN">GEN</option>
              <option value="UNI">UNI</option>
            </select>
            <label htmlFor="levelCourse">choose the level of the course:</label>
            <select name="levelCourse" id="levelCourse">
              <option value="level1">Level 1</option>
              <option value="level2">Level 2</option>
              <option value="level3">Level 3</option>
              <option value="level4">Level 4</option>
            </select>
            <label htmlFor="totalHour">Enter total hours of the course:</label>
            <input type="number" id="totalHour" name="totalHour" />
            <label htmlFor="totalDegree">Enter total degree of the course:</label>
            <input type="text" id="totalDegree" name="totalDegree" required />
            <label htmlFor="lecturerId">Enter lecturer ID:</label>
            <input type="text" id="lecturerId" name="lecturerId" required />
            <button type="button" id="addcourses">Add</button>
          </form>
          </div>
       </section>
    </div>
  )
}
