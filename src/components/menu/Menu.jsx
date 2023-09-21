import React, { useEffect, useState } from 'react';
import './Menu.css';
import { NavLink } from 'react-router-dom';
import { GrClose } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';


const Menu = () => {
 const navigate = useNavigate();
 const [close, setClose] = useState(false);
 useEffect(() => {
    navigate("")
 }, [close]);


 const closeMenu = (e) => {
 let isChecked = document.getElementById('menu');
 let menu = document.getElementById('list-menu');
 isChecked.checked ? menu.style.display = "none" : menu.style.display = "flex";
 console.log(isChecked.checked);
 }

  return (
    <nav>
        <div className='conteneur-nav'>
            <div className='flex'>
                <label htmlFor="menu" id='title-menu' onClick={closeMenu}>Menu</label>
                <GrClose  className="icon-menu" size={30} onClick={() => {setClose(true); navigate("/")}}/>
            </div>
            
            <input type="checkbox" name="menu" id="menu" role='button' />
            <ul id='list-menu'>
                <li className='deroulant'>
                    <p className='titre-section'>Diagrame UML</p>
                    <ul className='sous'>
                        <li><h4 className='h4'><NavLink to={"/overview"}>Overview</NavLink></h4></li>
                        <li><NavLink to={"/DCU"} onClick={closeMenu} >Diagramme de cas d'utilisation</NavLink></li>
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
                        <li><NavLink to={"Mpd"}>Modèle physique des données</NavLink></li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Menu
