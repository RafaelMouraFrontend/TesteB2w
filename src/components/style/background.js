import styled from 'styled-components';
import bgStar from '../../assets/imgs/star.gif'

const Background = styled.div `
  background-size: cover;
  height:100vh;
  padding: 0 20px;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  overflow: hidden;
  background-image: url(${bgStar});
  @media (min-width: 665px) {
    padding: 0;
  }

`

export default Background;