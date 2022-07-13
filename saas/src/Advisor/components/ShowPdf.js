import React from 'react';
import '../AdvisorCSS/advisor.css';

export default function ShowPdf() {
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
                  <img className="float-end" src="Images/Software code testing-pana.png" alt="Software" />
              </div>
              </div>
          </div>
        </section>
        <section id='pdf'>
          <div className="container">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe title='guidePdf' className="embed-responsive-item" src="Images/guide.pdf" height='700' width='100%' allowFullScreen></iframe>
            </div>
            </div>
        </section>
        <section className='goBack'>
          <a href='/homePage'>Go Back</a>
        </section>
    </div>
  )
}
