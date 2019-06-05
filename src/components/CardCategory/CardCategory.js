import React from 'react';
import { Link } from 'react-router-dom'
import BoxCat from '../style/boxCat.js'
import planet from '../../assets/imgs/planet-earth.svg'


  const CardCategory = () => (
    <BoxCat>
      <Link className="card" to="/planet">
        <img src={planet} alt="planet"/>
        <p>Planet</p> 
      </Link>
    </BoxCat>
  );
  
export default CardCategory