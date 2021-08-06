import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import DrinkIngredients from './DrinkCardIngredients';

const useStyles = makeStyles({
  root: {
    padding: 100,
  },
  drinkCard: {
    width: 400,
    height: 600
  },
  imgDrink: {
   width: 400,
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
  //console.log(drinkObj);
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
  //console.log(ingridientsList);
  return ingredientsList;
}

function Render({drink, ingredientList}) {
  const classes = useStyles();
  return (
   <div className={classes.root} >
     <Grid container direction="row" justifycontenty="flex-start" alignItems="center" spacing={3}>
       <Grid item container justifyContent="center" xs={5}>
         <Card className={classes.drinkCard}>
           <CardContent>
             <Typography gutterBottom variant="h5" component="h2">
               {drink.strDrink}
           </Typography>
           </CardContent>
           <CardMedia
              className={classes.imgDrink}
              image={drink.strDrinkThumb}
              title="Drink Card"
           />
         </Card>
       </Grid>
       <Grid item container direction="column" justifyContent="flex-start" alignItems="flex-start" xs={7} spacing={4}>    
         <Grid item container direction="row" justifyContent="center"> 
            <Typography variant="h6" >
               Ingredients
            </Typography>
         </Grid>
         <Grid item container direction="row" justifyContent="flex-start" spacing={4}> 
            <DrinkIngredients ingredientList={ingredientList}></DrinkIngredients>
         </Grid>
         <Grid item container direction="column" justifyContent="space-evenly" alignItems="flex-start" spacing={4}>
           <Grid item container direction="row" justifyContent="flex-start" alignItems="flex-start" spacing={2}>
             {Object.keys(ingredientList).map((ingredient, index) => {
              return (
                <Grid item key={index} xs={6}>
                  <Typography key={index} variant="body1" gutterBottom>
                     {`- ${ingredient} ${ingredientList[ingredient] ? ingredientList[ingredient]: ''}`}
                  </Typography>
                </Grid>) 
              })} 
           </Grid>
           <Grid item container  direction="column" justifyContent="flex-start" alignItems="flex-start" spacing={2}>
             <Grid item>
               <Typography variant="h6" gutterBottom>
                 Instructions
               </Typography>
             </Grid>
             <Grid item container direction="column" justifyContent="flex-start" alignItems="flex-start" spacing={0}>
                {drink.strInstructions.slice(0, -1).split('.').map((item, index) => {
                  return (  
                      <Grid item key={index}>
                       <Typography key={index} variant="body1" gutterBottom>
                        {`- ${item}.`}
                      </Typography>
                      </Grid>         
                   );  
                })}
              </Grid>
           </Grid>
         </Grid>
         <Grid item container  direction="column" justifyContent="flex-start" alignItems="flex-start" spacing={2}>
         <Grid item>
           <Typography variant="h6" gutterBottom>
             Glass Type
           </Typography>
         </Grid>
         <Grid item>
           <Typography variant="body1" gutterBottom>
             {drink.strGlass}
           </Typography>
         </Grid>
       </Grid>  
       </Grid>
     </Grid>
    </div>
  );  
}
function DrinkCard( {idDrink} ) {
  const [drink, setDrink] = useState({})
  const [ingredientList, setIngredientList] = useState({})
  const [loading, setLoading] = useState(true);

  function getDrinks() {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`)
      .then(res => res.json())
      .then((data)=> {
        setDrink(data.drinks[0]);
        return data.drinks[0];
      })
      .then((dataDrink) => {
        setIngredientList(getIngredients(dataDrink)); 
        setLoading(false); 
      })
    }  
    useEffect(() => {
        getDrinks();
  }, [])
  return ( <>{ loading ? ( <div>loading...</div> ) : <Render drink={drink} ingredientList={ingredientList}/> }</> );
}

export default DrinkCard; 