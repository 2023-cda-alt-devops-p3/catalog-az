import React from 'react';
import exempleDS from '../assets/exemple-DS.jpeg'

const DiagSequence = () => {
  return (
    <div className='w-80 m-auto'>
      <div className="m-auto mt-10"> 
        <h1 className="text-center" >Diagramme UML des séquences</h1>
        <img  className="img-diag"src={exempleDS} alt="exemple_DS" />
      </div>
    </div>
  )
}

export default DiagSequence
