// import restaurant from "./restaurant.jpg"
import cssNormalize from "./normalize.css";
import css from "./style.css";


console.log("I'm using the index.js file in src to say this?");

//Get the content element we put in the index.html
const content = document.getElementById("content");

//Add restaurant headline
const headline = document.createElement('h1');
headline.textContent = "Mike's Mackerel"
content.appendChild(headline);

//Add restaurant copy
const copy = document.createElement('div');
copy.textContent = "Mike's Mackerel is the best Mackerel in time, try our Mak and cheese, a dish a local reviewer described as 'largely edible'"
content.appendChild(copy);

//Add restaurant image
// const restaurantImage = new Image();
// restaurantImage.src = restaurant;
// content.appendChild(restaurantImage);

