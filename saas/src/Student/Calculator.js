import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../CSS/stylePerformance.css';
import Navbar from './Navbar';

 function Calculator() { 
    useEffect(() => {
        document.title = 'SAAS | Calculator';
      });
    return (
      <div>
        <Navbar/>
        <section className="secAnaysis1">
            <h2><NavLink to="/">Home </NavLink><p> { " >> " } Calculator</p></h2>
        </section>

        <section className="secAnaysis2">
            <div className="container">
                {/* eslint-disable-next-line */}
                <iframe id="ifr" src="https://www.calculators.tech/gpa-calculator?widget=1" style={{border: '0px', width: '100%', height: '600px'}} scrolling="yes"/> 
            </div>   
        </section>
      </div>
    )
}

export default Calculator;