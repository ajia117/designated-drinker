import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import DrinkCard from './DrinkCard/DrinkCard';

import Navbar from './Navbar/Navbar.js';
import Favorites from './Navbar/Favorites.js';
import DrinkPlan from './DrinkPlan/DrinkPlan'
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
            <Route path='/drink/:id' children={({match}) => <DrinkCard idDrink={match.params.id}/>} />
            <Route path='/home'>
              <DrinkList />
            </Route>
            
            <Route path='/Favorites' component={Favorites} />
            <Route path='/plan' component={DrinkPlan} />
            <Redirect to='/home'/>
          </Switch>
        </div>
      </div>
    </Router>
    
  );
}

  
export default App;