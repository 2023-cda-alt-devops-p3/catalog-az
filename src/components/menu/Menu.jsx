import React from 'react';
import { useState } from 'react';
import './Menu.css';
import { NavLink } from 'react-router-dom';
import { FaTimes, FaBars } from 'react-icons/fa';
import logo from '../../logo.svg';


const Menu = () => {

    const [nav, setNav ] = useState(false);

    

  return (
    <div>
        <ul>
            <li>
                Diagrame UML
                <ul>
                    <li>Diagramme de cas d'utilisation</li>
                    <li>Diagramme de classe</li>
                    <li>Diagramme d'état</li>
                    <li>Diagramme de composants</li>
                    <li>Diagramme d'activité</li>
                    <li>Diagramme de séquence</li>
                </ul>
            </li>

            <li>
                Diagramme de MERISE
                <ul>
                    <li>Modèle conceptuel des données</li>
                    <li>Modèle organisationnel des données</li>
                    <li>Modèle physique des données</li>
                </ul>
            </li>
        </ul>
    </div>
  )
}

export default Menu
