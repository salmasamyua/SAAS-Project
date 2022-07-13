import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import '../CSS/styleHome.css';
import Setting from '../components/Setting';

export default function Navbar() {
      const [isShown, setIsShown] = useState(false);
      const handleSetting = event => {
          event.preventDefault();
          setIsShown(current => !current);
      }
    return (
      <div>
          <nav
            className="navbar navbar-expand-lg navbar-dark fixed-top"
            aria-label="Fifth navbar example"
        >
            <div className="container">
            <NavLink className="navbar-brand" to="/home"
                ><img src="Images/logo.png" alt="SAAS Logo" />
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
                    <NavLink className="nav-link" aria-current="page" to="/home"
                    >Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/calculator">Calculator</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/analysis">Analysis</NavLink>
                </li>
                <li className="nav-item dropdown">
                    <NavLink
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    to=" "
                    role="button"
                    aria-expanded="false"
                    >Salma Samy
                    <img src="Images/profile.jpeg" alt="Profile"
                    /></NavLink>
                    <ul className="dropdown-menu">
                    <li>
                        <NavLink className="dropdown-item" to="/profile">Profile</NavLink>
                    </li>
                    <li>
                        <NavLink className="dropdown-item" to="Arabic version//"
                        >Language <button>العربية</button></NavLink>
                    </li>
                    <li>
                        <NavLink
                        className="dropdown-item"
                        to=' '
                        data-bs-toggle="modal" data-bs-target="#exampleModal"
                        onClick={handleSetting}
                        style={{width: 'auto'}}
                        >Setting</NavLink>
                        {isShown && <Setting/>}
                    </li>
                    <li>
                        <NavLink className="dropdown-item" to="/infoApp">Info App</NavLink>
                    </li>
                    <li><hr className="dropdown-divider" /></li>
                    <li>
                        <NavLink className="dropdown-item" to="/"
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

