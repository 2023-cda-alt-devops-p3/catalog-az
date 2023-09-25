import React from 'react';
import exempleComp from '../assets/exemple-Comp.png'


const DiagComposants = () => {
  return (
    <div className='w-80 m-auto'>
    <div className="m-auto mt-10"> 
      <h1 className="text-center mt-10" >Diagramme de composants</h1>
      <div className='mt-50 desktop'>
        <img  className="img-diag"src={exempleComp} alt="exemple_Diag_Activite" />
        <p className='mt-10 text-info'>
          Un diagramme de composants a pour objectif d'illustrer la relation entre les différents composants d'un système. Dans le cadre de l'UML 2.0, le terme « composant » fait référence à un module de classes qui représentent des systèmes ou des sous-systèmes indépendants ayant la capacité de s'interfacer avec le reste du système.
        </p>
        <p className='mt-10 text-info'>
          Dans UML, les diagrammes de composants représentent la structure du système logiciel, qui décrit les composants du logiciel, leurs interfaces et leurs dépendances. Vous pouvez utiliser des diagrammes de composants pour modéliser des systèmes logiciels à un haut niveau ou pour afficher des composants à un niveau inférieur, au niveau du package.
          Ce type de diagramme prend en charge le développement à base de composants, dans lequel un système logiciel est divisé en composants et interfaces qui sont réutilisables et remplaçables.
        </p>
      </div>
     
    </div>
  </div>
  )
}

export default DiagComposants
