import React from 'react';
import exempleComp from '../assets/exemple-Comp.png'


const DiagComposants = () => {
  return (
    <div className='w-80 m-auto'>
    <div className="m-auto mt-10"> 
      <h1 className="text-center mt-10" >Diagramme de composants</h1>
      <div className='mt-50'>
        <img  className="img-diag"src={exempleComp} alt="exemple_Diag_Activite" />
        <p className='mt-10'>Un diagramme de composants a pour objectif d'illustrer la relation entre les différents composants d'un système. Dans le cadre de l'UML 2.0, le terme « composant » fait référence à un module de classes qui représentent des systèmes ou des sous-systèmes indépendants ayant la capacité de s'interfacer avec le reste du système.
</p>
      </div>
     
    </div>
  </div>
  )
}

export default DiagComposants
