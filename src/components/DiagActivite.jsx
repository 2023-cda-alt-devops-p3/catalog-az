import React from "react";
import exempleDA from "../assets/exemple-DA.png";
import { useEffect } from "react";

const DiagActivite = () => {

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);


  return (
    <div className="w-80 m-auto">
      <div className="m-auto mt-100">
        <h1 className="text-center mt-10">Diagramme UML d'Activité</h1>
        <div className="mt-100 desktop">
          <img
            className="img-diag mt-100"
            src={exempleDA}
            alt="exemple_Diag_Activite"
          />
          <p className="mt-100 text-info">
            Le diagramme d’activité (Activity Diagram) fait parti des diagrammes
            comportementaux. Il est utilisé pour modéliser les aspects
            dynamiques d'un système. Il s'agit de représenter les opérations
            d'un processus et leurs conséquences sur les objets (logiciels ou
            matériels). La modélisation peut être utilisée pour décrire le
            déroulement d'un cas d'utilisation ou d'une méthode.
            <br />
            Les diagrammes d'activité affichent le flux de travail d'un point de
            départ à un point d'arrivée en détaillant les nombreux chemins de
            décision existant dans la progression des événements contenus dans
            l'activité. Ils peuvent être utilisés pour détailler des situations
            dans lesquelles un traitement parallèle peut avoir lieu lors de
            l'exécution de certaines activités. Les diagrammes d'activités sont
            utiles pour la modélisation métier car ils sont utilisés pour
            détailler les processus impliqués dans les activités métier.
            <br />
            Les diagrammes d'activités permettent de mettre l'accent sur les
            traitements. Les diagrammes d'activités ne sont pas spécifiquement
            rattachés à un classeur particulier. Nous pouvons attacher un
            diagramme d'activités à n'importe quel élément de modélisation afin
            de visualiser, spécifier, construire ou documenter le comportement
            de cet élément. Dans la phase de conception, les diagrammes
            d'activités sont particulièrement adaptés pour une plus grande
            description des cas d'utilisation. Plus précisément, ils viennent
            illustrer et consolider la description textuelle. De plus, leur
            représentation sous forme d'organigrammes nous les rend facilement
            intelligibles. Nous nous concentrons ici sur les activités telles
            que les voient les acteurs qui collaborent avec le système dans le
            cadre d'un processus métier. La modélisation du flot d'objets est
            souvent importante dans ce type d'utilisation des diagrammes
            d'activités.
          </p>
        </div>
        <div className="mt-50 w-80 m-auto text-info">
          <h2>Comment créer un diagramme d'activité UML</h2>
          <p className="mt-50">
            1. Déterminer la portée du diagramme d'activité
            <br />
            <br />
            Commencez par identifier ce que vous modélisez. Est-il un seul cas
            d'utilisation? Une partie d'un cas d'utilisation? Un processus
            d'affaires qui comprend plusieurs cas d'utilisation? Une seule
            méthode d'une classe? Une fois que vous identifiez la portée de
            votre diagramme, vous devez ajouter une étiquette en haut, à l'aide
            d'une note, indiquant un titre approprié pour le diagramme et un
            identifiant unique pour elle. Vous pouvez également inclure la date
            et même les noms des auteurs du diagramme.
            <br />
            <br />
            2. Ajouter des points de début et de fin
            <br />
            <br />
            Chaque diagramme d'activité a un point de départ et un point
            d'arrivée, de sorte que vous pourriez aussi bien les ajouter
            immédiatement. Dans UML (voir Ressources), et Scott Fowler faire des
            points se terminant en option. Parfois, une activité est tout
            simplement une impasse, mais, si tel est le cas, alors il n'y a pas
            de mal à indiquant la seule transition est à un point d'arrivée. De
            cette façon, quand quelqu'un lit votre diagramme, il ou elle sait
            que vous avez examiné comment sortir ces activités.
            <br />
            <br />
            3. Ajouter des activités
            <br />
            <br />
            Si vous modélisez un cas d'utilisation, introduisez une activité
            pour chaque étape majeur initié par un acteur (cette activité
            inclurait l'étape initiale, plus les étapes décrivant la réponse du
            système à l'étape initiale). Si vous modélisez un processus
            d'affaires de haut niveau, introduisez une activité pour chaque
            processus majeur, souvent un cas d'utilisation ou d'un ensemble de
            cas d'utilisation. Enfin, si vous modélisez une méthode, il est
            courant d'avoir une activité pour cette étape dans le code.
            <br />
            <br />
            4. Ajouter des transitions des activités
            <br />
            <br />
            Mon style est toujours de sortir d'une activité, même si elle est
            tout simplement à un point d'arrivée. Chaque fois qu'il ya plus
            d'une transition d'une activité, vous devez étiqueter chaque
            transition appropriée.
            <br />
            <br />
            5. Ajouter des points de décision
            <br />
            <br />
            Parfois, la logique de ce que vous modélisez des appels pour qu'une
            décision soit prise. Peut-être que quelque chose doit être inspecté
            ou par rapport à quelque chose d'autre. Ce qui est important à noter
            est que l'utilisation de points de décision est facultative. Par
            exemple, dans la figure 1, je pourrais tout aussi bien pu modéliser
            les transitions acceptés et rejetés directement de l'activité
            "inscrire à l'université".
            <br />
            <br />
            6. Identifier les opportunités pour les activités parallèles
            <br />
            <br />
            Deux activités peuvent se produire en parallèle lorsqu'aucune de
            relation directe existe entre eux et ils doivent à la fois arrivée
            avant une troisième activité. Dans la figure 1, vous voyez, il est
            possible d'assister à la vue d'ensemble ou s'inscrire à des
            séminaires dans un ordre quelconque, mais les deux activités doivent
            se produire avant que vous pouvez mettre fin à l'ensemble du
            processus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DiagActivite;
