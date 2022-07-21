import React, {useEffect, useState} from 'react';
import CurrentAdvisor from './component/CurrentAdvisor';
import AddAdvisor from './component/AddAdvisor';
import AllCourses from './component/AllCourses';
import AddCourses from './component/AddCourses';
import AllStudents from './component/AllStudents';
import AddStudent from './component/AddStudent';
import './CSS/admin.css';
import axios from 'axios';

export default function Admin() {

  const userjwt = localStorage['token'];
  const [advisor, setAdvisor] = useState("");
  const [onOff, setOnOff] = useState("");
    useEffect(() => {
        document.title = 'SAAS | Admin';
        fetch('http://saasproject-001-site1.itempurl.com/api/Acount/GetCurrentUser', {
          method: "Get",
          headers:{
            Authorization : `Bearer ${userjwt}`,
             'Accept': 'application/json',
             'Content-Type': 'application/json'
          }})
          .then((response) => response.json())
          .then((data) => {
            setAdvisor(data)
          }
          );
          fetch('http://saasproject-001-site1.itempurl.com/api/RecCourses/IsCheckControll', {
            method: "Get",
            headers:{
              Authorization : `Bearer ${userjwt}`,
               'Accept': 'application/json',
               'Content-Type': 'application/json'
            }})
            .then((response) => response.json())
            .then((data) => {
              //console.log(data)
              if(data === true){
                setOnOff(data)
              }else{
                setOnOff(data)
              //console.log(onOff)
              }
            }
            );
      });
      // useEffect(async ()=>(
      //   await axios({
      //     method: "PUT",
      //     url: "http://saasproject-001-site1.itempurl.com/api/RecCourses/EditControll",
      //     data: {
      //        ischeck: onOff,
      //     },
      //     headers: {
      //       Authorization: `Bearer ${userjwt}`,
      //       'Content-Type': 'application/json',
      //     },
      //   })
      //     .then((res) => {
      //       if(res === true){
      //         setOnOff(res)
      //       }else{
      //         setOnOff(res)
      //       }
      //       console.log(res)
      //       console.log(res.message)
      //     })
      //     .catch((err) => console.log(err.response, err))
      // ), [onOff, userjwt])
      const handleControl = () => {
        axios({
          method: "PUT",
          url: "http://saasproject-001-site1.itempurl.com/api/RecCourses/EditControll",
          data: {
             ischeck: onOff,
          },
          headers: {
            Authorization: `Bearer ${userjwt}`,
            'Content-Type': 'application/json',
          },
        })
          .then((res) => {
            if(res === true){
              setOnOff(res)
            }else{
              setOnOff(res)
            }
            console.log(res)
            alert(res.message)
          })
          .catch((err) => console.log(err.response, err));
      }
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
                      <h4 id="name">{advisor.name}</h4>
                      <p id="email">{advisor.email}</p>
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
                          checked={onOff === true}
                          onChange={e => setOnOff(e.target.value)}
                          value="true"
                           onClick={handleControl}
                      />
                      <label className="btn position-static btn-outline-primary" htmlFor="btnradio1"
                          >On</label>

                      <input
                          type="radio"
                          className="btn-check"
                          name="btnradio"
                          id="btnradio2"
                          autoComplete="off"
                          checked={onOff === false}
                          onChange={e => setOnOff(e.target.value)}
                          value="false"
                          onClick={handleControl}
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
