import React from 'react'
import exempleMOD from '../assets/exemple-MOD.png'

const Mod = () => {
  return (
    <div className='w-80 m-auto'>
    <div className="m-auto mt-10"> 
      <h1 className="text-center" >Modèle Organisationnel de Données</h1>
      <img  className="img-diag"src={exempleMOD} alt="exemple_MCD" />
    </div>
  </div>
  )
}

export default Mod
