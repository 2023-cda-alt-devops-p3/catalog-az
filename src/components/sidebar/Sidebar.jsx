import React from 'react';
import '../sidebar/Sidebar.css'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs'

const Sidebar = () => {

    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };

  return (
    <div>
     <BsArrowRight  size={30} className={`${isOpen ? 'hidden' : 'on'}`} onClick={toggleSidebar}/>
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button
        className={`toggle-button ${isOpen ? 'close' : 'open'}`}
        onClick={toggleSidebar}
      >
        {isOpen ? 'Close Sidebar' : ''}
      </button>
      <ul>
      <li><h4 className='h4'><NavLink to={"/overview"}>Overview</NavLink></h4></li>
                        <li><NavLink to={"/DC"} className='link' >Diagramme de classe</NavLink></li>
                        <li><NavLink to={"/DE"} className='link'>Diagramme d'état</NavLink></li>
                        <li><NavLink to={"DComp"} className='link' >Diagramme de composants</NavLink></li>
                        <li><NavLink to={"DA"} className='link' >Diagramme d'activité</NavLink></li>
                        <li><NavLink to={"DS"} className='link' >Diagramme de séquence</NavLink></li>
                        <li><NavLink to={"MCD"} className='link' >MCD</NavLink></li>
                        <li><NavLink to={"MLD"} className='link' >MLD</NavLink></li>
                        <li><NavLink to={"MPD"} className='link' >MPD</NavLink></li>
        {/* Add more sidebar items as needed */}
      </ul>
    </div>
    </div>


            




  )
}

export default Sidebar
