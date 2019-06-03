import React, {useState, useEffect} from 'react';
import ButtonInfo from '../components/BottonInfo/ButtonInfo'
import BoxCard from '../components/style/boxCard'

export default function Card() {

  const [items, setItens] = useState([])
  
  const fetchItems =  React.useCallback(async () => {
    let id = numberRandon(61)
    const response = await fetch(
      `https://swapi.co/api/planets/${id}/`
    );
    const items = await response.json()
    items.name === 'unknown' ? fetchItems() : setItens(items)
    
  },[])

  useEffect(()=>{
    fetchItems();
  },[fetchItems])
  
  function nextPlanet() {
    fetchItems();
  }
  
  const numberRandon = num => {
    let number = Math.floor(Math.random() * num + 1)
    if(number === 0 || number === undefined)
      this.getRandomNumber(num)
    else
      return number
  }

  return(
    <BoxCard>
        <div className="card">
        <h1>{items.name}</h1>
        <ul>
          <li><span>Diameter:</span> {items.diameter}</li>
          <li><span>Population:</span> {items.population}</li>
          <li><span>Climate:</span> {items.climate}</li>
          <li><span>Terrains:</span> {items.terrain}</li>
        </ul>
        </div>             
      <ButtonInfo nextPlanet={nextPlanet}/>
    </BoxCard>
  )
}

