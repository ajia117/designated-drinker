import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import DrinkCard from './components/DrinkCard';

import Navbar from './Navbar/Navbar.js';
import Home from './Navbar/Home.js';
import Favorites from './Navbar/Favorites.js';
import DrinkPlan from './Navbar/DrinkPlan.js';
import DrinkList from './DrinkList/DrinkList';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <div className="content">
          <Switch>
            <Route exact path='/' render={() => <DrinkCard idDrink={'11002'}/>}></Route>
            <Route path='/drink/:id' children={({match}) => <DrinkCard idDrink={match.params.id}/>} />
            <Route path='/home'>
              <DrinkList />
            </Route>
            <Route path='/Favorites' component={Favorites} />
            <Route path='/DrinkPlan' component={DrinkPlan} />
            <Redirect to='/home'/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

  
export default App;