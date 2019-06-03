import styled from 'styled-components';
import bgStar from '../../assets/imgs/star.gif'

const ContainerIndex = styled.div `
  background-size: cover;
  height:100vh;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  overflow: hidden;
  background-image: url(${bgStar})

`

export default ContainerIndex;