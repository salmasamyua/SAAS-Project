import React from 'react';
import '../AdvisorCSS/advisor.css';
import Nav from '../Nav';

export default function ShowClass() {
  return (
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
        <section id='class'>
          <div className="container">
                <p>You Don't Have any class schedule now</p> 
          </div>
        </section>
        <section className='goBack'>
          <a href='/homePage'>Go Back</a>
        </section>
    </div>
  )
}
