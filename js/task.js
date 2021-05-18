let cards = [...document.querySelectorAll('.inner')];
console.log(cards);

let card = document.querySelector('.inner');
    card.addEventListener('click', function () {
        card.classList.toggle('is-flipped');
    });

const randomCsa = () => {
    cards.map(card => card.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`);

    cards.map(card => card.style.order = Math.floor(Math.random() * cards.length));
    
};

randomCsa();

const random = function('click')