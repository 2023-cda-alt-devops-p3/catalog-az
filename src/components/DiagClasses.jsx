import React from 'react';
import exempleDC from '../assets/exemple-DC.jpeg'

const DiagClasses = () => {
  return (
    <div className='w-80 m-auto'>
      <div className="m-auto mt-10"> 
        <h1 className="text-center" >Diagramme UML des classes</h1>
        <img  className="img-diag"src={exempleDC} alt="exemple_Diag_DC" />
      </div>
    </div>
  )
}

export default DiagClasses
