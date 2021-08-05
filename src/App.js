import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar.js';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import Home from './Navbar/Home.js';
import Favorites from './Navbar/Favorites.js';
import DrinkPlan from './Navbar/DrinkPlan.js';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <div className="content">
          <Switch>
            <Route path='/Home' component={Home} />
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