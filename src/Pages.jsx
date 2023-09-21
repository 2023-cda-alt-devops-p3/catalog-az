import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Mcd from './components/Mcd';
import DiagCasUtilisation from './components/DiagCasUtilisation';
import DiagClasses from './components/DiagClasses';
import DiagEtat from './components/DiagEtat';
import DiagComposants from './components/DiagComposants';
import DiagActivite from "./components/DiagActivite";
import DiagSequence from "./components/DiagSequence";
import Mpd from './components/Mpd';
import Mod from './components/Mod';
import Overview from './components/Overview';
import App from './App';


const Pages = () => {
    const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
        <Route path='/MCD' element={<Mcd />}  />
        <Route path='/DCU' element={<DiagCasUtilisation />}  />
        <Route path='/DC' element={<DiagClasses />}  />
        <Route path='/DE' element={<DiagEtat />}  />
        <Route path='/DComp' element={<DiagComposants />}  />
        <Route path='/DA' element={<DiagActivite />}  />
        <Route path='/DS' element={<DiagSequence />}  />
        <Route path='/MOD' element={<Mod />}  />
        <Route path='/MPD' element={<Mpd />}  />
        <Route path='/overview' element={<Overview />}  />
    </Routes>
  )
}

export default Pages
