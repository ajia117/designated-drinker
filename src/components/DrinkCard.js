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

function getIngridients(drinkObj) {
  let ingridients = [];
  let measures = [];
  let ingridientsList = {};
  console.log(drinkObj);
  for (const [key, value] of Object.entries(drinkObj)) {
    if(key.match(/strIngredient/) != null ) {
      if(value !== null) {
        //temp storage for ingridient
        ingridients.push(value)
      }
    }
    if(key.match(/strMeasure/) != null ) { 
      if(value !== null) {
        //temp storage for ingridient
        measures.push(value);
      }
    }
  }
  ingridients.forEach((element, index) => {
    ingridientsList[element] = measures[index];
  });
  console.log(ingridientsList);
  return ingridientsList;
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
               Ingridients
            </Typography>
         </Grid>
         <Grid item container direction="column" justifyContent="space-evenly" alignItems="flex-start" spacing={4}>
           <Grid item container direction="row" justifyContent="flex-start" alignItems="flex-start" spacing={1}>
             {Object.keys(ingredientList).map((ingredient, index) => {
              return (
                <Grid item key={index} xs={4}>
                  <Typography key={index} variant="body1" gutterBottom>
                     {`- ${ingredient} ${ingredientList[ingredient]}`}
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
  const [ingredientList, setIngridientList] = useState({})
  const [loading, setLoading] = useState(true);

  function getDrink() {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`)
      .then(res => res.json())
      .then((data)=> {
        setDrink(data.drinks[0]);
        return data.drinks[0];
      })
      .then((dataDrink) => {
        setIngridientList(getIngridients(dataDrink)); 
        setLoading(false); 
      })
  }
  useEffect(() => {
    getDrink();
  }, [])
  return ( <>{ loading ? ( <div>loading...</div> ) : <Render drink={drink} ingredientList={ingredientList}/> }</> );
}

export default DrinkCard; 