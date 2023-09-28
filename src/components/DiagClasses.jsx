import React from "react";
import exempleDC from "../assets/exemple-DC.jpeg";
import { useEffect } from "react";

const DiagClasses = () => {

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  
  return (
    <div className="w-80 m-auto">
      <div className="m-auto mt-10">
        <h1 className="text-center mt-100">Diagramme de classes</h1>
        <div className="mt-100 desktop">
          <img
            className="img-diag mt-100"
            src={exempleDC}
            alt="exemple_Diag_Activite"
          />
          <p className="mt-100 text-info">
            Les diagrammes de classes sont les plans de votre système ou
            sous-système. Vous pouvez utiliser des diagrammes de classes pour
            modéliser les objets qui constituent le système, pour afficher les
            relations entre les objets et pour décrire ce que ces objets font et
            les services qu'ils fournissent.
          </p>
          <p className="mt-10 text-info">
            Dans le langage UML, les diagrammes de classes appartiennent à l'un
            des six types de diagramme structurel. Les diagrammes de classes
            sont fondamentaux pour le processus de modélisation des objets et
            modélisent la structure statique d'un système. Suivant la complexité
            d'un système, vous pouvez utiliser un seul diagramme de classes pour
            modéliser un système complet ou bien vous pouvez utiliser différents
            diagrammes de classes pour modéliser les composants d'un système.
            Les diagrammes de classes sont les plans de votre système ou
            sous-système. Vous pouvez utiliser des diagrammes de classes pour
            modéliser les objets qui constituent le système, pour afficher les
            relations entre les objets et pour décrire ce que ces objets font et
            les services qu'ils fournissent.
          </p>
          <br />
          <br />
          <p className="mt-50 text-info">
           <h4>Les trois étape pour réaliser un diagramme de classes :</h4><br />
            <br />
            Étape 1 : Identifier les noms de classe
            <br />
            La première étape consiste à identifier les principaux objets du
            système.
            <br />
            <br />
            Étape 2 : Distinguer les relations
            <br />
            L’étape suivante consiste à déterminer comment chacune des classes
            ou chacun des objets sont liés les uns aux autres. Recherchez les
            points communs et les abstractions entre eux ; cela vous aidera à
            les regrouper lorsque vous ferez le diagramme de classe.
            <br />
            <br />
            Étape 3 : Créer la structure
            <br />
            Tout d’abord, ajoutez les noms des classes et reliez-les avec les
            connecteurs appropriés. Vous pouvez ajouter des attributs et des
            fonctions/méthodes/opérations plus tard.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DiagClasses;
