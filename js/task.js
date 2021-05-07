let card = document.querySelector('.card');

card.addEventListener('click', function () {
    card.classList.toggle('is-flipped');
});

// for (var i = 0; i < card.length; i++) {
//     card[i].addEventListener('click', function () {
//         card.classList.toggle('is-flipped');
//     });
//     }
