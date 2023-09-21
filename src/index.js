// import restaurant from "./restaurant.jpg"
import cssNormalize from "./normalize.css";
import css from "./style.css";
import { createElementInDOM } from "./createElementInDOM.js";
import { loadHomeContent } from "./home.js";
import { loadMenuContent } from "./menu.js";
import { loadContactContent } from "./contact";

//Create an overall content container at the top level of the body
const content = createElementInDOM('div', null, null, 'content');

//Add tabs for navigation
const tabContainer = createElementInDOM('div', content, 'tab-container');

const homeTab = createElementInDOM('button', tabContainer, 'tab', 'home-tab');
homeTab.textContent = "Home";
homeTab.addEventListener('click', switchTab);
homeTab.addEventListener('click', loadHomeContent);

const menuTab = createElementInDOM('button', tabContainer, 'tab', 'menu-tab');
menuTab.textContent = "Menu"
menuTab.addEventListener('click', switchTab);
menuTab.addEventListener('click', loadMenuContent);


const contactTab = createElementInDOM('button', tabContainer, 'tab', 'contact-tab');
contactTab.textContent = "Contact"
contactTab.addEventListener('click', switchTab);
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

function switchTab(event) {
    
    //Wipe the container
    container.replaceChildren();
    
    //Remove active tab class
    homeTab.classList.remove('active');
    menuTab.classList.remove('active');
    contactTab.classList.remove('active');

    //Set selected tab to active
    event.target.classList.add('active');
}

// debugger;