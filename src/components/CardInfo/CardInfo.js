import React from 'react';


  const CardInfo = ({items, films}) => (
    <div className="card">
      <h1>{items.name}</h1>
      <ul>
        <li><span>Diameter:</span> {items.diameter}</li>
        <li><span>Population:</span> {items.population}</li>
        <li><span>Climate:</span> {items.climate}</li>
        <li><span>Terrains:</span> {items.terrain}</li>
      </ul>
      <p>Films: {films}</p>
    </div>  
  );
  
export default CardInfo