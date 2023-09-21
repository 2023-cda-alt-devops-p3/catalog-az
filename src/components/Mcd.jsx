import React from 'react';
import exempleMCD from '../assets/exemple-MCD.jpg'

const Mcd = () => {
  return (
    <div className='w-80 m-auto'>
    <div className="m-auto mt-10"> 
      <h1 className="text-center mt-10" >Modèle conceptuel des données</h1>
      <div className='mt-50'>
        <img  className="img-diag"src={exempleMCD} alt="exemple_Diag_Activite" />
        <p className='mt-10'>Le MCD fournit une description graphique pour représenter des modèles de données sous la forme de diagrammes pouvant contenir des entités ou des associations. Il peut être utilisé pour décrire les besoins en information ou par exemple le genre d'information nécessaire à l'élaboration du cahier des charges.</p>
      </div>
     
    </div>
  </div>
  )
}

export default Mcd
