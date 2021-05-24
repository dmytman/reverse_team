let firstCard;
let secondCard;
let hasFlipped = false;
let cards = [...document.querySelectorAll(".inner")];
console.log(cards);

const randomCsa = () => {
  cards.map(
    (card) =>
      (card.style.backgroundColor = `rgb(${Math.floor(
        Math.random() * 255
      )}, ${Math.floor(Math.random() * 255)}, ${Math.floor(
        Math.random() * 255
      )})`)
  );

  cards.map(
    (card) => (card.style.order = Math.floor(Math.random() * cards.length))
  );
};

randomCsa();

let flipImg = document.querySelector(".inner");
const flipCard = function () {
  if (!hasFlipped) {
    this.classList.add("is-flipped");
    hasFlipped = true;
    firstCard = this;
    return;
  } else {
    secondCard = this;
    hasFlipped = false;
  }
};


cards.forEach((card) => card.addEventListener("click", flipCard));

// По клику по карточке карточки должны переворачиваться //
