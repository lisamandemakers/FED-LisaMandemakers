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