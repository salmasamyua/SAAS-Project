import React, {useEffect, useState} from 'react';
import './AdvisorCSS/advisor.css';
import ShowCalculator from './components/ShowCalculator';
import ShowClass from './components/ShowClass';
import ShowPdf from './components/ShowPdf';

export default function HomePage() {
    useEffect(() => {
        document.title = 'SAAS | Advisor';
      });
      var [pdf, setPdf] = useState(false);
      const handlePdf = () => {
          setPdf(current => !current);
      }      
      var [calculator, setCalculator] = useState(false);
      const handleCalculator = () => {
          setCalculator(current => !current);
      }
      var [classSc, setClassSc] = useState(false);
      const handleClassSchedule = () => {
          setClassSc(current => !current);
      }
      
      if(pdf){
          return <ShowPdf/>
      }
      else if(calculator){
          return <ShowCalculator/>
      }
      else if(classSc){
          return <ShowClass/>
      }
      else{
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
                <section className="secAdvisor1">
                <div className="container">
                    <div className="card1" onClick={handleClassSchedule}>
                        <i className="bi bi-window-fullscreen"></i>
                        <h6>Class Schedule</h6>
                    </div>
                    <div className="card2" onClick={handlePdf}>
                        <i className="bi bi-journal-bookmark-fill"></i>
                        <h6>Guide Book</h6>
                    </div>
                    <div className="card3">
                        <i className="bi bi-pen-fill"></i>
                        <h6>Subjects</h6>
                    </div>
                    <div className="card4">
                        <i className="bi bi-person-fill"></i>
                        <h6>Students</h6>
                    </div>
                    <div className="card5">
                        <i className="bi bi-window-fullscreen"></i>
                        <h6>Subject Regesteration</h6>
                    </div>
                    <div className="card6" onClick={handleCalculator}>
                        <i className="bi bi-calculator"></i>
                        <h6>Calculator</h6>
                    </div>
                </div>
                </section>
            </div>
  )
      }

}
