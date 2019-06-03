import React from 'react';
import { Link } from 'react-router-dom'
import Buttons from '../style/Buttons'

  const ButtonInfo = ({ nextPlanet }) => (
    <Buttons>
      <button>
      <Link to="/" className="link">Home</Link>
      </button> 

      <button onClick={ nextPlanet } className="raise">
        Next
      </button>
      
    </Buttons>  
  );
  
export default ButtonInfo