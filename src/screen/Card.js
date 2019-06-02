import React, {useState, useEffect} from 'react';
import ButtonInfo from '../components/BottonInfo/ButtonInfo'
import BoxCard from '../components/style/boxCard'

export default function Card() {

  useEffect(()=>{
    fetchItems();
  },[])

  const [items, setItens] = useState([])

  const fetchItems = async () => {
    let id = numberRandon(61)
    const response = await fetch(
      `https://swapi.co/api/planets/${id}/`
    );
    const items = await response.json()
    setItens(items)

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
        </div>             
      <ButtonInfo/>
    </BoxCard>
  )
}

