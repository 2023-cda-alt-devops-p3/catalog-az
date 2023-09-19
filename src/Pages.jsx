import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Mcd from './components/Mcd';

const Pages = () => {
    const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
        <Route path='/MCD' element={<Mcd />}  />
    </Routes>
  )
}

export default Pages
