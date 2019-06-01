import React, { Component } from 'react';
import styled from 'styled-components';
import Home from './screen/Home';
import Categories from './screen/Categories';
import background from './assets/imgs/background.jpg'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,500|Titillium+Web:400,600,700');
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
  }
  a{
    text-decoration: none;
    color: #333
  }
`;

const ContainerIndex = styled.div `
  background: url(${background});
`;

class App extends Component {


  render(){
    return (
      <Router>
        <GlobalStyle />
        <ContainerIndex>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/categories" component={Categories} />
        </Switch>
        </ContainerIndex>
      </Router>
    );
  }
}

export default App;
