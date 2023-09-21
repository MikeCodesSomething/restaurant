import { createElementInDOM } from "./createElementInDOM.js";
//Used to load contact-tab content into a container


export function loadContactContent() {
    
    //Identify the container
    const container = document.getElementById('container')

    //Create heading
    const headline = createElementInDOM('h1',container,'headline');
    headline.textContent= 'Contact';

    //Create bookings container and items:
    const bookings = createElementInDOM('div', container, 'info-box', 'bookings');
    
    const bookingsTitle = createElementInDOM('h3', bookings, 'sub-title', 'bookings-title');
    bookingsTitle.textContent = 'Bookings:';
    
    const bookingsPhoneNumber = createElementInDOM('div', bookings, 'contact-detail');
    bookingsPhoneNumber.textContent = "Tel: 07777777777"
    
    const bookingsEmailAddress = createElementInDOM('div', bookings, 'contact-detail');
    bookingsEmailAddress.textContent = "Email: extremelylegitemail@realemaildomain.com"

    //Create supplier contact container and items:
    const supplierContact = createElementInDOM('div', container, 'info-box', 'supplierContact');
    
    const supplierContactTitle = createElementInDOM('h3', supplierContact, 'sub-title', 'bookings-title');
    supplierContactTitle.textContent = 'Suppliers:';
    
    const supplierPhoneNumber = createElementInDOM('div', supplierContact, 'contact-detail');
    supplierPhoneNumber.textContent = "Tel: 07778888878"
    
    const supplierEmailAddress = createElementInDOM('div', supplierContact, 'contact-detail');
    supplierEmailAddress.textContent = "Email: evenmorelegitemail@realemaildomain.com"


}