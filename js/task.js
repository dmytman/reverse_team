let firstCard;
let secondCard;
let lockboard = false;
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

const flipCard = function () {
  if (lockboard) return;
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

function unflipCards() {
  if()
  cards.forEach((card) => card.addEventListener("click"));
}
cards.forEach((card) => card.addEventListener("click", flipCard));

// По клику по карточке карточки должны переворачиваться //