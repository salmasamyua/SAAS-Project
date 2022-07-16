import React from 'react';
import '../AdvisorCSS/advisor.css';

export default function ShowCalculator() {
  return (
    <div className='advisor'>
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
        <section id='cal'>
          <div className="container">
                <iframe id="ifr" title='Calculator' src="https://www.calculators.tech/gpa-calculator?widget=1" style={{border: '0px', width: '100%', height: '600px'}} scrolling="yes">
                </iframe> 
            </div>
        </section>
        <section className='goBack'>
          <a href='/advisor/homePage'>Go Back</a>
        </section>
    </div>
  )
}
