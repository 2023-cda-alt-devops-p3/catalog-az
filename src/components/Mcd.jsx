import React from 'react';
import exempleMCD from '../assets/exemple-MCD.jpg'

const Mcd = () => {
  return (
    <div className='w-80 m-auto'>
      <div className="m-auto mt-10"> 
        <h1 className="text-center" >Modèle Conceptuelle de Données</h1>
        <img  className="img-diag"src={exempleMCD} alt="exemple_MCD" />
      </div>
    </div>
  )
}

export default Mcd
