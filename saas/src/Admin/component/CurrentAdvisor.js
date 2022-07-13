import React from 'react';
import '../CSS/admin.css';

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
                  <li>
                    <h6>Reem Ali</h6>
                    <p>ID: 1204435</p>
                    <p>Level: 3</p>
                    <p>Email: reem@gmail.com</p>
                    <p>Phone: 01012345678</p>
                    <button type="button" onclick="delete"><i className="bi bi-x-circle-fill"></i></button>
                    <button type="button" onclick="edit"><i className="bi bi-pencil-fill"></i></button>
                  </li>
                </ul>
                </div>
          </section>
        </div>
  )
}
