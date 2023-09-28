import React from "react";
import exempleMPD from "../assets/exemple-MPD.jpeg";
import { useEffect } from "react";

const Mpd = () => {

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  
  return (
    <div className="w-80 m-auto">
      <div className="m-auto mt-100">
        <h1 className="text-center mt-10">Modèle physique des données</h1>
        <div className="mt-50 desktop">
          <img
            className="img-diag mt-100"
            src={exempleMPD}
            alt="exemple_Diag_Activite"
          />
          <div className="mt-10 text-info mt-100">
            <p>
              Dans la méthode Merise, le modèle physique des données (MPD)
              consiste à implanter une base de données dans un SGBDR. Le langage
              utilisé pour ce type d'opération est le SQL.
            </p>
            <br />
            <p>
              Concrètement, cette étape permet de construire la structure finale
              de la base de données avec les différents liens entre les éléments
              qui la composent. Pour la peine, on change aussi de vocabulaire{" "}
            </p>
            <ul>
              <li>Les entités se transforment en tables ;</li>
              <li>Les propriétés se transforment en champs (ou attributs) ;</li>
              <li>
                Les propriétés se trouvant au milieu d’une relation génèrent une
                nouvelle table ou glissent vers la table adéquate en fonction
                des cardinalités de la relation ;
              </li>
              <li>
                Les identifiants se transforment en clés et se retrouvent
                soulignés. Chaque table dispose d’au minimum 1 clé dite primaire
                ;
              </li>
              <li>
                Les relations et les cardinalités se transforment en champs
                parfois soulignés : il s’agit de créer des « clés étrangères »
                reliées à une « clé primaire » dans une autre table.
              </li>
            </ul>
            <h4 className="mt-50 titre">Voici les étapes pour créer un MPD Merise en 5 étapes simplifiées :</h4>
            <p className="mt-50 text-infp">
              
              <br />
              <br />
              1 : Sélectionnez un système de gestion de base de données :<br />
              - Choisissez un SGBD spécifique (par exemple, MySQL, Oracle, SQL
              Server) que vous utiliserez pour implémenter votre schéma de base
              de données.
              <br />
              - Tenez compte des caractéristiques et des capacités du SGBD
              sélectionné, car elles peuvent influencer vos décisions de
              conception.
              <br />
              <br />
              2 : Associer le modèle logique au modèle physique :<br />
              - Traduisez les entités, attributs, relations et contraintes de
              votre MLD dans les constructions prises en charge par le SGBD
              choisi.
              <br />
              - Déterminer les types de données (p. ex., VARCHAR, INT, DATE) et
              spécifier les contraintes (p. ex., clés uniques et étrangères) en
              fonction des exigences du SGBD.
              <br />
              <br />
              3 : Créer des tables et des index :<br />
              - Créez les tables de base de données physiques en fonction des
              entités de votre MLD.
              <br />
              - Définissez des clés primaires, des clés étrangères et des index
              pour renforcer l’intégrité des données et optimiser les
              performances des requêtes.
              <br />
              <br />
              4 : Optimiser le rendement :<br />
              - Envisagez des techniques d’optimisation des performances de base
              de données, telles que la dénormalisation, le partitionnement et
              l’indexation, en fonction des besoins spécifiques et des objectifs
              de performance de votre application. 5 : Générer des scripts SQL :
              <br />
              - Générez des scripts SQL ou utilisez des outils de modélisation
              de base de données pour créer le schéma de base de données
              physique.
              <br />
              - Assurez-vous que les scripts générés sont compatibles avec votre
              SGBD choisi et peuvent être exécutés pour créer la base de
              données.
              <br />
              <br />
              La création d’un MPD Merise est la dernière étape du processus de
              conception de la base de données et aboutit à un schéma de base de
              données concret qui peut être implémenté et utilisé dans votre
              application. Il est essentiel de cartographier soigneusement le
              modèle logique au modèle physique tout en tenant compte des
              caractéristiques et des exigences spécifiques du SGBD choisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mpd;
