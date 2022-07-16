import React, { useEffect, useState } from 'react';
import '../CSS/admin.css';
//import axios from 'axios'

export default function CurrentAdvisor() {
  window.onscroll = function (){
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
      document.querySelector("#advisor").style.marginTop = "-150px";
    }
  };
  const userjwt = localStorage['token'];
  const [advisors, setAdvisors] = useState("");
  useEffect(() => {
    fetch('http://saasproject-001-site1.itempurl.com/api/Users/GetAllAdvisor', {
    method: "Get",
    headers:{
      Authorization : `Bearer ${userjwt}`,
       'Accept': 'application/json',
       'Content-Type': 'application/json'
    }})
    .then((response) => response.json())
    .then((data) => {
      setAdvisors(data)
    }
    );
  })
  
  // const handleDeleteAdvisors =(id) =>{
  //   axios.delete(`'http://saasproject-001-site1.itempurl.com/api/Users/Delete' + ${id}`,{
  //     headers:{
  //       Authorization : `Bearer ${userjwt}`,
  //        'Accept': 'application/json',
  //        'Content-Type': 'application/json'
  //     }
  //   })
  //       .then(() => this.setState({ status: 'Delete successful' }));
  // }
  return (
    <div>
          <header>
            <a href='/admin' id="profile">
                <div id="profilePhoto"></div>
                <h4 id="name">Mohamed Ahmed Ali</h4>
                <p id="email">MAA@ci.suez.edu.eg</p>
            </a>
          </header>
          <section id='advisor'>
            <div className='container'>
                <a href='/admin'><i className="bi bi-arrow-left"></i> The Advisors</a>

                <ul id="addItem">
                  {advisors ? 
                  (advisors.map(advisor =>(
                      <li key={advisor.id}>
                        <h6>{advisor.fullName}</h6>
                        <p>{advisor.id}</p>
                        <p>{advisor.level}</p>
                        <p>{advisor.email}</p>
                        <p>{advisor.phone}</p>
                        {/* <button type="button" onClick={() => handleDeleteAdvisors(advisor.id)} ><i className="bi bi-x-circle-fill"></i></button> */}
                    </li>
                  ))) : <li> <h6> there are no advisor yet </h6> </li>}
                </ul>
                </div>
          </section>
        </div>
  )
}
