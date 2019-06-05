import React from 'react';
import BoxCard from '../style/BoxCard'

  const CardInfo = ({items, films}) => (
    <BoxCard>
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
    </BoxCard>
  );
  
export default CardInfo