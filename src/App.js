import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
  }

  render(){
    return (
      <ContainerIndex>
         {props.children}
      </ContainerIndex>
    );
  }
}

export default App;
