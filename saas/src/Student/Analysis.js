import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import '../CSS/stylePerformance.css';

 function Analysis () {
    useEffect(() => {
        document.title = 'SAAS | Analysis';
      });

    return (
      <div>
        <section className="secAnaysis1">
            <h2><NavLink to="/">Home </NavLink><p> { " >> " } Analysis</p></h2>
        </section>

        <section className="secAnaysis2">
        <div className="container">
            <div className="row">
            <div className="col-md-4 col-sm-12 coll">
                    <a className="btn btn-primary collapsible" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                        Semester 1
                        <div className="middle">
                            <div className="bar-container">
                                <div className="bar-5">2.5</div>
                            </div>
                        </div>
                    </a>
                    <div className="collapse" id="collapseExample">
                        <div className="card card-body">
                            <p>University English <b>3.1</b></p>
                            <p>Inro to Quality and Anti-corruption <b>3</b></p>
                            <p>Discrete Maths <b>2.8</b></p>
                            <p>Statistics and Probability <b>2.3</b></p>
                            <p>Intro to Computer Science <b>2.7</b></p>
                            <p>Digital Circuit <b>2.4</b></p>
                            <p>Into to Information Systems <b>3</b></p>
                        </div>
                </div>
            </div>
            <div className="col-md-4 col-sm-12 coll">
                    <a className="btn btn-primary collapsible" data-bs-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Semester 2
                    <div className="middle">
                        <div className="bar-container">
                            <div className="bar-4">3.1</div>
                        </div>
                    </div>
                    </a>
                <div className="collapse" id="collapseExample1">
                    <div className="card card-body">
                        <p>Computer Sciences <b>3.2</b></p>
                        <p>Human Rights <b>3.3</b></p>
                        <p>Linear Algebra <b>2.8</b></p>
                        <p>Programmig Principts <b>2.7</b></p>
                        <p>Multimedia <b>3</b></p>
                        <p>Technical Writing <b>2.8</b></p>
                        <p>Systems Analysis & Design <b>3</b></p>   
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-sm-12 coll">
                    <a className="btn btn-primary collapsible" data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample">
                        Semester 3
                        <div className="middle">
                            <div className="bar-container">
                            <div className="bar-3">2.2</div>
                            </div>
                        </div>
                    </a>
                <div className="collapse" id="collapseExample2">
                    <div className="card card-body">
                        <p>Software Engineering I <b>2.7</b></p>
                        <p>Object Oriented Programming <b>2</b></p>
                        <p>Web Design and Development <b>2.8</b></p>
                        <p>Data Structures <b>2.3</b></p>
                        <p>Database Systems <b>2.7</b></p>
                        <p>Computer Networks <b>2.4</b></p>                    </div>
                    </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
}

export default Analysis;