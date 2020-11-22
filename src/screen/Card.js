import React, {useState, useEffect} from 'react';
import loading from '../assets/imgs/load.gif'
import complete from '../assets/imgs/complete.gif'
import ButtonInfo from '../components/BottonInfo/ButtonInfo'
import BoxCard from '../components/style/boxCard'

export default function Card() {
  const [items, setItens] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isComplete, setIsComplete] = useState(false);
  const [films, setFilms] = useState(0)
  const [arrayNumers, setArray] = useState([])
  
  const fetchItems =  React.useCallback(async () => {
    setIsLoading(true)
    const tamUnique = [...new Set(arrayNumers)].length

    arrayNumers.push(numberRandon(61))
    
    let unique = [...new Set(arrayNumers)]
    let tamArr = unique.length 
 
    while(tamUnique === tamArr){
      arrayNumers.push(numberRandon(61))
      unique = [...new Set(arrayNumers)]
      tamArr = unique.length 
    }

    let id = unique.slice(-1)
      
    const response = await fetch(
      `https://swapi.dev/api/planets/${id}/`
    );
    
    const items = await response.json()
    items.name === 'unknown' ? fetchItems() : setItens(items)
    setIsLoading(false)

    if(tamArr >= 61) {
      setIsComplete(true)
      setArray([])
    }
    
    const films = items.films.length
    setFilms(films)
    
  },[arrayNumers])

  useEffect(()=>{
    fetchItems();
  },[fetchItems])
  
  function nextPlanet() {
    fetchItems();
  }

  const numberRandon = num => {
    let number = Math.floor(Math.random() * num + 1)

    return number
  }

  return(
    <BoxCard>
      {isComplete ? (
        <div className="card-complete">
          <img src={complete} alt="complete" className="complete"/>
          <p>Todos os planetas foram buscados!</p>
        </div>
      ) : isLoading ? 
      (
        <div><img src={loading} alt="loading" className="loading"/></div>
      ) 
      : (
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
