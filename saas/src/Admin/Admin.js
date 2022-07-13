import React, {useEffect, useState} from 'react';
import CurrentAdvisor from './component/CurrentAdvisor';
import AddAdvisor from './component/AddAdvisor';
import AllCourses from './component/AllCourses';
import AddCourses from './component/AddCourses';
import AllStudents from './component/AllStudents';
import AddStudent from './component/AddStudent';
import './CSS/admin.css';

export default function Admin() {
    useEffect(() => {
        document.title = 'SAAS | Admin';
      });
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
          //document.querySelectorAll("#add, #advisor, #allCourses, #addNewCourses, #allStudent, #addStudents").style.marginTop = "-150px";
        //   document.querySelector("#profilePhoto").addEventListener('click', function(){
        //     location.href = 'Admin.html';
        //   })
        }
      }; 
      
      const [showCurrentAdvisor, setShowCurrentAdvisor] = useState(false);
      const handleShowCurrentAdvisor = (e) =>{
        e.preventDefault();
        setShowCurrentAdvisor(current => !current);
      }
      
      const [showAddAdvisor, setShowAddAdvisor] = useState(false);
      const handleShowAddAdvisor = (e) =>{
        e.preventDefault();
        setShowAddAdvisor(current => !current);
      }

      const [showAllCourses, setShowAllCourses] = useState(false);
      const handleShowAllCourses = (e) =>{
        e.preventDefault();
        setShowAllCourses(current => !current);
      }

      const [showAddCourses, setShowAddCourses] = useState(false);
      const handleShowAddCourses = (e) =>{
        e.preventDefault();
        setShowAddCourses(current => !current);
      }

      const [showAllStudents, setShowAllStudents] = useState(false);
      const handleShowAllStudents = (e) =>{
        e.preventDefault();
        setShowAllStudents(current => !current);
      }

      const [showAddStudent, setShowAddStudent] = useState(false);
      const handleShowAddStudent = (e) =>{
        e.preventDefault();
        setShowAddStudent(current => !current);
      }

    if(showCurrentAdvisor){
      return <CurrentAdvisor/>
    }
    else if(showAddAdvisor){
      return <AddAdvisor/>
    }
    else if(showAllCourses){
      return <AllCourses/>
    }
    else if(showAddCourses){
      return <AddCourses/>
    }
    else if(showAllStudents){
      return <AllStudents/>
    }
    else if(showAddStudent){
      return <AddStudent/>
    }
    else{
        return (
          <div>
              <header>
                  <a href='/admin' id="profile">
                      <div id="profilePhoto"></div>
                      <h4 id="name">Mohamed Ahmed Ali</h4>
                      <p id="email">MAA@ci.suez.edu.eg</p>
                  </a>
              </header>

              <section className="sec1">
                  <div className="container">
                      <h3>Recommendation Process</h3>
                      <div
                      className="btn-group position-static d-flex justify-content-center"
                      role="group"
                      aria-label="Basic radio toggle button group"
                      >
                      <input
                          type="radio"
                          className="btn-check"
                          name="btnradio"
                          id="btnradio1"
                          autoComplete="off"
                          defaultChecked
                      />
                      <label className="btn position-static btn-outline-primary" htmlFor="btnradio1"
                          >On</label>

                      <input
                          type="radio"
                          className="btn-check"
                          name="btnradio"
                          id="btnradio2"
                          autoComplete="off"
                      />
                      <label className="btn position-static btn-outline-primary" htmlFor="btnradio2"
                          >off</label>
                      </div>
                  </div>
              </section>

              <section id="sec2">
                  <div className="container">
                      <h3>Advisors</h3>
                      <ul>
                      <li>
                          <a href=" " id="advisorList" onClick={handleShowCurrentAdvisor}>
                          <i className="bi bi-list-ul icon"></i>
                          List current Advisors
                          <i className="bi bi-caret-right iconRight"></i>
                          </a>
                      </li>
                      <li>
                          <a href=" " id="addAdvisor" onClick={handleShowAddAdvisor}>
                          <i className="bi bi-person-plus-fill icon"></i>
                          Add new Advisors
                          <i className="bi bi-caret-right iconRight"></i>
                          </a>
                          {/* {showAddAdvisor ? <AddAdvisor/> : null} */}
                      </li>
                      </ul>
                  </div>
              </section>

              <section id="sec3">
                  <div className="container">
                      <h3>Courses</h3>
                      <ul>
                      <li>
                          <a href=" " id="courseList" onClick={handleShowAllCourses}>
                          <i className="bi bi-list-ul icon"></i>
                          List all Courses
                          <i className="bi bi-caret-right iconRight"></i>
                          </a>
                      </li>
                      <li>
                          <a href=" " id="addcourse" onClick={handleShowAddCourses}>
                          <i className="bi bi-person-plus-fill icon"></i>
                          Add new course
                          <i className="bi bi-caret-right iconRight"></i>
                          </a>
                      </li>
                      </ul>
                  </div>
              </section>

              <section id="sec4">
                  <div className="container">
                      <h3>Students</h3>
                      <ul>
                      <li>
                          <a href=" " id="studentList" onClick={handleShowAllStudents}>
                          <i className="bi bi-list-ul icon"></i>
                          List Students
                          <i className="bi bi-caret-right iconRight"></i>
                          </a>
                      </li>
                      <li>
                          <a href=" " id="addstudent" onClick={handleShowAddStudent}>
                          <i className="bi bi-person-plus-fill icon"></i>
                          Add new student
                          <i className="bi bi-caret-right iconRight"></i>
                          </a>
                      </li>
                      </ul>
                  </div>
              </section>

              <section id="sec5">
                  <div className="container text-center">
                      <a href="/"><i className="bi bi-box-arrow-right"></i> LOGOUT</a>
                  </div>
              </section>
          </div>
  )
    }

}
