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
  imgDrink: {
   width: 300,
   height: 600
  },
  imgIng: {
   width: 100,
   height: 200  
  }, 
 
});

function DrinkCard( {idDrink} ) {
  const classes = useStyles();

  async function getDrink() {
    await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`)
      .then(res => res.json)
      .then((data)=> {

     })
 }

  return (
   <div className={classes.root} >
     <Grid container direction="row" justifycontenty="flex-start" alignItems="center" spacing={3}>
       <Grid item container justifyContent="center" xs={6}>
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
       <Grid item container direction="column" justifyContent="flex-start" alignItems="flex-start" xs={6} spacing={2}>
         <Grid item container direction="row" justifyContent="center">
            <Typography variant="h6" >
               Ingridients
            </Typography>
         </Grid>
         <Grid item container justifyContent="space-evenly" alignItems="center">
           <Grid item xs={3}>
             <img className={classes.imgIng} alt="ingImage" src="./logo192.png" />
           </Grid>
           <Grid item xs={3}>
             <img className={classes.imgIng} alt="ingImage" src="./logo192.png" />
           </Grid>
           <Grid item xs={3}>
             <img className={classes.imgIng} alt="ingImage" src="./logo192.png" />
           </Grid>
           <Grid item xs={3}>
             <img className={classes.imgIng} alt="ingImage" src="./logo192.png" />
           </Grid>
         </Grid>
         <Grid item container direction="column" justifyContent="space-evenly" alignItems="flex-start" spacing={2}>
           <Grid item>
             <Typography variant="body1" gutterBottom>
               - Lorem ipsum 
             </Typography>
             <Typography variant="body1" gutterBottom>
               - Lorem ipsum 
             </Typography>
             <Typography variant="body1" gutterBottom>
               - Lorem ipsum 
             </Typography>
           </Grid>
           <Grid item>
             <Typography variant="h6" gutterBottom>
               Instructions
             </Typography>
             <Typography variant="body1" gutterBottom>
               1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             </Typography>
             <Typography variant="body1" gutterBottom>
               2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             </Typography>
             <Typography variant="body1" gutterBottom>
               3. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             </Typography>
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

export default DrinkCard; 