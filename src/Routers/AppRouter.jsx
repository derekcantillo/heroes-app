import React from 'react'
import { Routes, Route } from "react-router-dom";
import { DcScreen } from '../Components/dc/DcScreen';
import { LoginScreen } from '../Components/login/LoginScreen';
import { MarvelScreen } from '../Components/marvel/MarvelScreen';

import { DashboardRoutes } from './DashboardRoutes';
export const AppRouter = () => {
  return (
    <div>
     
        <Routes>
        
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/*" element={<DashboardRoutes/>} />
      </Routes>
    </div>
  )
}
