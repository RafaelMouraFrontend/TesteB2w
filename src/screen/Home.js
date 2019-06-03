import React from 'react';
import styled from 'styled-components';

import Logo from '../components/Logo/Logo';
import ButtomStart from '../components/ButtonStart/ButtonStart';


const Container = styled.div `
  height: 100vh;
  display: flex;
  flex-direction: column; 
  text-align: center;
  justify-content: center;
  z-index: 99999;
  position: relative;
`;

  const Home = () => (
    <Container>
        <Logo />
        <ButtomStart>
            Start Game
        </ButtomStart>
    </Container> 
  );
  
export default Home