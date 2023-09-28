import React from "react";
import exempleDE from "../assets/exemple-DE.png";
import { useEffect } from "react";

const DiagEtat = () => {

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <div className="w-80 m-auto">
      <div className="m-auto mt-100">
        <h1 className="text-center mt-10">Diagramme d'état</h1>
        <div className="mt-100 desktop">
          <img
            className="img-diag mt-100"
            src={exempleDE}
            alt="exemple_Diag_Activite"
          />
          <p className="mt-100 text-info">
            Représenter des objets liés à un événement dans un système réactif.
            Illustrer des cas d'utilisation dans un contexte d'entreprise.
            Décrire comment un objet change d'état au cours de son existence.
          </p>
          <p className="mt-10 text-info">
            Le diagramme états-transitions (State Machine Diagram ou Statechart
            Diagram) fait parti des diagrammes comportementaux. Son rôle, est de
            décrire le fonctionnement d’une machine (ou d’un objet) ayant un
            comportement séquentiel. Il représente les différents états
            (situations) dans lesquels peut se trouver la machine (ou l’objet)
            ainsi que la façon dont cette machine (ou l'objet) passe d’un état à
            l’autre en réponse à des événements.
          </p>
          <p className="text-info mt-50">
            <h4>Voila 5 etapes pour crée un diagramme d'état :</h4> <br />
            <br />
            1 : Identifier les états : Déterminez les conditions ou les phases
            distinctes dans lesquelles votre système ou objet peut se trouver et
            représentez-les en tant qu’états.
            <br />
            <br />
            2 : Définir les transitions : Spécifiez comment le système passe
            d’un état à un autre en réponse à des événements ou des
            déclencheurs. Utilisez les flèches pour afficher ces transitions.
            <br />
            <br />
            3 : Ajouter des actions : Incluez des étiquettes ou des descriptions
            pour indiquer quelles actions ou comportements se produisent dans
            chaque état ou pendant les transitions d’état.
            <br />
            <br />
            4 : Désigner les états initial et final : Indiquez le point de
            départ avec un état initial (cercle noir rempli) et le point final
            (cercle avec un point à l’intérieur).
            <br />
            <br />
            5 : Examiner et peaufiner : Examinez attentivement votre diagramme
            pour en vérifier l’exactitude, la clarté et l’exhaustivité. Apportez
            les améliorations nécessaires pour vous assurer qu’il représente
            correctement le comportement du système.
            <br />
            <br />
            Ces étapes fournissent un cadre de base pour créer un diagramme
            d’état UML et peuvent vous aider à visualiser et à communiquer
            efficacement le comportement de votre système ou de votre objet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DiagEtat;
