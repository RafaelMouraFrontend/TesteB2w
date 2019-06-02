import React from 'react';
import BoxCat from '../style/boxCat'
import { Link } from 'react-router-dom'


  const CardCategory = () => (
    <BoxCat>
      
      <Link className="card" to="/planet">
        planet
      </Link>
      
    </BoxCat>
  );
  
export default CardCategory