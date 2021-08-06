import {
  Link
} from 'react-router-dom';
import {
  useEffect,
  useState
} from 'react';


import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import styles from './DrinkList.module.css'

const DrinkList = () => {

  const [drinks, setDrinks] = useState([])

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink")
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setDrinks(data.drinks)
      })

  }, [])


  return (
    <div className="drinks">
      <Grid container spacing={2}>
        {drinks.map(drink => (
          <Grid item xs key={drink.idDrink}>
            <Link to={`/drink/${drink.idDrink}`}>
              <Paper elevation={3}>
                <img className="row" src={drink.strDrinkThumb} alt={`${drink.strDrink}`}/>
                <div className="row">
                  {drink.strDrink}
                </div>
              </Paper>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default DrinkList;