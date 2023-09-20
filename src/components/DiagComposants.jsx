import React from 'react';
import exempleComp from '../assets/exemple-Comp.png'


const DiagComposants = () => {
  return (
    <div className='w-80 m-auto'>
      <div className="m-auto mt-10"> 
        <h1 className="text-center" >Diagramme UML des composants</h1>
        <img  className="img-diag"src={exempleComp} alt="exemple_Diag_Comp" />
      </div>
    </div>
  )
}

export default DiagComposants
