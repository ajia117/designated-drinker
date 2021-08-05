import { List } from "@material-ui/core"

{"drinks":
  [
    {
       "idDrink":"11002",
       "strDrink":"Long Island Tea",
       "strDrinkAlternate":null,
       "strTags":"Strong,Asia,StrongFlavor,Brunch,Vegetarian,Sour",
       "strVideo":null,
       "strCategory":"Ordinary Drink",
       "strIBA":null,
       "strAlcoholic":"Alcoholic",
       "strGlass":"Highball glass",
       "strInstructions":"Combine all ingredients (except cola) and pour over ice in a highball glass. Add the splash of cola for color. Decorate with a slice of lemon and serve.",
       "strInstructionsES":null,
       "strInstructionsDE":"Alle Zutaten (au\u00dfer Cola) mischen und in einem Highball-Glas \u00fcber Eis gie\u00dfen. F\u00fcge einen Spritzer Cola hinzu, um Farbe zu erhalten. Mit einer Scheibe Zitrone dekorieren und servieren.",
       "strInstructionsFR":null,"strInstructionsIT":"Unisci tutti gli ingredienti (tranne la cola) e versa il ghiaccio in un bicchiere highball. Aggiungi la spruzzata di cola per il colore. Decorare con una fetta di limone e servire.",
       "strInstructionsZH-HANS":null,
       "strInstructionsZH-HANT":null,
       "strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/nkwr4c1606770558.jpg",
       "strIngredient1":"Vodka",
       "strIngredient2":"Light rum",
       "strIngredient3":"Gin",
       "strIngredient4":"Tequila",
       "strIngredient5":"Lemon",
       "strIngredient6":"Coca-Cola",
       "strIngredient7":null,
       "strIngredient8":null,
       "strIngredient9":null,
       "strIngredient10":null,
       "strIngredient11":null,
       "strIngredient12":null,
       "strIngredient13":null,
       "strIngredient14":null,
       "strIngredient15":null,
       "strMeasure1":"1\/2 oz ",
       "strMeasure2":"1\/2 oz ",
       "strMeasure3":"1\/2 oz ",
       "strMeasure4":"1\/2 oz ",
       "strMeasure5":"Juice of 1\/2 ",
       "strMeasure6":"1 splash ",
       "strMeasure7":null,
       "strMeasure8":null,
       "strMeasure9":null,
       "strMeasure10":null,
       "strMeasure11":null,
       "strMeasure12":null,
       "strMeasure13":null,
       "strMeasure14":null,
       "strMeasure15":null,
       "strImageSource":"https:\/\/pxhere.com\/en\/photo\/1593200",
       "strImageAttribution":"Irina Prokopenko https:\/\/pxhere.com\/en\/photographer\/999895",
       "strCreativeCommonsConfirmed":"Yes",
       "dateModified":"2015-08-18 14:54:32"}]}


       
             
       {[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ].map((item, index) =>{
        return (
        <Grid item key={index} xs={3}>
           <Typography key={index} variant="body1" gutterBottom>
              -  Ingredient
        </Typography>
        </Grid>)
      })}
      
   
  
     {    
        let list = [];
        for (const [key, value] of Object.entries(ingredientList)) {
           list.push(
             <Grid item key={index} xs={3}>
               <Typography key={index} variant="body1" gutterBottom>
                 {`${key} ${value}`}
               </Typography>
             </Grid>) 
        }
        return list;
      }

      {Object.keys(ingredientList).map((ingredient, index) => {
       return (
        <Grid item key={index} xs={3}>
           <Typography key={index} variant="body1" gutterBottom>
             {`- ${ingredient} ${ingredientList[ingredient]}`}
        </Typography>
        </Grid>) 
      })} 

     