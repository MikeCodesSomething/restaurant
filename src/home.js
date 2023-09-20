import { createElementInDOM } from "./createElementInDOM.js";

//Used to load home-tab content into a container

export function loadHomeContent() {
    //Identify the container
    const container = document.getElementById('container')

    //Add restaurant headline
    const headline = createElementInDOM('h1', container, 'headline');
    headline.textContent = "Mike's Mackerel";

    //Add restaurant copy
    const copy = createElementInDOM('p', container, 'copy');
    copy.textContent = "Mike's Mackerel is the best Mackerel in time, try our Mak and cheese, a dish a local reviewer described as 'largely edible'";

    //Add opening hours
    const openingHours = createElementInDOM('div', container, 'info-box', 'opening-hours')
    const openingHoursTitle = createElementInDOM('h3', openingHours, 'sub-title', 'opening-hours-title');
    openingHoursTitle.textContent = 'Opening Hours:';
    const days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    const daysDOM = [];
        days.forEach((day) => daysDOM.push(createElementInDOM('div', openingHours, 'hours', day)));
        daysDOM.forEach((dayDOM) => dayDOM.textContent = `${dayDOM.id}: 12:00 - 23:00`);

    //Add location
    const location = createElementInDOM('div', container, 'info-box', 'location');
    
    const locationTitle = createElementInDOM('h3', location, 'sub-title', 'location-title');
    locationTitle.textContent = 'Location';

    const locationContent = createElementInDOM('div', location, 'content', 'location-content');
    locationContent.textContent = `742 Evergreen Terrace, Springfield`;

}