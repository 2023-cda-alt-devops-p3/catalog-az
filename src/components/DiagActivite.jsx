import React from 'react'
import exempleDA from '../assets/exemple-DA.png'

const DiagActivite = () => {
  return (
    <div className='w-80 m-auto'>
      <div className="m-auto mt-10"> 
        <h1 className="text-center mt-10" >Diagramme UML d'Activités</h1>
        <div className='mt-50'>
          <img  className="img-diag"src={exempleDA} alt="exemple_Diag_Activite" />
          <p className='mt-10 text-info'>
Le diagramme d’activité (Activity Diagram) fait parti des diagrammes comportementaux. Il est utilisé pour modéliser les aspects dynamiques d'un système. Il s'agit de représenter les opérations d'un processus et leurs conséquences sur les objets (logiciels ou matériels). La modélisation peut être utilisée pour décrire le déroulement d'un cas
d'utilisation ou d'une méthode.
<br />
Les diagrammes d'activité affichent le flux de travail d'un point de départ à un point d'arrivée en détaillant les nombreux chemins de décision existant dans la progression des événements contenus dans l'activité.
Ils peuvent être utilisés pour détailler des situations dans lesquelles un traitement parallèle peut avoir lieu lors de l'exécution de certaines activités. Les diagrammes d'activités sont utiles pour la modélisation métier car ils sont utilisés pour détailler les processus impliqués dans les activités métier.

<br />
Les diagrammes d'activités permettent de mettre l'accent sur les traitements. Les diagrammes d'activités ne sont pas spécifiquement rattachés à un classeur particulier.
Nous pouvons attacher un diagramme d'activités à n'importe quel élément de modélisation afin de visualiser, spécifier, construire ou documenter le comportement de cet élément.
Dans la phase de conception, les diagrammes d'activités sont particulièrement adaptés pour une plus grande description des cas d'utilisation. Plus précisément, ils viennent illustrer et consolider la description textuelle.
De plus, leur représentation sous forme d'organigrammes nous les rend facilement intelligibles. Nous nous concentrons ici sur les activités telles que les voient les acteurs qui collaborent avec le système dans le cadre d'un processus métier. La modélisation du flot d'objets est souvent importante dans ce type d'utilisation des diagrammes d'activités.
</p>
        </div>
       
      </div>
    </div>
  )
}

export default DiagActivite
