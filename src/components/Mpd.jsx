import React from 'react';
import exempleMPD from '../assets/exemple-MPD.jpeg';


const Mpd = () => {
  return (
    <div className='w-80 m-auto'>
    <div className="m-auto mt-10"> 
      <h1 className="text-center mt-10" >Modèle physique des données</h1>
      <div className='mt-50'>
        <img  className="img-diag"src={exempleMPD} alt="exemple_Diag_Activite" />
        <p className='mt-10'>Dans la méthode Merise, le modèle physique des données (MPD) consiste à implanter une base de données dans un SGBDR. Le langage utilisé pour ce type d'opération est le SQL.</p>
      </div>
     
    </div>
  </div>
  )
}

export default Mpd
