import React from "react";
import exempleDCU from "../assets/exemple-DCU.png";
import { useEffect } from "react";

const DiagCasUtilisation = () => {

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  
  return (
    <div className="w-80 m-auto">
      <div className="m-auto mt-100">
        <h1 className="text-center mt-10">Diagramme de cas d'utilisation</h1>
        <div className="mt-50 desktop">
          <img
            className="img-diag mt-100"
            src={exempleDCU}
            alt="exemple_Diag_Activite"
          />
          <p className="mt-50 text-info">
            Les diagrammes de cas d'utilisation modélisent le comportement d'un
            système et permettent de capturer les exigences du système. Les
            diagrammes de cas d'utilisation décrivent les fonctions générales et
            la portée d'un système.
          </p>
          <p className="mt-10 text-info">
            Le diagramme de cas d'utilisation est un diagramme UML utilisé pour
            donner une vision globale du comportement fonctionnel d'un systeme
            logiciel. Un cas d'utilisation represente une unité discrete
            d'interaction entre un utilisateur (Human ou Machine) et un system.
            Il est une entité significative de travail Dans un diagramme de cas
            d'utilisation il existe des acteurs (actors) qui interagissent avec
            des cas d'utilisation (use case) UC. Les use case permettent de
            structurer les besoins des utilisateurs et les objectifs du systeme.
            Une fois identifié et structuré ces besoins : <br />
            - Definissent le contour du systeme a modiliser. <br />- Permettent
            d'identifier les fonctionalités principales ou critiques du systeme.
          </p>
          <p className="mt-50 text-info">
            En langage UML, les diagrammes de cas d'utilisation modélisent le
            comportement d'un système et permettent de capturer les exigences du
            système. <br />
            Les diagrammes de cas d'utilisation décrivent les fonctions
            générales et la portée d'un système. Ces diagrammes identifient
            également les interactions entre le système et ses acteurs. Les cas
            d'utilisation et les acteurs dans les diagrammes de cas
            d'utilisation décrivent ce que le système fait et comment les
            acteurs l'utilisent, mais ne montrent pas comment le système
            fonctionne en interne.
            <br />
            <br />
            Les diagrammes de cas d'utilisation illustrent et définissent le
            contexte et les exigences d'un système entier, ou des parties
            essentielles d'un système. Vous pouvez modéliser un système complexe
            avec un seul diagramme de cas d'utilisation, ou créer de nombreux
            diagrammes de cas d'utilisation pour modéliser les composants du
            système. Vous développerez des diagrammes de cas d'utilisation
            essentiellement dans les premières phases d'un projet et vous vous y
            référerez tout au long du processus de développement.
            <br />
            <br />
            Les diagrammes de cas d'utilisation sont utiles dans les situations
            suivantes :
            <br />
            <br />
            Avant de commencer un projet, vous pouvez créer des diagrammes de
            cas d'utilisation pour modéliser une entreprise, afin que tous les
            participants au projet visualisent bien les travailleurs, clients et
            activités de l'entreprise. Lors du recueil des exigences, vous
            pouvez créer des diagrammes de cas d'utilisation pour capturer les
            exigences du système et pour présenter aux autres ce que le système
            doit faire. Lors des phases d'analyse et de conception, vous pouvez
            utiliser les cas d'utilisation et les acteurs de vos diagrammes de
            cas d'utilisation pour identifier les classes nécessaires. Lors de
            la phase de test, vous pouvez utiliser les diagrammes de cas
            d'utilisation pour identifier les tests à réaliser pour le système.
            Les rubriques suivantes décrivent les éléments de modèle dans les
            diagrammes de cas d'utilisation :
            <br />
            <br />
            <strong>Cas d'utilisation :</strong>
            <br />
            <br />
            Un cas d'utilisation décrit une fonction qu'un système exécute pour
            atteindre l'objectif de l'utilisateur. Un cas d'utilisation doit
            renvoyer un résultat observable qui est utile pour l'utilisateur du
            système.
            <br />
            <br />
            <strong>Acteurs : </strong>
            <br />
            <br />
            Un acteur représente un rôle d'un utilisateur qui interagit avec le
            système que vous modélisez. L'utilisateur peut être un utilisateur
            humain, une organisation, une machine ou un autre système externe.
            Sous-systèmes
            <br />
            <br />
            Dans les modèles UML, les sous-systèmes sont un type de composant
            stéréotypé représentant des unités comportementales indépendantes
            dans un système. Les sous-systèmes sont utilisés dans les diagrammes
            de classes, de composants et de cas d'utilisation pour représenter
            des composants de grande taille dans le système que vous modélisez.
            Relations dans les diagrammes de cas d'utilisation En langage UML,
            une relation est une connexion entre des éléments de modèle. Une
            relation UML est un type d'élément de modèle qui ajoute une
            sémantique à un modèle en définissant la structure et le
            comportement entre les éléments de modèle
          </p>
        </div>
      </div>
    </div>
  );
};

export default DiagCasUtilisation;
