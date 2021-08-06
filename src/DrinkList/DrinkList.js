import {
  Link
} from 'react-router-dom';
import {
  useEffect,
  useState
} from 'react';
import { 
  Paper,
  Grid,
  Menu,
  MenuItem, 
  List, 
  ListItem, 
  ListItemText
} from '@material-ui/core';

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
    <div className="drink-list">
      <Grid container direction="row" justifyContent="flex-end" className="drink-filter">
        <Grid item xs></Grid>
        <Grid item xs></Grid>
        <Grid item xs></Grid>
        <Grid item xs>
          <DrinkFilter />
        </Grid>
      </Grid>
      <DrinkGrid drinks={drinks}/>
    </div>
  );
}

const DrinkFilter = () => {

  let options= [
    'vodka',
    'tequila'
  ]
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div className="drink-filter">
      <List component="nav" aria-label="Device settings">
        <ListItem
          button
          aria-haspopup="true"
          aria-controls="lock-menu"
          aria-label="Filter by liquor base"
          onClick={handleClickListItem}
        >
          <ListItemText primary="Filter by liquor base" secondary={options[selectedIndex]} />
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            disabled={index === 0}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

const DrinkGrid = ({drinks}) => {
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