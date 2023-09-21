import React from 'react';
import exempleDC from '../assets/exemple-DC.jpeg'

const DiagClasses = () => {
  return (
    <div className='w-80 m-auto'>
    <div className="m-auto mt-10"> 
      <h1 className="text-center mt-10" >Diagramme de classes</h1>
      <div className='mt-50'>
        <img  className="img-diag"src={exempleDC} alt="exemple_Diag_Activite" />
        <p className='mt-10'>Les diagrammes de classes sont les plans de votre système ou sous-système. Vous pouvez utiliser des diagrammes de classes pour modéliser les objets qui constituent le système, pour afficher les relations entre les objets et pour décrire ce que ces objets font et les services qu'ils fournissent.</p>
        <p className='mt-10'>Dans le langage UML, les diagrammes de classes appartiennent à l'un des six types de diagramme structurel. Les diagrammes de classes sont fondamentaux pour le processus de modélisation des objets et modélisent la structure statique d'un système. Suivant la complexité d'un système, vous pouvez utiliser un seul diagramme de classes pour modéliser un système complet ou bien vous pouvez utiliser différents diagrammes de classes pour modéliser les composants d'un système.
          Les diagrammes de classes sont les plans de votre système ou sous-système. Vous pouvez utiliser des diagrammes de classes pour modéliser les objets qui constituent le système, pour afficher les relations entre les objets et pour décrire ce que ces objets font et les services qu'ils fournissent.
        </p>
      </div>
     
    </div>
  </div>
  )
}

export default DiagClasses
