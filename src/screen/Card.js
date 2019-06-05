import React, {useState, useEffect} from 'react';
import loading from '../assets/imgs/load.gif'
import ButtonInfo from '../components/BottonInfo/ButtonInfo'
import BoxCard from '../components/style/boxCard'

export default function Card({isLoading, items, films, nextPlanet}) {

  return(
    <BoxCard>
            {isLoading ? (
        <div><img src={loading} alt="loading" className="loading"/></div>
      ) : (
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
      )}
           
      <ButtonInfo nextPlanet={nextPlanet}/>
    </BoxCard>
  )
}

