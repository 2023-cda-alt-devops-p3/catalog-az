import React from 'react';
import exempleDE from '../assets/exemple-DE.png'


const DiagEtat = () => {
  return (
    <div className='w-80 m-auto'>
      <div className="m-auto mt-10"> 
        <h1 className="text-center" >Diagramme UML des états</h1>
        <img  className="img-diag"src={exempleDE} alt="exemple_Diag_DE" />
      </div>
    </div>
  )
}

export default DiagEtat
