import React from 'react';
import exempleMPD from '../assets/exemple-MPD.jpeg';


const Mpd = () => {
  return (
    <div className='w-80 m-auto'>
    <div className="m-auto mt-10"> 
      <h1 className="text-center mt-10" >Modèle physique des données</h1>
      <div className='mt-50 desktop'>
        <img  className="img-diag"src={exempleMPD} alt="exemple_Diag_Activite" />
        <div className='mt-10 text-info'>
          <p>Dans la méthode Merise, le modèle physique des données (MPD) consiste à implanter une base de données dans un SGBDR. Le langage utilisé pour ce type d'opération est le SQL.</p>
          <p>Concrètement, cette étape permet de construire la structure finale de la base de données avec les différents liens entre les éléments qui la composent. Pour la peine, on change aussi de vocabulaire </p>
            <ul>
              <li>Les entités se transforment en tables ;</li>
              <li>Les propriétés se transforment en champs (ou attributs) ;</li>
              <li>Les propriétés se trouvant au milieu d’une relation génèrent une nouvelle table ou glissent vers la table adéquate en fonction des cardinalités de la relation ;</li>
              <li>Les identifiants se transforment en clés et se retrouvent soulignés. Chaque table dispose d’au minimum 1 clé dite primaire ;</li>
              <li>Les relations et les cardinalités se transforment en champs parfois soulignés : il s’agit de créer des « clés étrangères » reliées à une « clé primaire » dans une autre table.</li>
            </ul>
        </div>
       
      
     </div>
     
    </div>
  </div>
  )
}

export default Mpd
