import React,{ useState} from 'react'
import '../AdvisorCSS/advisor.css';
import Nav from '../Nav'
import axios from 'axios';

export default function ShowRegest() {
    const userjwt = localStorage['token'];
    const [student, setStudent] = useState([]);
    const [level, setLevel] = useState("1");
    
    const handleSubmit = () =>{
      axios({
        method: "POST",
        url: "http://saasproject-001-site1.itempurl.com/api/Users/GetAllStudent",
        data: {
          level: level,
        },
        headers: {
          Authorization: `Bearer ${userjwt}`,
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
      })
        .then((res) => {
          setStudent(res.data);
          // console.log(student)
          // if(student.length === 0){
          //   alert('There are no students in this level yet')
          // }
          document.querySelector("#student").style.display = "block";
        })
        .catch((err) => console.log(err.response));
    }
    const handleModal = () =>{
        document.querySelector('#modal').style.display = "block";
        console.log(student.id)
    }
  return (
    <div>
    <div className='advisor'>
        <Nav/>
        <section className="secAdvisor0">
          <div className="container">
              <div className="row">
              <div className="col-md-6 col-sm-12">
                  <div className="text">
                  <h3>Welcome To SAAS</h3>
                  <h1>The perfect system for any acadimic advisor</h1>
                  </div>
              </div>
              <div className="col-md-6 col-sm-12 colAdvisor1">
                  <img className="float-end" src="../Images/Software code testing-pana.png" alt="Software" />
              </div>
              </div>
          </div>
        </section>
        <section id='students'>
          <div className="container">
                <div id='select'>
                    <label htmlFor="studentLevel">choose the level of the students you want to list:</label>
                    <select name="studentLevel" id="studentLevel" value={level} onChange={(e) => setLevel(e.target.value)}>
                        <option value="1">Level 1</option>
                        <option value="2">Level 2</option>
                        <option value="3">Level 3</option>
                        <option value="4">Level 4</option>
                    </select>
                    <button type="button" onClick={handleSubmit}> List</button>
                </div>
                <ul id="student">
                {student ? (student.map(student => (
                    <li key={student.id} onClick={handleModal}>
                        <h6>{student.fullName}</h6>
                        <p>{student.id}</p>
                        <p>{student.level}</p>
                        <p>{student.email}</p>
                        <p>{student.phone}</p>
                  <div id="modal" style={{display: "none"}}>
                  <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Add Subject
                  </button> 
                  <div  className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="staticBackdropLabel">Recommended Courses</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            List of Subjects:
                            
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          <button type="button" className="btn btn-primary">Save</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div> 
                  </li>
                ))) : <li>There are problem in data</li> }
                </ul>
            </div>
        </section>
        <section className='goBack'>
          <a href='/homePage'>Go Back</a>
        </section>
    </div>
    </div>
  )
}
