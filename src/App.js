import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';

import DrinkPlan from './DrinkPlan/DrinkPlan'
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
            <Route path='/plan'>
              <DrinkPlan />
            </Route>
            <Redirect to='/home'/>
          </Switch>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
