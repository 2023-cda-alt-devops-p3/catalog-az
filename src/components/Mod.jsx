import React from 'react'
import exempleMOD from '../assets/exemple-MOD.png'

const Mod = () => {
  return (
    <div className='w-80 m-auto'>
    <div className="m-auto mt-10"> 
      <h1 className="text-center mt-10" >Modèle organisationnel des données</h1>
      <div className='mt-50'>
        <img  className="img-diag"src={exempleMOD} alt="exemple_Diag_Activite" />
        <p className='mt-10'>Représentation des données mémorisables sans tenir compte des contraintes organisationnelles ou techniques, ni des traitements. Modèle organisationnel des données (MOD) : Prise en compte des contraintes organisationnelles et de certaines contraintes techniques.</p>
      </div>
     
    </div>
  </div>
  )
}

export default Mod
