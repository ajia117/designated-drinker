import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';

import Home from './Navbar/Home.js';
import Favorites from './Navbar/Favorites.js';
import Navbar from './Navbar/Navbar.js';
import DrinkPlan from './Navbar/DrinkPlan.js';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* Navbar goes here */}
        </header>
        <div className="content">
          <Switch>
            <Route path='/home'>
              <p>Content goes here</p>
            </Route>
            <Redirect to='/home'/>
          </Switch>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
