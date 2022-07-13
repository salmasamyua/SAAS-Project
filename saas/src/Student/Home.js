import React, { useEffect } from 'react';
import '../CSS/styleHome.css';
// import {Line} from 'react-chartjs-2';

// const state = {
//   labels: [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150],
//   datasets: [
//         {
//           label: 'Rainfall',
//           fill: true,
//           lineTension: 0.5,
//           backgroundColor: "rgba(255,255,255,1.0)",
//           borderColor: "rgba(0,0,0,0.1)",
//           borderWidth: 2,
//           data: [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15],
//         }
//   ]

// }
 function Home() {
    useEffect(() => {
      document.title = 'SAAS | Home';
    });
    return (
      <div>
          <section className="sectionHome0">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div className="text">
                  <h3>Welcome To SAAS</h3>
                  <h1>Software Department</h1>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 col1">
                <img
                  className="float-end"
                  src="Images/Software code testing-pana.png"
                  alt="Software"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="sectionHome1">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <h3>Your Performace</h3>
                <div className="cardd">
                  <div className="card">
                    <p>Total GPA</p>
                    <div className="circle circlea">2.5</div>
                  </div>
                  <div className="card">
                    <p>Total Hours</p>
                    <div className="circle circleb">73</div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 col2">
                {/* <Line style={{width: '80%', maxWidth: '90%'}} data={state} options={{ 
                  title:{
                      display:true,
                      text:'Average Rainfall per month',
                      fontSize:20
                    },legend:{
                      display:true,
                      position:'right'
                    }
                  }}
                />  */}
                {/* <canvas id="myChart" style={{width: '80%', maxWidth: '90%'}}></canvas> */}
              </div>
            </div>
          </div>
        </section>

        <section className="sectionHome2">
          <div className="container">
            <h3>Current Courses</h3>
            <div className="cardds">
              <div className="cards">
                <h2 style={{backgroundColor: '#d7daeb', color: '#4050bc'}}>MAD</h2>
                <p>Mobile Application Development (CSC402)</p>
                <p className="text-muted fw-light">
                  <i className="bi bi-person-fill"></i>Dr. Abdelrahman Yasser
                </p>
              </div>
              <div className="cards">
                <h2 style={{backgroundColor: '#daedda', color: '#4caa4e'}}>CD</h2>
                <p>Compiler Design (CSC206)</p>
                <p className="text-muted fw-light">
                  <i className="bi bi-person-fill"></i>Dr. Ahmed Mostafa
                </p>
              </div>
              <div className="cards">
                <h2 style={{backgroundColor: '#fcdcd1', color: '#fd5721'}}>ML</h2>
                <p>Machine Learning (CSC405)</p>
                <p className="text-muted fw-light">
                  <i className="bi bi-person-fill"></i>Dr. Mohammed Ali
                </p>
              </div>
              <div className="cards">
                <h2 style={{backgroundColor: '#daedda', color: '#4caa4e'}}>PP</h2>
                <p>Parallel Programming (CSC304)</p>
                <p className="text-muted fw-light">
                  <i className="bi bi-person-fill"></i>Dr. Mohammed Meaad
                </p>
              </div>
              <div className="cards">
                <h2 style={{backgroundColor: '#f9d0de', color: '#e81f62'}}>AL</h2>
                <p>Artificial Intelligence (CSC301)</p>
                <p className="text-muted fw-light">
                  <i className="bi bi-person-fill"></i>Dr. Ahmed Foad
                </p>
              </div>
              <div className="cards">
                <h2 style={{backgroundColor: '#d7daeb', color: '#4050bc'}}>SE ||</h2>
                <p>Software Engineering || (SEN202)</p>
                <p className="text-muted fw-light">
                  <i className="bi bi-person-fill"></i>Dr. Marwa Fekry
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="sectionHome3">
          <div className="container">
            <h3>Recommended Courses</h3>
            <div className="reco">
              <a href="/profile">Start Recommendation</a>
            </div>
          </div>
        </section>
      </div>
    )
}

export default Home;
