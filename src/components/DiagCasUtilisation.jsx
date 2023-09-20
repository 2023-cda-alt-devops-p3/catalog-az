import React from 'react'
import exempleDCU from '../assets/exemple-DCU.png'

const DiagCasUtilisation = () => {
  return (
    <div className='w-80 m-auto'>
      <div className="m-auto mt-10"> 
        <h1 className="text-center" >Diagramme UML de cas d'utilisations</h1>
        <img  className="img-diag"src={exempleDCU} alt="exemple_Diag_DCU" />
      </div>
    </div>
  )
}

export default DiagCasUtilisation
