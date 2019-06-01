import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from './screen/Home';
import Categories from './screen/Categories';


const ContainerIndex = styled.div `
  background: #ccc;
`;

class App extends Component {


  render(){
    return (
      <Router>
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
