const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chip", "bananas"];
 console.log(ingredients);
 let i = 0;
 while (i < ingredients.length) 
 {
  console.log(ingredients[i])
  i++;
 }
 for(let item of ingredients) 
 {
  console.log(item);
 }
 for( let i = ingredients.length - 1; i >= 0; i--)
 {
  console.log(ingredients[i]);
 }