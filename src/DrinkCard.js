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
   height: 500
  },
  imgIng: {
   width: 100,
   height: 200  
  }, 
 
});

function Render() {
  const classes = useStyles();
  return (
   <div className={classes.root} >
     <Grid container direction="row" justifycontenty="flex-start" alignItems="center" spacing={3}>
       <Grid item container justifyContent="center" xs={5}>
         <Card className={classes.drinkCard}>
           <CardContent>
             <Typography gutterBottom variant="h5" component="h2">
               Drink Title
           </Typography>
           </CardContent>
           <CardMedia
              className={classes.imgDrink}
              image="./logo512.png"
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
         <Grid item container justifyContent="flex-start" alignItems="flex-start">
            {[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ].map(() =>{
              return (
              <Grid item xs={3}>
                <img className={classes.imgIng} alt="ingImage" src="./logo192.png" />
              </Grid>)
             })}
         </Grid>
         <Grid item container direction="column" justifyContent="space-evenly" alignItems="flex-start" spacing={4}>
           <Grid item container justifyContent="flex-start" alignItems="flex-start">
             {[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ].map(() =>{
                return (
                <Grid item xs={3}>
                   <Typography variant="body1" gutterBottom>
                      - Lorem ipsum 
                </Typography>
                </Grid>)
              })}
           </Grid>
           <Grid item>
             <Typography variant="h6" gutterBottom>
               Instructions
             </Typography>
             {[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ].map((index) =>{
                return (
                 <Typography variant="body1" gutterBottom>
                 {index}. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
               </Typography>)
              })}
           </Grid>
         </Grid>
         <Grid item>
           <Typography variant="h6" gutterBottom>
             Glass Type
           </Typography>
           <Typography variant="body1" gutterBottom>
             Old-Fashioned Glass
           </Typography>
         </Grid>  
       </Grid>
     </Grid>
    </div>
  );  
}

function DrinkCard( {idDrink} ) {

  async function getDrink() {
    await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`)
      .then(res => res.json)
      .then((data)=> {

     })
 }

  return Render();
}

export default DrinkCard; 