import React from 'react';
import './Menu.css';
import { NavLink } from 'react-router-dom';


const Menu = () => {

  return (
    <nav>
        <div className='conteneur-nav'>
            <label htmlFor="menu">Menu</label>
            <input type="checkbox" name="menu" id="menu" role='button' />
            <ul>
                <li className='deroulant'>
                    <p className='titre-section'>Diagrame UML</p>
                    <ul className='sous'>
                        <li><NavLink to={"/DCU"}>Diagramme de cas d'utilisation</NavLink></li>
                        <li><NavLink to={"/DC"}>Diagramme de classe</NavLink></li>
                        <li><NavLink to={"/DE"}>Diagramme d'état</NavLink></li>
                        <li><NavLink to={"DComp"}>Diagramme de composants</NavLink></li>
                        <li><NavLink to={"DA"}>Diagramme d'activité</NavLink></li>
                        <li><NavLink to={"DS"}>Diagramme de séquence</NavLink></li>
                    </ul>
                </li>

                <li className='deroulant'>
                    <p className='titre-section'>Diagramme de MERISE</p>
                    <ul className='sous'>
                        <li><NavLink to={"/MCD" }>Modèle conceptuel des données</NavLink></li>
                        <li><NavLink to={"MOD"}>Modèle organisationnel des données</NavLink></li>
                        <li><NavLink to={"MDP"}>Modèle physique des données</NavLink></li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Menu
