import React from 'react'
import { Routes, Route } from "react-router-dom";
import { DcScreen } from '../Components/dc/DcScreen';
import { HeroeScreen } from '../Components/hero/HeroeScreen';

import { MarvelScreen } from '../Components/marvel/MarvelScreen';
import { SearchScreen } from '../Components/search/SearchScreen';
import { Navbar } from '../Components/ui/Navbar';

export const DashboardRoutes = () => {
  return (
    <>
    <Navbar/>
  
    <div className='container'>
      <Routes>
          <Route exact path="/" element={<MarvelScreen />} />
          <Route path="/marvel" element={<MarvelScreen />} />
          <Route path="/dc" element={<DcScreen />} />
          <Route path="/search" element={<SearchScreen />} />
          <Route path="/heroe/:heroeId" element={<HeroeScreen />} />
          
        </Routes>
    </div>
    
  
     
  </>
  )
}
