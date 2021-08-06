import {
  Link
} from 'react-router-dom';
import {
  useEffect,
  useState
} from 'react';

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
      <ul>
        {drinks.map(drink => (
          <li key={drink.idDrink}>
            <Link to={`/drink/${drink.idDrink}`}>
              <img className="row" src={drink.strDrinkThumb} alt={`${drink.strDrink}`}/>
              <div className="row">
                {drink.strDrink}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DrinkList;