import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';

import Navbar from './Navbar/Navbar.js';
import Favorites from './Navbar/Favorites.js';
import DrinkCard from './DrinkCard/DrinkCard';
import DrinkPlan from './DrinkPlan/DrinkPlan'
import DrinkList from './DrinkList/DrinkList';
import './App.css';


const App = () => {
  const [search, setSearch] = useState("");
  const [drinkPlan, setDrinkPlan] = useState([])

  const searchChange = (event) => {
    console.log(event.target.value)
    setSearch(event.target.value)
  }
  
  function addDrinkToPlan (drink){
   console.log(`Drink = ${drink}`) 
   let temp = [...drinkPlan];
   temp.push(drink);
   setDrinkPlan(temp);  
  }


  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar onSearch={searchChange}/>
        </header>
        <div className="content">
          <Switch>
            <Route path='/drink/:id' children={({match}) => <DrinkCard addDrink={addDrinkToPlan} idDrink={match.params.id} drinkPlan={drinkPlan}/>} />
            <Route path='/home'>
              <DrinkList search={search}/>
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