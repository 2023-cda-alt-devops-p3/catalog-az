import React from "react";
import exempleComp from "../assets/exemple-Comp.png";

const DiagComposants = () => {
  return (
    <div className="w-80 m-auto">
      <div className="m-auto mt-10">
        <h1 className="text-center mt-10">Diagramme de composants</h1>
        <div className="mt-50 desktop">
          <img
            className="img-diag"
            src={exempleComp}
            alt="exemple_Diag_Activite"
          />
          <p className="mt-10 text-info">
            Un diagramme de composants a pour objectif d'illustrer la relation
            entre les différents composants d'un système. Dans le cadre de l'UML
            2.0, le terme « composant » fait référence à un module de classes
            qui représentent des systèmes ou des sous-systèmes indépendants
            ayant la capacité de s'interfacer avec le reste du système.
          </p>
          <p className="mt-10 text-info">
            Dans UML, les diagrammes de composants représentent la structure du
            système logiciel, qui décrit les composants du logiciel, leurs
            interfaces et leurs dépendances. Vous pouvez utiliser des diagrammes
            de composants pour modéliser des systèmes logiciels à un haut niveau
            ou pour afficher des composants à un niveau inférieur, au niveau du
            package. Ce type de diagramme prend en charge le développement à
            base de composants, dans lequel un système logiciel est divisé en
            composants et interfaces qui sont réutilisables et remplaçables.
          </p>
          <p className="text-info mt-50">
            Comment dessiner un diagramme de composants <br />
            <br />
            Vous pouvez utiliser un diagramme de composants lorsque vous voulez
            représenter votre système en tant que composants et que vous voulez
            montrer leurs interrelations par le biais d’interfaces. Il vous aide
            à vous faire une idée de la mise en œuvre du système. Voici les
            étapes que vous pouvez suivre pour dessiner un schéma de composants.
            <br />
            <br /> Étape 1 : déterminer l’objectif du diagramme et identifier
            les artefacts tels que les fichiers, documents, etc. de votre
            système ou application que vous devez représenter dans votre
            diagramme.
            <br />
            <br /> Étape 2 : Au fur et à mesure que vous établissez les
            relations entre les éléments que vous avez identifiés précédemment,
            créez une disposition mentale de votre diagramme de composants.
            <br />
            <br /> Étape 3 : Au fur et à mesure que vous dessinez le diagramme,
            ajoutez d’abord les composants, en les regroupant dans d’autres
            composants comme vous le souhaitez.
            <br />
            <br /> Étape 4 : L’étape suivante consiste à ajouter d’autres
            éléments tels que des interfaces, des classes, des objets, des
            dépendances, etc. à votre diagramme de composants et à le compléter.
            <br />
            <br /> Étape 5 : Vous pouvez joindre des notes sur les différentes
            parties de votre diagramme de composants pour clarifier certains
            détails à d’autres.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DiagComposants;
