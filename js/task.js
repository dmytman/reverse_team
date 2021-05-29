// let firstCard;
let firstCard, secondCard;
let lockBoard = false;
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
  if (lockBoard) return;
  if (this === firstCard) return;
  this.classList.add("is-flipped");
  if (!hasFlipped) {
    hasFlipped = true;
    firstCard = this;
    return;
  } else {
    secondCard = this;
    hasFlipped = false;
  }
};



cards.forEach((card) => card.addEventListener("click", flipCard));












// let start_game = document.querySelector('#start_button');
// start_game.addEventListener("click", function() {
//   const audio = document.createElement('audio')
//   audio.setAttribute('src', './sounds/zvuk-bomby.mp3')
//   audio.setAttribute('autoplay', 'autoplay')
// });
// По клику по карточке карточки должны переворачиваться //
// /* <audio src="./sounds/zvuk-bomby.mp3" autoplay="autoplay"></audio> */