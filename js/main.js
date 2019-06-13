
// notes -
// delete notes
// 1. theme of cards - animal 
// 2. modal start- username and choose theme
// 3. modal end
// 7. e or this?
// 8. replace true/false
// 9. pic near title and cool font 

let cardsOpenCounter = 0;
let firstCard, secondCard;
let ifCardOpen = true;
let wrongGuess = document.getElementById('guess');

wrongGuess.innerHTML = 0;
// consider change to array.push

$('.card').click(function showCard() {
    cardsOpenCounter >= 2 ? false : true;
    $(this).addClass('flip');
    $(this)[0].firstChild.style.visibility = 'visible';
    if (ifCardOpen) {
        firstCard = $(this);
    }
    ifCardOpen = false;
    secondCard = $(this);
    cardsOpenCounter++;

    if (cardsOpenCounter === 2) {
        checkMatch(firstCard, secondCard);
    }
});


function checkMatch(firstCard, secondCard) {
    let first = firstCard[0];
    let second = secondCard[0];
    if (first.firstChild.getAttribute('src') === second.firstChild.getAttribute('src')) {
        cardsMatch(first, second);
    } else {
        cardsDifferent(first, second);
    }
    cardsOpenCounter = 0;
    ifCardOpen = true;
}


function cardsMatch(first, second) {
    first.classList.add('match');
    second.classList.add('match');
}

function cardsDifferent(first, second) {
    first.classList.add('different');
    second.classList.add('different');
    setTimeout(function () {
        first.firstChild.style.visibility = 'hidden';
        second.firstChild.style.visibility = 'hidden';
        first.classList.add('hide');
        second.classList.add('hide');
        first.classList.remove('flip', 'different');
        second.classList.remove('flip', 'different');
    }, 1000);

    first.classList.remove('hide');
    second.classList.remove('hide');
    wrongGuess.innerHTML++;
}