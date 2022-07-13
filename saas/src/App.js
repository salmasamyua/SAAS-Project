import './App.css';
import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom';
import Setting from './components/Setting';
// import Login from './components/Login';
// import useToken from './useToken';
// import Advisor from './Advisor/Advisor';
 import Admin from './Admin/Admin';
//import Student from './Student/Student';


function App (){
  // const { token, setToken } = useToken();
  // if(!token) {
  //   return <Login setToken={setToken} />
  // }


    return (
      <div className="App">
          <Router>
            {/* <Routes>
              <Route exact path="/student" element={<Student />} />
              <Route exact path="/advisor" element={<Advisor />} />
              <Route exact path="/admin" element={<Admin />} />
            </Routes> */}
          </Router>
          <Admin/>
          <Setting/>
      </div>
    );
  }

export default App;
