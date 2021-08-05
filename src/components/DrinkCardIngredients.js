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

function getIngredients(drinkObj) {
  let ingredients = [];
  let measures = [];
  let ingredientsList = {};
  for (const [key, value] of Object.entries(drinkObj)) {
    if(key.match(/strIngredient/) != null ) {
      if(value !== null) {
        //temp storage for ingridient
        ingredients.push(value)
      }
    }
    if(key.match(/strMeasure/) != null ) { 
      if(value !== null) {
        //temp storage for ingridient
        measures.push(value);
      }
    }
  }
  ingredients.forEach((element, index) => {
    ingredientsList[element] = measures[index];
  });
  console.log(ingredientsList);
  return ingredientsList;
}

function DrinkIngredients ({ingredientList}) {

  return (
    <h2>Hello World</h2>
  )

}



export default DrinkIngredients; 