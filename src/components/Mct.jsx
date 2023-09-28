import React from "react";
import exempleMCT from "../assets/exempleMCT.png";
import { useEffect } from "react";

const Mct = () => {
  
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  
  return (
    <div className="w-80 m-auto">
      <div className="m-auto mt-100">
        <h1 className="text-center mt-10">Modèle conceptuel de traitement</h1>
        <div className="mt-50 desktop">
          <img
            className="img-diag mt-100"
            src={exempleMCT}
            alt="exemple_Diag_Activite"
          />
          <p className="mt-10 text-info mt-100">
            Dans la méthodologie Merise, il y a tout un pan de l’analyse qui
            porte sur les traitements. Le MCT ou Modèle Conceptuel des
            Traitements en fait partie. Il présente graphiquement, sous la forme
            de schémas avec des éléments bien définis, les traitements qui
            doivent être informatisés. Il permet d’identifier le fonctionnement
            du système d’information. Dit autrement, il répond au QUOI.
            <br />
            <br />
            Le MCT est le miroir du MCD. Le MCD se focalise sur les données
            alors que le MCT se focalise sur les réponses à donner lorsqu’un
            événement survient. Les 2 sont complémentaires et agissent au niveau
            conceptuel, c’est à dire qu’il cherchent à modéliser le
            fonctionnement d’un point de vue métier.
          </p>
          <p className="mt-50 text-info">
            Le MCT détaille les processus en événements et en opérations :{" "}
            <br /> <br />
            un événement est un déclencheur ou un résultat. Il peut être externe
            ou interne (dans le Système d’Information) ; la synchronisation est
            l’ensemble des conditions à remplir pour déclencher une opération en
            fonction des événements entrants. On utilise ici la logique
            booléenne ; une opération est effectuée suite au déclenchement d’un
            ou plusieurs événements. C’est la somme des actions à réaliser d’un
            coup. On utilise un verbe pour l’exprimer ; des règles d’émission
            sont définis dans l’opération un processus est une suite chaînée
            d’événements et d’opérations. Dans sa version la plus simple, un MCT
            à un événement en entrée, une opération et un événement en sortie.{" "}
            <br /> <br />
            Le MCT sous forme graphique est le résultat d’interviews et
            d’échanges permettant de comprendre comment fonctionne le SI.
            Coucher sur le papier les processus sous forme de MCT est laborieux
            mais permet de poser des bases, de partager la même vision et de
            s’affranchir des contraintes technologiques liées à l’implémentation
            logicielle. Cette phase préparatoire semble être une perte de temps
            mais elle a un réel intérêt lorsque les processus de l’entreprise
            sont nombreux, complexes et stables.
          </p>
          <h4 className="mt-50 titre">Voici cinq étapes pour créer un MCT :</h4>
          <p className="text-info mt-50">
            
            <br />
            <br />1 : Déterminer les traitements : Commencez par identifier les
            différents traitements ou opérations que votre système ou
            organisation effectue sur les données. Ces traitements peuvent
            inclure la transformation des données, la validation, le calcul ou
            toute autre opération. Pour chaque traitement, documentez son
            objectif, les données d’entrée dont il a besoin et la sortie qu’il
            génère. La compréhension des traitements est essentielle pour
            modéliser la façon dont les données circulent dans votre système.
            <br />
            <br />
            2 : Définir les éléments de données :<br />
            - Identifier les éléments de données impliqués dans les traitements.
            Il s’agit des éléments de données ou des attributs qui sont traités
            ou manipulés par les traitements.
            <br />
            - Documenter les éléments de données, leurs types de données et
            leurs relations avec les traitements. Cela aide à comprendre quels
            traitements fonctionnent sur quels éléments de données.
            <br />
            <br />
            3 : Créer des descriptions de traitement :<br />
            - Documenter les descriptions détaillées de chaque traitement. Ces
            descriptions doivent comprendre les étapes du traitement, les règles
            ou les algorithmes appliqués et toute dépendance entre les
            traitements.
            <br />
            - Envisagez d’utiliser des organigrammes, du pseudocode ou d’autres
            techniques pour visualiser la logique du traitement.
            <br />
            <br />
            4 : Construire un diagramme de traitement :<br />
            - Utilisez un diagramme de flux de traitement pour représenter
            visuellement comment les données circulent à travers les
            traitements. Ce diagramme devrait montrer la séquence des
            traitements et les éléments de données avec lesquels ils
            interagissent.
            <br />
            - Comme les diagrammes de flux de données, les diagrammes de flux de
            traitement utilisent généralement des symboles tels que des
            rectangles (représentant les traitements), des flèches (représentant
            les flux de données) et des étiquettes pour décrire chaque élément.
            <br />
            <br />
            5 : Identifier les dépendances et les flux de contrôle :<br />
            - Analyser les dépendances entre les traitements. Certains
            traitements peuvent dépendre des résultats d’autres traitements ou
            doivent être exécutés dans un ordre spécifique.
            <br />- Considérez les flux de contrôle, tels que les points de
            décision ou la ramification conditionnelle, dans les traitements.
            Ces flux de contrôle déterminent la logique qui régit l’exécution
            des traitements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mct;
