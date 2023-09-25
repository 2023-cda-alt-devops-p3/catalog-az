import React from 'react';
import exempleMCD from '../assets/exemple-MCD.jpg'

const Mcd = () => {
  return (
    <div className='w-80 m-auto'>
    <div className="m-auto mt-10"> 
      <h1 className="text-center mt-10" >Modèle conceptuel des données</h1>
      <div className='mt-50 desktop'>
        <img  className="img-diag"src={exempleMCD} alt="exemple_Diag_Activite" />
        <p className='mt-10 text-info'>Le MCD fournit une description graphique pour représenter des modèles de données sous la forme de diagrammes pouvant contenir des entités ou des associations. Il peut être utilisé pour décrire les besoins en information ou par exemple le genre d'information nécessaire à l'élaboration du cahier des charges.</p>
        <p className='mt-10 text-info'>
          Le Modèle Conceptuel de données est une formalisation d’une structure et la signification des informations pouvant décrire des objets et des associations qui sont perçus comme ayant un intérêt dans le domaine étudié tout en faisant abstraction des solutions et des contraintes techniques informatiques d’implantation en base de données.
          Le Modèle Conceptuel de données a un objectif simple: modéliser le discours métier sans anticiper les solutions relationnelles de mise en oeuvre.
        </p>
      </div>
     
    </div>
  </div>
  )
}

export default Mcd
