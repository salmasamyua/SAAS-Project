import React from 'react';
import '../CSS/admin.css';

export default function AddStudent() {
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
      document.querySelector("#addStudents").style.marginTop = "-150px";
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
        <section id='addStudents'>
        <div className='container'>
              <a href='/admin'><i className="bi bi-arrow-left"></i> Add Student</a>
              <form action="" method="post">
                <label htmlFor="SSNStudent">Enter student SSN:</label>
                <input type="text" id="SSNStudent" name="SSNStudent" required />
                <label htmlFor="nameStudentEnglish">Enter student name (English):</label>
                <input type="text" id="nameStudentEnglish" name="nameStudentEnglish" required />
                <label htmlFor="nameStudentArabic">Enter student name (Arabic):</label>
                <input type="text" id="nameStudentArabic" name="nameStudentArabic" required />
                <label htmlFor="genderStudent">choose the gender of the student:</label>
                <select name="genderStudent" id="genderStudent">
                  <option value="MaleStudent">Male</option>
                  <option value="FemaleStudent">Female</option>
                </select>
                <label htmlFor="birthdayStudent">Enter student birth of date (in style dd-mm-yyyy):</label>
                <input type="date" id="birthdayStudent" name="trip-start-student" value="2000-07-22" />
                <label htmlFor="phoneStudent">Enter Student phone number:</label>
                <input type="text" id="phoneStudent" name="phoneStudent" required />
                <label htmlFor="cityStudent">Enter Student city:</label>
                <input type="text" id="cityStudent" name="cityStudent" required />
                <label htmlFor="addressStudent">Enter Student address:</label>
                <input type="text" id="addressStudent" name="addressStudent" required />
                <label htmlFor="qualiStudent">Enter Student previous qualification:</label>
                <input type="text" id="qualiStudent" name="qualiStudent" required />
                <label htmlFor="instiStudent">Enter Student previous institute:</label>
                <input type="text" id="instiStudent" name="istiStudent" required />
                <label htmlFor="totaldegreeStudent">Enter Student previous total degree:</label>
                <input type="text" id="totaldegreeStudent" name="totaldegreeStudent" required />
                <label htmlFor="precentageStudent">Enter the precentage of the previous total degree:</label>
                <input type="text" id="precentageStudent" name="precentageStudent" required />
                <label htmlFor="acceptStudent">Enter the acceptence year of the student:</label>
                <input type="text" id="acceptStudent" name="acceptStudent" required />
                <label htmlFor="graduStudent">Enter the expected graduation year of the student:</label>
                <input type="text" id="graduStudent" name="graduStudent" required />
                <label htmlFor="semester">Choose the semester of the student:</label>
                <select name="semester" id="semester">
                  <option value="Semester 1">Semester 1</option>
                  <option value="Semester 2">Semester 2</option>
                  <option value="Semester 3">Semester 3</option>
                  <option value="Semester 4">Semester 4</option>
                </select>
                <label htmlFor="depart">Choose the department of the student:</label>
                <select name="depart" id="depart">
                  <option value="SWE">SWE</option>
                  <option value="Semester 2">Semester 2</option>
                </select>
                <label htmlFor="emailStudent">Enter student e-mail:</label>
                <input type="text" id="emailStudent" name="emailStudent" required />
                <label htmlFor="passwordStudent">Enter temporary password:</label>
                <input type="password" id="passwordStudent" name="passwordStudent" required />
                <button type="button" id="addStudent">Add</button>
              </form>
            </div>
        </section>
    </div>
  )
}
