//import './App.css';
import React from 'react'
import { Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import Admin from './Admin/Admin';
//import useToken from './useToken';
import HomePage from './Advisor/HomePage';
import Profile from './Student/Profile';
import Home from './Student/Home';
import Info from './components/Info';
import Calculator from './Student/Calculator';
import Analysis from './Student/Analysis';
import ProfileAdvisor from './Advisor/ProfileAdvisor';

const role = localStorage["role"]

function App (){

    return (
      <div className="App">
            {/* <Login/> 
            <Navbar/>*/}
            <Routes>
                <Route path="/login" element={<Login />}/>

                {/* <Route path="unauthorized" element={<Unauthorized />} /> */}

                {/* <Route element={<RequireAuth allowedRoles={[ROLES.Student]} />}> */}
                  {/* <Route path='/student/*' exact element={<Student/>}/> */}
                {/* </Route> */}

                {/* <Route element={<RequireAuth allowedRoles={[ROLES.Coordinator]} />}> */}
                  {/* <Route path='/advisor/*' exact element={<Advisor/>}/> */}
                {/* </Route> */}


                {/* <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}> */}
                  {/* <Route path="/admin" element={<Admin />} /> */}
                {/* </Route> */}

                <Route path='/home' exact element={ role === "Student" ? <Home/> : <HomePage/>}/>
                <Route path='/admin' exact element={ role === "Coordinator" && <Admin/>}/>
                <Route path='/profile' exact element={<Profile/>}/>
                <Route path='/calculator' exact element={<Calculator/>}/>
                <Route path='/analysis' exact element={<Analysis/>}/>
                <Route path='/infoApp' exact element={<Info/>}/>
                <Route path='/homePage' exact element={<HomePage/>}/>
                <Route path='/profileAdvisor' exact element={<ProfileAdvisor/>}/>
            </Routes>
          {/* <Setting/> */}
      </div>
    );
  }

export default App;
