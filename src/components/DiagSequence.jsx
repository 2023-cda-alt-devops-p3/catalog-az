import React from "react";
import exempleDS from "../assets/exemple-DS.jpeg";
import { useEffect } from "react";

const DiagSequence = () => {

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  
  return (
    <div className="w-80 m-auto">
      <div className="m-auto mt-10">
        <h1 className="text-center mt-100">Diagramme de séquence</h1>
        <div className="mt-50 desktop">
          <img
            className="img-diag mt-100"
            src={exempleDS}
            alt="exemple_Diag_Activite"
          />
          <p className="mt-10  mt-100 text-info">
            Les diagrammes de séquence permettent d'identifier les classes
            requises par un système et le comportement des objets de classes au
            cours des interactions. Vous pouvez détailler les diagrammes de
            séquence et montrer comment un système accomplit les interactions.
          </p>
          <p className="mt-10 text-info">
            Un diagramme de séquence est un diagramme UML (Unified Modeling
            Language) qui représente la séquence de messages entre les objets au
            cours d'une interaction. Un diagramme de séquence comprend un groupe
            d'objets, représentés par des lignes de vie, et les messages que ces
            objets échangent lors de l'interaction. Les diagrammes de séquence
            représentent la séquence de messages transmis entre des objets. Ils
            peuvent également représenter les structures de contrôle entre des
            objets. Par exemple, les lignes de vie dans un diagramme de séquence
            pour un scénario de banque peuvent représenter un client, un
            guichetier ou un responsable d'agence. Les communications entre le
            client, le guichetier et le responsable sont représentés par les
            messages entre ces derniers. Le diagramme de séquence représente les
            objets et les messages entre ces objets.
          </p>
          <h4 className="mt-50">Voila les 5 étapes pour crée un diagramme de sequence :</h4><br />
          <p className="mt-50 text-info">
            
            <br />
            1 : Identifier les acteurs et les objets :<br />
            Déterminer les acteurs (entités ou composants) et les objets
            impliqués dans l’interaction.
            <br />
            <br />
            2 : Définir les lignes de vie:
            <br />
            Dessinez des lignes pointillées verticales (lignes de vie)
            représentant l’existence de chaque acteur ou objet.
            <br />
            <br />
            3: Ajouter des messages :<br />
            Afficher les messages (par exemple, les appels de méthode ou la
            communication) entre les lignes de vie avec des flèches ou des
            lignes, en indiquant la direction.
            <br />
            <br />
            4: Préciser le moment :<br />
            Organiser les messages pour montrer l’ordre chronologique des
            interactions.
            <br />
            <br />
            5 :Annoter et examiner :<br />
            Ajoutez des notes ou des commentaires pour clarifier les détails.
            <br />
            Vérifier l’exactitude et l’exhaustivité du diagramme.
            <br />
            <br />
            Ces étapes fournissent un cadre de base pour créer un diagramme de
            séquence UML pour représenter les interactions et la communication
            entre les objets ou les composants d’un système.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DiagSequence;
