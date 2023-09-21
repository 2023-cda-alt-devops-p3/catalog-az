import React from 'react';
import exempleDE from '../assets/exemple-DE.png'


const DiagEtat = () => {
  return (
    <div className='w-80 m-auto'>
    <div className="m-auto mt-10"> 
      <h1 className="text-center mt-10" >Diagramme d'état</h1>
      <div className='mt-50'>
        <img  className="img-diag"src={exempleDE} alt="exemple_Diag_Activite" />
        <p className='mt-10'>Représenter des objets liés à un événement dans un système réactif. Illustrer des cas d'utilisation dans un contexte d'entreprise. Décrire comment un objet change d'état au cours de son existence.
</p>
      </div>
     
    </div>
  </div>
  )
}

export default DiagEtat
