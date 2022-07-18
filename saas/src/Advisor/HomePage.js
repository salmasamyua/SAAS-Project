import React, {useEffect, useState} from 'react';
import './AdvisorCSS/advisor.css';
import ShowCalculator from './components/ShowCalculator';
import ShowClass from './components/ShowClass';
import ShowPdf from './components/ShowPdf';
import ShowRegest from './components/ShowRegest';
import ShowStudent from './components/ShowStudent';
import Nav from './Nav';

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
      var [student, setStudent] = useState(false);
      const handleStudent = () => {
          setStudent(current => !current);
      }
      var [regest, setRegest] = useState(false);
      const handleRegest = () => {
          setRegest(current => !current);
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
      else if(student){
        return <ShowStudent/>
      }
      else if(regest){
        return <ShowRegest/>
      }
      else{
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
                    <div className="card4"  onClick={handleStudent}>
                        <i className="bi bi-person-fill"></i>
                        <h6>Students</h6>
                    </div>
                    <div className="card5"   onClick={handleRegest}>
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
