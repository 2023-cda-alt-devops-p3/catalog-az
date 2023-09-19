import React from 'react';
import exempleMPD from '../assets/exemple-MPD.jpeg';


const Mpd = () => {
  return (
  <div className='w-80 m-auto'>
    <div className="m-auto mt-10"> 
      <h1 className="text-center" >Modèle Physique de Données</h1>
      <img  className="img-diag"src={exempleMPD} alt="exemple_MPD" />
    </div>
  </div>
  )
}

export default Mpd
