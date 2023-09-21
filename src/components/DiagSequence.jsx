import React from 'react';
import exempleDS from '../assets/exemple-DS.jpeg'

const DiagSequence = () => {
  return (
    <div className='w-80 m-auto'>
    <div className="m-auto mt-10"> 
      <h1 className="text-center mt-10" >Diagramme de séquence</h1>
      <div className='mt-50'>
        <img  className="img-diag"src={exempleDS} alt="exemple_Diag_Activite" />
        <p className='mt-10'>Les diagrammes de séquence permettent d'identifier les classes requises par un système et le comportement des objets de classes au cours des interactions. Vous pouvez détailler les diagrammes de séquence et montrer comment un système accomplit les interactions.</p>
        <p className='mt-10'>
          Un diagramme de séquence est un diagramme UML (Unified Modeling Language) qui représente la séquence de messages entre les objets au cours d'une interaction. Un diagramme de séquence comprend un groupe d'objets, représentés par des lignes de vie, et les messages que ces objets échangent lors de l'interaction.
          Les diagrammes de séquence représentent la séquence de messages transmis entre des objets. Ils peuvent également représenter les structures de contrôle entre des objets. Par exemple, les lignes de vie dans un diagramme de séquence pour un scénario de banque peuvent représenter un client, un guichetier ou un responsable d'agence. Les communications entre le client, le guichetier et le responsable sont représentés par les messages entre ces derniers. Le diagramme de séquence représente les objets et les messages entre ces objets.
        </p>
      </div>
     
    </div>
  </div>
  )
}

export default DiagSequence
