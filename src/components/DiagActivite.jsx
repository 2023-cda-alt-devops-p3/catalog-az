import React from 'react'
import exempleDA from '../assets/exemple-DA.png'

const DiagActivite = () => {
  return (
    <div className='w-80 m-auto'>
      <div className="m-auto mt-10"> 
        <h1 className="text-center" >Diagramme UML d'Activités</h1>
        <img  className="img-diag"src={exempleDA} alt="exemple_Diag_Activite" />
      </div>
    </div>
  )
}

export default DiagActivite
