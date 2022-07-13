import React from 'react';
import '../CSS/admin.css';

export default function AllStudents() {
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
      document.querySelector("#allStudent").style.marginTop = "-150px";
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
        <section id='allStudent'>
            <div className='container'>
                <a href='admin.html'><i className="bi bi-arrow-left"></i> The Students</a>
                <div id="selectCourse">
                <label htmlFor="studentLevel">choose the level of the students you want to list:</label>
                <select name="studentLevel" id="studentLevel">
                    <option value="level1">Level 1</option>
                    <option value="level2">Level 2</option>
                    <option value="level3">Level 3</option>
                    <option value="level4">Level 4</option>
                </select>
                <button type="button"> List</button>
                </div>
                <ul id="student">
                  <li>
                    <h6>Kholoud Mahmoud</h6>
                    <p>ID: 200003344332221</p>
                    <p>Level: 2</p>
                    <p>Email: Kholoudmahmoud@gmail.com</p>
                    <p>Phone: 0112345567</p>
                    <a href=" " >View degrees </a>
                    <button type="button" onclick="delete"><i className="bi bi-x-circle-fill"></i></button>
                    <button type="button" onclick="edit"><i className="bi bi-pencil-fill"></i></button>
                  </li>
                </ul>
              </div>
        </section>
    </div>
  )
}
