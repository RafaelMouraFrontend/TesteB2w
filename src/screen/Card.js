import React from 'react';
import loading from '../assets/imgs/load.gif'
import ButtonInfo from '../components/BottonInfo/ButtonInfo'
import CardInfo from '../components/CardInfo/CardInfo'
import BoxCard from '../components/style/BoxCard'

export default function Card(props) {
  return(
    <BoxCard>
      {props.isLoading ? (
        <div>
          <img src={loading} alt="loading" className="loading"/>
        </div>
      ) : (
        <CardInfo {...props} />
      )}
           
      <ButtonInfo nextPlanet={props.nextPlanet}/>
    </BoxCard>
  )
}

