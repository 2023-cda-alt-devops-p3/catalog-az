import React from 'react';
import exempleDS from '../assets/exemple-DS.jpeg'

const DiagSequence = () => {
  return (
    <div className='w-80 m-auto'>
    <div className="m-auto mt-10"> 
      <h1 className="text-center mt-10" >Diagramme de séquence</h1>
      <div className='mt-50'>
        <img  className="img-diag"src={exempleDS} alt="exemple_Diag_Activite" />
        <p className='mt-10'>Les diagrammes de séquence permettent d'identifier les classes requises par un système et le comportement des objets de classes au cours des interactions. Vous pouvez détailler les diagrammes de séquence et montrer comment un système accomplit les interactions.</p>
      </div>
     
    </div>
  </div>
  )
}

export default DiagSequence
