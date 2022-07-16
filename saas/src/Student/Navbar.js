import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import '../CSS/styleHome.css';
//import Setting from '../components/Setting';

export default function Navbar() {

  const userjwt = localStorage['token'];
  const [student, setStudent] = useState("");
  const [profilePic, setProfilePic] = useState("");
    useEffect(() => {
        fetch('http://saasproject-001-site1.itempurl.com/api/Acount/GetCurrentUser', {
          method: "Get",
          headers:{
            Authorization : `Bearer ${userjwt}`,
             'Accept': 'application/json',
             'Content-Type': 'application/json'
          }})
          .then((response) => response.json())
          .then((data) => {
            setStudent(data)
            if(student.gender === "Female"){
                setProfilePic("../Images/profile.jpeg")
            }
            else{
                setProfilePic("../Images/profilemale.jpg")
            }
          }
          );
      });
    //   const [isShown, setIsShown] = useState(false);
    //   const handleSetting = event => {
    //       event.preventDefault();
    //       setIsShown(current => !current);
    //   }
    return (
      <div>
          <nav
            className="navbar navbar-expand-lg navbar-dark fixed-top"
            aria-label="Fifth navbar example"
        >
            <div className="container">
            <NavLink className="navbar-brand" to="/home"
                ><img src="../Images/logo.png" alt="SAAS Logo" />
                <h1>SAAS</h1>
            </NavLink>
            <button
                className="navbar-toggler collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarsExample05"
                aria-controls="navbarsExample05"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="navbar-collapse collapse" id="navbarsExample05">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/student/home"
                    >Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/student/calculator">Calculator</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/student/analysis">Analysis</NavLink>
                </li>
                <li className="nav-item dropdown">
                    <NavLink
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    to=" "
                    role="button"
                    aria-expanded="false"
                    >{student.name}
                    <img src={profilePic} alt="Profile"
                    /></NavLink>
                    <ul className="dropdown-menu">
                    <li>
                        <NavLink className="dropdown-item" to="/student/profile">Profile</NavLink>
                    </li>
                    {/* <li>
                        <NavLink
                        className="dropdown-item"
                        to=' '
                        data-bs-toggle="modal" data-bs-target="#exampleModal"
                        onClick={handleSetting}
                        style={{width: 'auto'}}
                        >Setting</NavLink>
                        {isShown && <Setting/>}
                    </li> */}
                    <li>
                        <NavLink className="dropdown-item" to="/student/infoApp">Info App</NavLink>
                    </li>
                    <li><hr className="dropdown-divider" /></li>
                    <li>
                        <NavLink className="dropdown-item" to="/login"
                        >Log out <i className="bi bi-box-arrow-right"></i
                        ></NavLink>
                    </li>
                    </ul>
                </li>
                </ul>
            </div>
            </div>
        </nav>
      </div>
    )
}

