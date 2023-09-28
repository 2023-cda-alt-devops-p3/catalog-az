import React from "react";
import exempleMCD from "../assets/exemple-MCD.jpg";

const Mcd = () => {
  return (
    <div className="w-80 m-auto">
      <div className="m-auto mt-100">
        <h1 className="text-center mt-10">Modèle conceptuel des données</h1>
        <div className="mt-50 desktop">
          <img
            className="img-diag mt-100"
            src={exempleMCD}
            alt="exemple_Diag_Activite"
          />
          <p className="mt-10 mt-100 text-info">
            Le MCD fournit une description graphique pour représenter des
            modèles de données sous la forme de diagrammes pouvant contenir des
            entités ou des associations. Il peut être utilisé pour décrire les
            besoins en information ou par exemple le genre d'information
            nécessaire à l'élaboration du cahier des charges.
          </p>
          <p className="mt-10 text-info">
            Le Modèle Conceptuel de données est une formalisation d’une
            structure et la signification des informations pouvant décrire des
            objets et des associations qui sont perçus comme ayant un intérêt
            dans le domaine étudié tout en faisant abstraction des solutions et
            des contraintes techniques informatiques d’implantation en base de
            données. Le Modèle Conceptuel de données a un objectif simple:
            modéliser le discours métier sans anticiper les solutions
            relationnelles de mise en oeuvre.
          </p>
          <p className="mt-50 text-info">
            <h4>Voici les étapes pour créer un MCD Merise en 5 étapes simplifiées :</h4>
            <br />
            <br />
            1 : Identifier les entités :
            <br />
            Identifiez les principales entités ou objets qui représentent les
            concepts clés de votre système. Ces entités doivent représenter des
            choses du monde réel ou des concepts pertinents pour votre
            application.
            <br />
            <br />
            2 : Définir les attributs :
            <br />
            Pour chaque entité, spécifiez les attributs ou les propriétés qui
            les décrivent et les caractérisent. Les attributs doivent être
            atomiques et pertinents pour l’entité.
            <br />
            <br />
            3 : Établir des relations :
            <br />
            Déterminer les relations entre les entités. Ces relations
            définissent la façon dont les entités sont connectées ou associées
            les unes aux autres. Les types de relations courantes comprennent
            les relations individuelles, individuelles et multiples.
            <br />
            <br />
            4 : Ajouter des cardinalités :
            <br />
            Assignez des cardinalités aux relations, en indiquant combien
            d’instances d’une entité sont liées à des instances d’une autre
            entité. Les notations courantes incluent "1" (un), "M" (plusieurs)
            ou des nombres spécifiques.
            <br />
            <br />
            5 : Examiner et peaufiner :
            <br />
            Vérifiez l’intégralité, l’exactitude et la cohérence de votre MCD.
            Assurez-vous qu’il représente fidèlement la structure des données et
            les relations au sein de votre système. Apportez les améliorations
            ou les ajustements nécessaires.
            <br />
            <br />
            La création d’un MCD Merise est une étape fondamentale dans la
            conception de la base de données et vous aide à établir une
            compréhension claire de la structure et des relations des données
            dans votre système. Il sert de base pour créer des modèles plus
            détaillés et finalement construire le schéma de base de données.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mcd;
