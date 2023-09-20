import { createElementInDOM } from "./createElementInDOM.js";

export function loadHomeContent() {
    //Identify the container
    const container = document.getElementById('container')

    //Add restaurant headline
    const headline = createElementInDOM('h1', container, 'headline');
    headline.textContent = "Mike's Mackerel"

    //Add restaurant copy
    const copy = createElementInDOM('div', container, 'copy');
    copy.textContent = "Mike's Mackerel is the best Mackerel in time, try our Mak and cheese, a dish a local reviewer described as 'largely edible'"

    console.log('called home.js')
}