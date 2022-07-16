import React from 'react';
import ProfileAdvisor from './ProfileAdvisor';
import HomePage from './HomePage';
import Nav from './Nav';
import Info from '../components/Info';
import { Routes, Route } from 'react-router-dom';

export default function Advisor() {
  return (
    <div>
        <Nav />
        <Routes>
            <Route path='/homePage' exact element={<HomePage/>}/>
            <Route path='/profileAdvisor' exact element={<ProfileAdvisor/>}/>
            <Route path='/infoApp' exact element={<Info/>}/>
        </Routes>
    </div>
  )
}