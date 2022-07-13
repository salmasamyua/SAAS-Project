import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import Setting from '../components/Setting';
import './AdvisorCSS/advisor.css';

 function Nav() {
  const [isShown, setIsShown] = useState(false);
  const handleSetting = event => {
      event.preventDefault();
      setIsShown(current => !current);
  }
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" aria-label="Fifth navbar example">
            <div className="container">
              <NavLink className="navbar-brand" to="/homePage"><h1>Hi, Ahmed Foad</h1></NavLink>
                <div className="flex-shrink-0 dropdown">
                  <NavLink className="nav-link dropdown-toggle" data-bs-toggle="dropdown" to="#" role="button" aria-expanded="false">Ahmed Foad 
                  <img src="Images/profilemale.jpg" alt="Profile Pic"/></NavLink>
                  <ul className="dropdown-menu">
                    <li><NavLink className="dropdown-item" to="/ProfileAdvisor">Profile</NavLink></li>
                    <li>
                      <NavLink data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handleSetting} className="dropdown-item" to=" ">
                        Setting</NavLink>
                      {isShown && <Setting/>}
                    </li>
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