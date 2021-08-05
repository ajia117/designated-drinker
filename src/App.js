import './App.css';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';

import DrinkList from './DrinkList/DrinkList';

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
              <DrinkList />
            </Route>
            <Redirect to='/home'/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
