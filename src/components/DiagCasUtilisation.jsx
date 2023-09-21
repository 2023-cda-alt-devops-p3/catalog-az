import React from 'react'
import exempleDCU from '../assets/exemple-DCU.png'

const DiagCasUtilisation = () => {
  return (
    <div className='w-80 m-auto'>
      <div className="m-auto mt-10"> 
        <h1 className="text-center mt-10" >Diagramme de cas d'utilisation</h1>
        <div className='mt-50'>
          <img  className="img-diag"src={exempleDCU} alt="exemple_Diag_Activite" />
          <p className='mt-10'>Les diagrammes de cas d'utilisation modélisent le comportement d'un système et permettent de capturer les exigences du système. Les diagrammes de cas d'utilisation décrivent les fonctions générales et la portée d'un système.</p>
          <p className='mt-10'>Le diagramme de cas d'utilisation est un diagramme UML utilisé pour donner une vision globale du comportement fonctionnel d'un systeme logiciel. Un cas d'utilisation represente une unité discrete d'interaction entre un utilisateur (Human ou Machine) et un system. Il est une entité significative de travail
            Dans un diagramme de cas d'utilisation il existe des acteurs (actors) qui interagissent avec des cas d'utilisation (use case) UC.
            Les use case permettent de structurer les besoins des utilisateurs et les objectifs du systeme.
            Une fois identifié et structuré ces besoins : <br />
            - Definissent le contour du systeme a modiliser. <br />
            - Permettent d'identifier les fonctionalités principales ou critiques du systeme.
</p>
        </div>
       
      </div>
    </div>
  )
}

export default DiagCasUtilisation
