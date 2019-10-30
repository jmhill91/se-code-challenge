import React from 'react';
import './App.css';
import { Switch, Route} from 'react-router-dom';
import Home from './Home'
import Search from './Search'

function App() {
  return (
  	<Switch>
  	<Route exact path="/" render={(routerProps) => <Home {...routerProps}/> }/>
  	<Route path='/search' render={(routerProps) => <Search {...routerProps}/> }/>
  	</Switch>
  );
}

export default App;
