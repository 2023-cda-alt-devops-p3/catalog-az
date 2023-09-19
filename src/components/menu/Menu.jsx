import React from 'react';
import { useState } from 'react';
import './Menu.css';
import { NavLink } from 'react-router-dom';
import { FaTimes, FaBars } from 'react-icons/fa';
import logo from '../../logo.svg';


const Menu = () => {

    const [nav, setNav ] = useState(false);

    

  return (
    <nav>
        <div className='conteneur-nav'>
            <label htmlFor="menu">Menu</label>
            <input type="checkbox" name="menu" id="menu" role='button' />
            <ul>
                <li className='deroulant'>
                    <p className='titre-section'>Diagrame UML</p>
                    <ul className='sous'>
                        <li><NavLink to={""}>Diagramme de cas d'utilisation</NavLink></li>
                        <li><NavLink to={""}>Diagramme de classe</NavLink></li>
                        <li><NavLink to={""}>Diagramme d'état</NavLink></li>
                        <li><NavLink to={""}>Diagramme de composants</NavLink></li>
                        <li><NavLink to={""}>Diagramme d'activité</NavLink></li>
                        <li><NavLink to={""}>Diagramme de séquence</NavLink></li>
                    </ul>
                </li>

                <li className='deroulant'>
                    <p className='titre-section'>Diagramme de MERISE</p>
                    <ul className='sous'>
                        <li><NavLink to={"/MCD" }>Modèle conceptuel des données</NavLink></li>
                        <li><NavLink to={""}>Modèle organisationnel des données</NavLink></li>
                        <li><NavLink to={""}>Modèle physique des données</NavLink></li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Menu
