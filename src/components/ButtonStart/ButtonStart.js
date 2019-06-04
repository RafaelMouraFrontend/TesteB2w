import React from 'react';
import { Link } from 'react-router-dom'
import Start from '../style/ButtonStart'

  const ButtomStart = ({props}) => (

  <Link to="/categories">
      <Start>Start Game</Start>
  </Link>

  );
  
export default ButtomStart