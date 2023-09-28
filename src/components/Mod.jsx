import React from "react";
import exempleMOD from '../assets/exemple-MOD.png'

const Mod = () => {
  return (
    <div className="w-80 m-auto">
      <div className="m-auto mt-100">
        <h1 className="text-center mt-10">Modèlisation organisationnelle des données</h1>
        <div className="mt-50 desktop">
          <img
            className="img-diag mt-100"
            src={exempleMOD}
            alt="exemple_Diag_Activite"
          />
          <p className="mt-10 mt-100 text-info">
            Modèle de données conceptuel : Un MOD est un modèle de données
            conceptuel de haut niveau qui décrit les besoins en données de
            l’organisation et la façon dont les différentes entités de données
            se rapportent les unes aux autres.
            <br />
            <br />
            <strong>Perspective commerciale : </strong>Il se concentre sur la saisie des besoins
            et des exigences de l’organisation en matière de données d’un point
            de vue commercial, en abstenant les détails techniques.
            <br /><br />
            <strong>Entités et relations :</strong> Dans un MOD, vous définissez des entités
            (représentant des objets ou des concepts commerciaux significatifs)
            et des relations (représentant des associations entre ces entités).
            <br /><br />
            <strong>Attributs :</strong> Les entités dans un MOD ont des attributs qui décrivent
            les propriétés ou les caractéristiques de ces entités.
            <br /><br />
            <strong>Cardinalité :</strong> Le MOD spécifie la cardinalité des relations,
            indiquant combien d’instances d’une entité peuvent être liées à des
            instances d’une autre entité (par exemple, un à un, un à plusieurs,
            plusieurs à plusieurs).
            <br /><br />
            <strong>Normalisation :</strong> Les principes de conception de MERISE guident le
            processus de normalisation dans le MOD, garantissant que les données
            sont organisées efficacement et évitant la redondance.
            <br /><br />
            <strong>Pas de détails techniques :</strong> Un MOD ne se préoccupe pas des aspects
            techniques de mise en œuvre comme les systèmes de gestion de base de
            données, le stockage physique ou l’indexation.
            <br /><br />
            <strong>Fondation pour la conception :</strong> Le MOD sert de base pour créer des
            modèles plus détaillés, tels que le modèle de données logique (LDM)
            et finalement le modèle de données physiques (PDM), qui se
            rapprochent de la mise en œuvre technique de la base de données.
            <br /><br />
            Dans l’ensemble, un MOD dans MERISE est une étape essentielle du
            processus de conception du système d’information, aidant les
            analystes et les concepteurs à comprendre les exigences de
            l’organisation en matière de données avant de créer des modèles de
            données détaillés et de mettre en œuvre le système de base de
            données
          </p>
          <p className="mt-50 text-info"></p>
          <p className="text-info mt-50"></p>
        </div>
      </div>
    </div>
  );
};

export default Mod;
