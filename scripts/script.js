document.addEventListener("DOMContentLoaded", () => {
    // Select all <li> elements
    const cards = document.getElementsByTagName('li');

    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        const checkbox = card.getElementsByTagName('input')[0]; // first input inside li
        const duration = parseInt(card.getAttribute('data-duration'), 10); // in ms

        if (!checkbox) continue; // skip if no input found

        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                setTimeout(() => {
                    checkbox.checked = false;
                }, duration);
            }
        });
    }
});



/****************************************/
/* menu openen en sluiten met de button */
/****************************************/

/* JOUW CODE HIER - stap 5 */

// stap 1: zoek de menu-button op en sla die op in een variabele
var deButton = document.querySelector("header button");

// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
deButton.onclick = toggleMenu;

// stap 3: voeg in de functie een claas toe aan de nav
function toggleMenu() {  
  // zoek de nav op
  var deNav = document.querySelector("nav");
  // voeg een class toe aan de nav
  // en verwijder die weer bij nogmaals klikken
  // toggle
  deNav.classList.toggle("toonMenu");
}





const button = document.querySelector('header button');
const lines = button.querySelectorAll('div');
let menuOpen = false;

button.addEventListener('click', () => {
  if (!menuOpen) {
    // Menu open → kruis
    lines[0].style.transform = 'rotate(45deg)';
    lines[1].style.transform = 'rotate(-45deg)';
    
    // gap verdwijnt
    button.style.gap = '0';
    
    menuOpen = true;
  } else {
    // Menu dicht → hamburger
    lines[0].style.transform = 'rotate(0deg)';
    lines[1].style.transform = 'rotate(0deg)';
    
    // gap terug
    button.style.gap = '0.6em';
    
    menuOpen = false;
  }
});
