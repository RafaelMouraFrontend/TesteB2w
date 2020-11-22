import React from 'react';
import styled from 'styled-components';
import Logoimg from '../../assets/imgs/logo.svg'

const ImgLogo = styled.img `
  max-width: 600rem;
  margin: 0 auto;
`;

  const Logo = () => (
    <ImgLogo src={Logoimg} alt="StarWars"/>
  );
  
export default Logo