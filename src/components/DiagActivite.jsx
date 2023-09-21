import React from 'react'
import exempleDA from '../assets/exemple-DA.png'

const DiagActivite = () => {
  return (
    <div className='w-80 m-auto'>
      <div className="m-auto mt-10"> 
        <h1 className="text-center mt-10" >Diagramme UML d'Activités</h1>
        <div className='mt-50'>
          <img  className="img-diag"src={exempleDA} alt="exemple_Diag_Activite" />
          <p className='mt-10'>Un diagramme d'activité fournit une vue du comportement d'un système en décrivant la séquence d'actions d'un processus. Les diagrammes d'activité sont similaires aux organigrammes de traitement de l'information, car ils montrent les flux entre les actions dans une activité.</p>
        </div>
       
      </div>
    </div>
  )
}

export default DiagActivite
