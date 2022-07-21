import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
//import Setting from '../components/Setting';
import './AdvisorCSS/advisor.css';

 function Nav() {
  const userjwt = localStorage['token'];
  const gender = localStorage['gender'];
  const [advisor, setAdvisor] = useState("");
  const [profilePic, setProfilePic] = useState("");
    useEffect(() => {
        if(gender === "female"){
            setProfilePic("../Images/profile.jpeg")
        }
        else{
            setProfilePic("../Images/profilemale.jpg")
        }
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
      }, [gender, userjwt]);
  // const [isShown, setIsShown] = useState(false);
  // const handleSetting = event => {
  //     event.preventDefault();
  //     setIsShown(current => !current);
  // }
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" aria-label="Fifth navbar example">
            <div className="container">
              <NavLink className="navbar-brand" to="/homePage"><h1>Hi, {advisor.name}</h1></NavLink>
                <div className="flex-shrink-0 dropdown">
                  <NavLink className="nav-link dropdown-toggle" data-bs-toggle="dropdown" to="#" role="button" aria-expanded="false">{advisor.name}
                  <img src={profilePic} alt="Profile Pic"/></NavLink>
                  <ul className="dropdown-menu">
                    <li><NavLink className="dropdown-item" to="/profileAdvisor">Profile</NavLink></li>
                    {/* <li>
                      <NavLink data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handleSetting} className="dropdown-item" to=" ">
                        Setting</NavLink>
                      {isShown && <Setting/>}
                    </li> */}
                    <li><NavLink className="dropdown-item" to="/infoApp">Info App</NavLink></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><NavLink className="dropdown-item" to="/">Log out <i className="bi bi-box-arrow-right"></i></NavLink></li>
                  </ul>
                </div>
            </div>
          </nav>
    </div>
  )
}

export default Nav;