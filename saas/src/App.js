import './App.css';
import React from 'react'
import { Route, Routes} from 'react-router-dom';
// import RequireAuth from './components/RequireAuth';
// import Setting from './components/Setting';
// import Login from './components/Login';
// import Student from './Student/Student';
// import Advisor from './Advisor/Advisor';
// import Unauthorized from './components/Unauthorized';
import Admin from './Admin/Admin';
//import useToken from './useToken';
//import Home from './Student/Home';
//import Profile from './Student/Profile';
//import Navbar from './Student/Navbar';
// import Info from './components/Info';
// import Calculator from './Student/Calculator';
// import Analysis from './Student/Analysis';
// import ProfileAdvisor from './Advisor/ProfileAdvisor';
// import Nav from './Advisor/Nav';
// import HomePage from './Advisor/HomePage';

// const ROLES = {
//   'Student': 'Student',
//   'Advisor': 'Instructor',
//   'Admin': 'Coordinator'
// }

function App (){
  // const { token, setToken } = useToken();
  // if(!token) {
  //   return <Login setToken={setToken} />
  // }


    return (
      <div className="App">
            {/* <Login/> 
            <Navbar/>*/}
            <Routes>
                <Route path="/admin" element={<Admin />} />
                {/* <Route path="/login" element={<Login />}/>
                <Route path="unauthorized" element={<Unauthorized />} />

                <Route element={<RequireAuth allowedRoles={[ROLES.Student]} />}>
                  <Route path='/student/*' exact element={<Student/>}/>
                </Route>

                <Route element={<RequireAuth allowedRoles={[ROLES.Advisor]} />}>
                  <Route path='/advisor/*' exact element={<Advisor/>}/>
                </Route>


                <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
                  <Route path="/admin" element={<Admin />} />
                </Route> */}
                {/* <Route path='/home' exact element={<Home/>}/>
                <Route path='/profile' exact element={<Profile/>}/> */}
                {/* <Route path='/calculator' exact element={<Calculator/>}/>
                <Route path='/analysis' exact element={<Analysis/>}/>
                <Route path='/infoApp' exact element={<Info/>}/> */}
                {/*  */}
                {/* <Route path='/homePage' exact element={<HomePage/>}/>
                <Route path='/profileAdvisor' exact element={<ProfileAdvisor/>}/>
                <Route path='/nav' exact element={<Nav/>}/> */}
            </Routes>
          {/* <Setting/> */}
          {/* <Student/> */}
      </div>
    );
  }

export default App;
