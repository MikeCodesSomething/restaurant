import { createElementInDOM } from "./createElementInDOM.js";

//Used to load menu-tab content into a container


export function loadMenuContent(event) {
    //Set Menu tab to active
    event.target.classList.add('active');
    
    //Identify the container
    const container = document.getElementById('container')

    //Create heading
    const headline = createElementInDOM('h1',container,'headline');
    headline.textContent= 'Menu';

    //Create starter container and menu items:
    const starters = createElementInDOM('div', container, 'info-box', 'starters');
    
    const startersTitle = createElementInDOM('h3', starters, 'sub-title', 'starters-title');
    startersTitle.textContent = 'Starters:';
    
    const mozzarellaMarlin = createElementInDOM('div', starters, 'menu-item');
    mozzarellaMarlin.textContent = "Mozzarella Marlin: Grilled marlin steak topped with fresh mozzarella and tomato bruschetta."
    
    const swisstingraySandwich = createElementInDOM('div', starters, 'menu-item');
    swisstingraySandwich.textContent = "Swiss-tingray Sandwich: Grilled stingray served in a toasted sandwich with Swiss cheese and sautéed onions."

    //Create mains container and menu items
    const mains = createElementInDOM('div', container, 'info-box', 'mains');

    const mainsTitle = createElementInDOM('h3', mains, 'sub-title', 'mains-title');
    mainsTitle.textContent = 'Mains:';

    const makNCheese = createElementInDOM('div', mains, 'menu-item');
    makNCheese.textContent = "Mak 'n' Cheese: Creamy mac 'n' cheese loaded with succulent mackerel chunks."

    //Create Desserts container and menu items
    const desserts = createElementInDOM('div', container, 'info-box', 'desserts');
    
    const dessertsTitle = createElementInDOM('h3', desserts, 'sub-title', 'desserts-title');
    dessertsTitle.textContent = 'Desserts:';
    
    const mascarponeMermaidTiramisu = createElementInDOM('div', desserts, 'menu-item');
    mascarponeMermaidTiramisu.textContent = "Mascarpone Mermaid Tiramisu: A twist on the classic tiramisu featuring mascarpone cheese and a hint of sea salt caramel.";

    
    const whiteChocolateWhaleTailMousse = createElementInDOM('div', desserts, 'menu-item');
    whiteChocolateWhaleTailMousse.textContent = "White Chocolate Whale Tail Mousse: Creamy white chocolate mousse shaped like a whale's tail, served with a drizzle of raspberry coulis.";
  

    //Create Drinks container and menu items
    const drinks = createElementInDOM('div', container, 'info-box', 'drinks');

    const drinksTitle = createElementInDOM('h3', drinks, 'sub-title', 'drinks-title');
    drinksTitle.textContent = 'Drinks:';

    const saltySeaBreezeSmoothie = createElementInDOM('div', drinks, 'menu-item');
    saltySeaBreezeSmoothie.textContent = "Salty Sea Breeze Smoothie: A tropical smoothie blend of pineapple, coconut milk, and a touch of sea salt, topped with whipped cream and a fish-shaped pineapple slice.";

    const caviarCollins = createElementInDOM('div', drinks, 'menu-item');
    caviarCollins.textContent = "Caviar Collins: A luxurious twist on the classic Tom Collins cocktail, featuring a hint of caviar-infused vodka and a lemon twist.";




}