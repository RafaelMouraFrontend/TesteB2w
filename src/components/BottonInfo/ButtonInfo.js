import React from 'react';
import { Link } from 'react-router-dom'
import Buttons from '../style/buttons'

  const ButtonInfo = ({ nextPlanet }) => (
    <Buttons>
      <Link to="/" className="link">
        <button className="btn btn-4">
          Home
        </button> 
      </Link>

      <button onClick={ nextPlanet } className="btn btn-4">
        Next
      </button>   
    </Buttons>  
  );
  
export default ButtonInfo