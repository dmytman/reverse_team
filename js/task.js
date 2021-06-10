// let firstCard;
let firstCard, secondCard;
let lockBoard = false;
let hasFlipped = false;
let cards = [...document.querySelectorAll(".inner")];
// console.log(cards);

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
    lockBoard = true;
    checkMatch()
  }
};

function checkMatch() {
  if(firstCard.dataset.work === secondCard.dataset.work) {
    disableCards()
    return;
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
// По клику по карточке карточки должны переворачиваться //

const flipSound = function() {
  audioFlip.play()
}
cards.forEach(card => card.addEventListener('click', flipSound))
// sound_flip

// timer
let time = 90;
const countDownEl = document.getElementById("countdown");

const myInterval = setInterval(updateCountdown, 1000);
function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? "0" + seconds:
  seconds;
  countDownEl.innerHTML = `${minutes}:${seconds}`;
  time--;
  if(time<0) {
    clearInterval(myInterval);
    console.log('time up')
  }
}
let sounds = document.querySelector('.sound_boom');
const soundMedium = document.querySelector('#medium');

soundMedium.addEventListener('click', function(){
  sounds.play()
})