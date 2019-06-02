import React from 'react';
import Buttons from '../style/Buttons'

  const ButtonInfo = ({ nextPlanet }) => (
    <Buttons>
      <button>
        Home
      </button> 

      <button onClick={ nextPlanet }>
        Next
      </button>
      
    </Buttons>  
  );
  
export default ButtonInfo