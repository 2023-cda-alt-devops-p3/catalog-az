import React from 'react';
import { CardInfos } from '../assets/infoscard';
import { NavLink } from 'react-router-dom';


const Overview = () => {
  return (
    <div className="card-container mt-50">
          {
            CardInfos.map(({id, title, img, url, spec, cardtxt}) => (
                    <div className="cards" key={id}>
                        <img src={img} alt={`image_diagram_${id}`} className="model-picture" />
                        <h2 className="type">{spec}</h2>
                        <h1 className="card-title">{title}</h1>
                        <p className="description">{cardtxt}</p>
                        <div className="shopping-container">
                            <NavLink to={url}><button className="basket-button">VOIR PLUS</button></NavLink>
                        </div>
                    </div>
              ))
          }
    </div>
            

  )
}

export default Overview
