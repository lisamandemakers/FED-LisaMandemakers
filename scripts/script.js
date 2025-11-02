/***********************************/
/* ----- INFO CARDS LOOP --------- */
/*********************************/


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



/***********************************/
/* ----- OPEN NAV MENU --------- */
/*********************************/


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


/***********************************/
/* ----- LOOPING CAROUSEL ---- */
/*********************************/

/* pak de ul in de 6e section */
const ul = document.querySelector('main > section:nth-of-type(6) ul');

/* autoscrollen */
setInterval(() => {
  const distance = ul.clientWidth;          // breedte 1 card
  const max = ul.scrollWidth - ul.clientWidth;

  if (ul.scrollLeft >= max - 5) {
    // terug naar begin
    ul.scrollTo({ left: 0, behavior: "smooth" });
  } else {
    // 1 card verder
    ul.scrollBy({ left: distance, behavior: "smooth" });
  }

}, 2500); // elke 2.5 sec


// slider: eerste range
const slider = document.querySelector('input[type="range"]');

// pak alle p's
const ps = document.querySelectorAll('p');

// pak alle links
const links = document.querySelectorAll('a');

// pak alle li items
const lis = document.querySelectorAll('li');

// functie om font_size toe te passen
function apply(){
  const size = slider.value + 'px';
  ps.forEach(el => el.style.fontSize = size);
  links.forEach(el => el.style.fontSize = size);
  lis.forEach(el => el.style.fontSize = size);
}

// startwaarde
apply();

// live
slider.addEventListener('input', apply);
