import React from 'react'
import exempleMLD from '../assets/exemple-MLD.png'

const Mod = () => {
  return (
    <div className='w-80 m-auto'>
    <div className="m-auto mt-10"> 
      <h1 className="text-center mt-10" >Modèle logiques des données</h1>
      <div className='mt-50'>
        <img  className="img-diag"src={exempleMLD} alt="exemple_Diag_Activite" />
        <p className='mt-10 text-info'>Un Modèle Logique des Données (MLD) est une représentation textuelle de la base de données à informatiser consécutive au travail d'analyse MCD et MPD. À noter que le MLD prend parfois un R et devient MLDR ou MLD-R : le R signifiant simplement Relationnel.</p>
        <p className='mt-10 text-info'>
        Un modèle logique de données (MLD) est la représentation des données d'un système d'information. Les données sont représentées en prenant en compte le modèle technologique qui sera utilisée pour leur gestion. Par exemple : des fichiers, une structure XML ou encore une base de données orientée objet.
        Les données sont représentées sous forme de tables et de relations entre tables. Historiquement, le terme relationnel s’appliquait à la notion de structure tabulaire ; il mettait en évidence les relations existantes entre les colonnes d’une table.
        </p>
      </div>
     
    </div>
  </div>
  )
}

export default Mod
