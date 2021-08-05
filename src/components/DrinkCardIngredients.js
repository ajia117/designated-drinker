import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    padding: 100,
  },
  drinkCard: {
    width: 500,
    height: 600
  },
  imgDrink: {
   width: 500,
   height: 600
  },
  imgIng: {
   width: 100,
   height: 200  
  }, 
 
});

function DrinkIngredients ({ingredientList}) {

  return (
    <>
      {Object.keys(ingredientList).map((ingredient, index) => {
        return (
           <Grid item key={index} xs={4}>
              <img src={`http://www.thecocktaildb.com/images/ingredients/${encodeURI(ingredient)}-Small.png`} alt={ingredient}></img>
           </Grid>) 
      })} 
    </>
  )

}

export default DrinkIngredients; 