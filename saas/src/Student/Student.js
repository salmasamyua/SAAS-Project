import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Profile from './Profile';
import Info from '../components/Info';
import Calculator from './Calculator';
import Analysis from './Analysis';

export default function Student() {
  return (
    <div>
        <Navbar />
        <Routes>
            <Route path='/home' exact element={<Home/>}/>
            <Route path='/profile' exact element={<Profile/>}/>
            <Route path='/calculator' exact element={<Calculator/>}/>
            <Route path='/analysis' exact element={<Analysis/>}/>
            <Route path='/infoApp' exact element={<Info/>}/>
        </Routes>
    </div>
  )
}