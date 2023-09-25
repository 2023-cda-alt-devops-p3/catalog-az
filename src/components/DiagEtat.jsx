import React from 'react';
import exempleDE from '../assets/exemple-DE.png'


const DiagEtat = () => {
  return (
    <div className='w-80 m-auto'>
    <div className="m-auto mt-10"> 
      <h1 className="text-center mt-10" >Diagramme d'état</h1>
      <div className='mt-50 desktop'>
        <img  className="img-diag"src={exempleDE} alt="exemple_Diag_Activite" />
        <p className='mt-10 text-info'>Représenter des objets liés à un événement dans un système réactif. Illustrer des cas d'utilisation dans un contexte d'entreprise. Décrire comment un objet change d'état au cours de son existence.
</p>
<p className='mt-10 text-info'>
  Le diagramme états-transitions (State Machine Diagram ou Statechart Diagram) fait parti des diagrammes comportementaux. Son rôle, est de décrire le fonctionnement d’une machine (ou d’un objet) ayant un comportement séquentiel.
  Il représente les différents états (situations) dans lesquels peut se trouver la machine (ou l’objet) ainsi que la façon dont cette machine (ou l'objet) passe d’un état à l’autre en réponse à des événements.
</p>
      </div>
     
    </div>
  </div>
  )
}

export default DiagEtat
