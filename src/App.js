import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Navbar/Home.js';
import Favorites from './Navbar/Favorites.js';
import DrinkPlan from './Navbar/DrinkPlan.js';

  
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/Home' component={Home} />
        <Route path='/Favorites' component={Favorites} />
        <Route path='/DrinkPlan' component={DrinkPlan} />
      </Switch>
    </Router>
  );
}
  
export default App;