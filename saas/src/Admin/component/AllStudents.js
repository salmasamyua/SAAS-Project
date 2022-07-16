import React, {  useState } from 'react';

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

  const userjwt = localStorage['token'];
  //const [student, setStudent] = useState([]);
  const [level, setLevel] = useState("1");
  
  const handleSubmit = () =>{
  const formData = new FormData();
  formData.append("level", "level")
    fetch('http://saasproject-001-site1.itempurl.com/api/Users/GetAllAdvisor', {
      method: "POST",
      data: formData,
      // body: JSON.stringify({
      //   level: level
      // }),
    headers:{
      Authorization : `Bearer ${userjwt}`,
       'Accept': 'application/json',
       'Content-Type': 'multipart/form-data'
    }})
    // .then((response) => response.json())
    .then((data) => {
      console.log(data)
      setLevel(data)
      if(level !== null){
        console.log(level)
        document.querySelector("ul").style.display = "block";
      }     
    }
    );
  }
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
                <a href='/admin'><i className="bi bi-arrow-left"></i> The Students</a>
                <div id="selectCourse">
                <label htmlFor="studentLevel">choose the level of the students you want to list:</label>
                <select name="studentLevel" id="studentLevel" value={level} onChange={(e) => setLevel(e.target.value)}>
                    <option value="1">Level 1</option>
                    <option value="2">Level 2</option>
                    <option value="3">Level 3</option>
                    <option value="4">Level 4</option>
                </select>
                <button type="button" onClick={handleSubmit}> List</button>
                </div>
                <ul id="student" style={{display: "none"}}>
                {/* {level && level.map(level => (
                    <li key={level.id}>
                    <h6>{level.fullName}</h6>
                    <p>{level.id}</p>
                    <p>{level.level}</p>
                    <p>{level.email}</p>
                    <p>{level.phone}</p>
                    <a href=" " >View degrees </a>
                    <button type="button" ><i className="bi bi-x-circle-fill"></i></button>
                    <button type="button" ><i className="bi bi-pencil-fill"></i></button>
                  </li>
                ))} */}
                </ul>
              </div>
        </section>
    </div>
  )
}
