import React from 'react'
import exempleDCU from '../assets/exemple-DCU.png'

const DiagCasUtilisation = () => {
  return (
    <div className='w-80 m-auto'>
      <div className="m-auto mt-10"> 
        <h1 className="text-center mt-10" >Diagramme de cas d'utilisation</h1>
        <div className='mt-50'>
          <img  className="img-diag"src={exempleDCU} alt="exemple_Diag_Activite" />
          <p className='mt-10'>Les diagrammes de cas d'utilisation modélisent le comportement d'un système et permettent de capturer les exigences du système. Les diagrammes de cas d'utilisation décrivent les fonctions générales et la portée d'un système.</p>
        </div>
       
      </div>
    </div>
  )
}

export default DiagCasUtilisation
