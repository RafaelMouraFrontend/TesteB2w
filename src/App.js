import React, {useState, useEffect} from 'react';
import Home from './screen/Home';
import Categories from './screen/Categories';
import Card from './screen/Card';
import Background from './components/style/background'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Teko:400,600,700&display=swap');
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
  }
  a{
    text-decoration: none;
    color: #333;
    outline: none;
  }
  button{
  outline: none;
  }
`;

export default function App() {

  const [items, setItens] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [films, setFilms] = useState([])

  const fetchItems =  React.useCallback(async () => {
    setIsLoading(true);
    let id = numberRandon(61)
    const response = await fetch(
      `https://swapi.co/api/planets/${id}/`
    );
    const items = await response.json()
    items.name === 'unknown' ? fetchItems() : setItens(items)
    setIsLoading(false)
    const films = items.films.length
    setFilms(films)
    
  },[])

  useEffect(()=>{
    fetchItems();
  },[fetchItems])
  
  function nextPlanet() {
    fetchItems();
  }
  
  const numberRandon = num => {
    let number = Math.floor(Math.random() * num + 1)
    if(number === 0 || number === undefined)
      this.getRandomNumber(num)
    else
      return number
  }
    
     return (
      <Router>
        <GlobalStyle />
        <Background>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/categories" component={Categories} />
          <Route path="/planet"  
                  render={() => <Card  
                                      isLoading={isLoading} 
                                      items={items}
                                      films={films}
                                      nextPlanet={nextPlanet}

                                      />} />
        </Switch>
        </Background>
      </Router>
    )
}
