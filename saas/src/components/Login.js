import React, { useEffect, useState,useRef } from 'react';
import '../CSS/styleLogin.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login(){

    const [email, setEmail] = useState('');
    const handleEmail = (e) =>{
        setEmail(e.target.value)
    }

    const [password, setPassword] = useState('');
    const handlePassword = (e) =>{
        setPassword(e.target.value)
    }

    const navigate = useNavigate();

    const userRef = useRef();

    useEffect(() => {
        document.title = 'SAAS | Login';
        userRef.current.focus();
    },[])

    const handleSubmit = async event => {
        event.preventDefault();
    
        axios.post('http://saasproject-001-site1.itempurl.com/api/Acount/Login',{
            email: email,
            password: password
        }).then(
            result => {
                localStorage.setItem('role', result.data.userLogin.roles[0] )
                localStorage.setItem('token', result.data.userLogin.token )
                localStorage.setItem('gender', result.data.userLogin.gender )
                
                if(result.data.status === 'fail'){
                    alert(result.data.message);
                }
                else if(result.data.status === 'success'){
                    if(result.data.userLogin.roles[0] === 'Student'){
                        navigate('/home');        
                    }
                    else if(result.data.userLogin.roles[0] === 'Instructor'){
                        navigate('/homePage');    
                    }
                    else if(result.data.userLogin.roles[0] === 'Coordinator'){
                        navigate('/admin');    
                    }
                    else {
                        console.log(result.data.userLogin.roles[0])
                    }
                }
            }
        ).catch(
            error => {
                alert("This Email or Password is not correct", error)
            }
        )
        }
    return(
        <div className="login-wrapper">
        <div className="row">
            <div className="colLogin1">
                <h3>Log In</h3>
                <form name="form" className="login" method="post" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email" className="label">Email</label>
                        <input type="text" ref={userRef} autoComplete='off' value={email} onChange={handleEmail} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" id="email" name="email" placeholder="Enter your email.." required="required"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="label">Password</label>
                        <input type="password" value={password} onChange={handlePassword} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,}" id="pass" name="password" placeholder="Enter your password.." required="required"/>
                    </div>
                    <button type="submit">Log in</button>
                </form>
            </div>
            <div className="colLogin0">
                <div className='container'>
                    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="dots active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" className="dots" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" className="dots" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="10000">
                            <img src="Images/Onboarding-pana.png" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Welcome To SAAS</h5>
                                <p>It is an academic support system for students and academic advisor.</p>
                            </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                            <img src="Images/Pitch meeting-pana.png" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>The goal of the website</h5>
                                <p>It helps you by suggesting courses that meet your current needs, and at the same time improve your academic performance.</p>
                            </div>
                            </div>
                            <div className="carousel-item">
                            <img src="Images/Working-pana.png" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Lets get started</h5>
                                <p>you are now ready to use the website, you can login by using your university email.</p>
                            </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                        </div>
                </div>
            </div>
        </div>
        </div>
    )
}
