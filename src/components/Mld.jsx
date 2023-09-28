import React from "react";
import exempleMLD from "../assets/exempleMLD.png";
import { useEffect } from "react";

const Mod = () => {

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  
  return (
    <div className="w-80 m-auto">
      <div className="m-auto mt-100">
        <h1 className="text-center mt-10">Modèle logiques des données</h1>
        <div className="mt-50 desktop">
          <img
            className="img-diag mt-100"
            src={exempleMLD}
            alt="exemple_Diag_Activite"
          />
          <p className="mt-10 text-info mt-100">
            Un Modèle Logique des Données (MLD) est une représentation textuelle
            de la base de données à informatiser consécutive au travail
            d'analyse MCD et MPD. À noter que le MLD prend parfois un R et
            devient MLDR ou MLD-R : le R signifiant simplement Relationnel.
          </p>
          <p className="mt-10 text-info">
            Un modèle logique de données (MLD) est la représentation des données
            d'un système d'information. Les données sont représentées en prenant
            en compte le modèle technologique qui sera utilisée pour leur
            gestion. Par exemple : des fichiers, une structure XML ou encore une
            base de données orientée objet. Les données sont représentées sous
            forme de tables et de relations entre tables. Historiquement, le
            terme relationnel s’appliquait à la notion de structure tabulaire ;
            il mettait en évidence les relations existantes entre les colonnes
            d’une table.
          </p>
          <h4 className="mt-50 titre">Voici les étapes pour créer une MLD Merise en 5 étapes simplifiées :</h4>
          <p className="mt-50 text-info">
            
            <br />
            <br />
            1 : Affiner les entités et les attributs :<br />
            - Commencez par les entités et attributs définis dans le MCD.
            <br />
            - Affinez les attributs en spécifiant des types de données, des
            longueurs et des contraintes pour chaque attribut.
            <br />
            - Assurez-vous que les attributs sont bien définis et peuvent être
            mis en œuvre dans une base de données.
            <br />
            <br />
            2 : Définir les clés primaires :<br />
            Identifiez les clés primaires pour chaque entité. Les clés primaires
            identifient de manière unique chaque enregistrement dans un tableau
            et sont essentielles pour l’intégrité de la base de données.
            <br />
            <br />
            3 : Établir des relations :<br />
            - Traduire les relations conceptuelles de la MCD en clés étrangères
            spécifiques dans la MLD.
            <br />
            - Définir des contraintes d’intégrité référentielle pour assurer la
            cohérence des données.
            <br />
            <br />
            4 : Normaliser les données :<br />
            - Appliquer des techniques de normalisation pour éliminer la
            redondance des données et améliorer l’intégrité des données.
            <br />
            - Identifiez les dépendances fonctionnelles et créez des tables
            normalisées pour stocker efficacement les données.
            <br />
            <br />
            5 : Créer des diagrammes :<br />
            - Créez des diagrammes entité-relation (ERDs) pour visualiser la
            structure de votre modèle de données logique.
            <br />
            - Utilisez des symboles et des notations pour représenter des
            entités, des attributs, des clés primaires et des relations.
            <br />
            - Assurez-vous que vos PIU sont clairs et bien documentés.
            <br />
            <br />
            La création d’un MLD Merise est une étape cruciale dans le processus
            de conception de la base de données, car elle comble l’écart entre
            le modèle conceptuel (MCD) et le schéma de base de données physique.
            La MLD sert de modèle pour la construction de la base de données
            réelle, en spécifiant les tables, les colonnes et les relations qui
            seront mises en œuvre dans le système de gestion de base de données.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mod;
