// let firstCard;
let firstCard, secondCard;
let lockBoard = false;
let hasFlipped = false;
let cards = [...document.querySelectorAll(".inner")];
console.log(cards);

const randomCsa = () => {
  cards.map(
    (card) =>
      (card.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
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
    checkMatch()
  }
};

function checkMatch() {
  if(firstCard.dataset.work === secondCard.dataset.work) {
    return disableCards()
  } else{
    unflipCards()
  }
}


function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  resetBoard()
}

function unflipCards() {
  setTimeout(() => {
    firstCard.classList.remove('is-flipped');
    secondCard.classList.remove('is-flipped');
    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlipped, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

cards.forEach((card) => card.addEventListener("click", flipCard));

let audioGame = document.querySelector(".audio_game");
let audioFlip = document.querySelector(".sound_flip");
let start_game = document.querySelector('.start_button');

// start_game.addEventListener("click", function() {
//   audioGame.play()
// });
// По клику по карточке карточки должны переворачиваться //

const flipSound = function() {
  audioFlip.play()
}
cards.forEach(card => card.addEventListener('click', flipSound))
// sound_flip