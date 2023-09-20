// import restaurant from "./restaurant.jpg"
import cssNormalize from "./normalize.css";
import css from "./style.css";
import { createElementInDOM } from "./createElementInDOM.js";
import { loadHomeContent } from "./home.js";
import { loadMenuContent } from "./menu.js";
import { loadContactContent } from "./contact";

const content = document.getElementById("content");

//Add tabs for navigation
const tabContainer = createElementInDOM('div', content, 'tab-container');

const homeTab = createElementInDOM('div', tabContainer, 'tab', 'home-tab');
homeTab.textContent = "Home";
homeTab.addEventListener('click', wipeContent);
homeTab.addEventListener('click', loadHomeContent);

const menuTab = createElementInDOM('div', tabContainer, 'tab', 'menu-tab');
menuTab.textContent = "Menu"
menuTab.addEventListener('click', loadMenuContent);


const contactTab = createElementInDOM('div', tabContainer, 'tab', 'contact-tab');
contactTab.textContent = "Contact"
contactTab.addEventListener('click', loadContactContent);

//Add a container for our content
const container = createElementInDOM('div', content, 'container', 'container');

//Load home content by default
homeTab.classList.add('active');
loadHomeContent();

//Add restaurant image
// const restaurantImage = new Image();
// restaurantImage.src = restaurant;
// content.appendChild(restaurantImage);


//Functions
function wipeContent() {
    container.replaceChildren();
    console.log("container content wiped")
}

// debugger;