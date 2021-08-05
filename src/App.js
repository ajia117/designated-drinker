import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import DrinkCard from './components/DrinkCard';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* Navbar goes here */}
        </header>
        <div className="content">
          <Switch>
            <Route exact path='/' render={() => <DrinkCard idDrink={'11002'}/>}></Route>
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
