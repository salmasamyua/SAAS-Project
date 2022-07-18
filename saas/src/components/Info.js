import React, {useEffect} from 'react';
import '../CSS/styleInfo.css';
import Navbar from '../Student/Navbar';
import Nav from '../Advisor/Nav';

const role = localStorage["role"]

 function Info() {
    useEffect(() => {
        document.title = 'SAAS | Info';
      });
  return (
    <div>
        {
            role === "Student" ? <Navbar/> : <Nav/>
        }
        <section className='info'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12 colInfo">                    
                        <div className="text">
                            <h3>Welcome To SAAS</h3>
                            <p>It is an academic support system for students and academic advisor.</p>
                    </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <img src="../Images/Onboarding-pana.png" alt="Welcome" />
                    </div>
                </div>
            </div>
        </section>

        <section className='info'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <img src="../Images/Pitch meeting-pana.png" alt="meeting-pana" />
                    </div>
                    <div className="col-md-6 col-sm-12 colInfo">
                        <div className="text">
                            <h3>The goal of the website</h3>
                            <p>It helps you by suggesting courses that meet your current needs, and at the same time improve your academic performance.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='info'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12 colInfo">
                        <div className="text">
                            <h3>Lets get started</h3>
                            <p>you are now ready to use the website, you can login by using your university email.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <img src="../Images/Working-pana.png" alt="Working-pana" />
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Info;