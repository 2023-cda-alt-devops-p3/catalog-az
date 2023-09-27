import React from 'react';
import '../sidebar/Sidebar.css'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'

const Sidebar = () => {

    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen);
    };

    const [dropdownTwoOpen, setDropdownTwoOpen] = useState(false);

    const toggleDropdownTwo = () => {
      setDropdownTwoOpen(!dropdownTwoOpen);
    };

  return (
    <div>
     <BsArrowRight  size={30} className={`${isOpen ? 'hidden' : 'on'}`} onClick={toggleSidebar}/>
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button
        className={`toggle-button ${isOpen ? 'close' : 'open'}`}
        onClick={toggleSidebar}
      >
        {isOpen ? <BsArrowLeft size={30}/> : ''}
      </button>
      <ul className='mt-50'>
        <li><h4 className='h4'><NavLink to={"/overview"}>Overview</NavLink></h4></li>
        <li onClick={toggleDropdown}> DIAGRAMME UML</li>
        {dropdownOpen && (
            <ul>
                <li><NavLink to={"/DC"} className='link' >Diagramme de classe</NavLink></li>
                <li><NavLink to={"/DE"} className='link'>Diagramme d'état</NavLink></li>
                <li><NavLink to={"/DCU"} className='link'>Diagramme de cas d'utilisation</NavLink></li>
                <li><NavLink to={"DComp"} className='link' >Diagramme de composants</NavLink></li>
                <li><NavLink to={"DA"} className='link' >Diagramme d'activité</NavLink></li>
                <li><NavLink to={"DS"} className='link' >Diagramme de séquence</NavLink></li>
            </ul>
        )}
      
        <li onClick={toggleDropdownTwo}>MERISE</li>
        {dropdownTwoOpen && (
            <ul>
                <li><NavLink to={"MCD"} className='link' >MCD</NavLink></li>
                <li><NavLink to={"MLD"} className='link' >MLD</NavLink></li>
                <li><NavLink to={"MPD"} className='link' >MPD</NavLink></li>
                <li><NavLink to={"MCT"} className='link' >MCT</NavLink></li>
            </ul>
         )}
                     
      </ul>
       
    </div>
    </div>


            




  )
}

export default Sidebar
