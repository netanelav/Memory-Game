
// notes -
// delete notes
// 1. theme of cards - animal 
// 3. modal end
// clean code
// 7. e or this?
// 9. pic near title and cool font 

let cardsOpenCounter = 0;
let firstCard, secondCard;
let cardIsShown = false;
let cardsMatchCounter = 0;
let wrongGuess = document.getElementById('guess');
wrongGuess.innerHTML = 0;

$('.card').click(function showCard() {
    cardsOpenCounter >= 2 ? true : false;
    $(this).addClass('flip');
    $(this)[0].firstChild.style.visibility = 'visible';
    if (!cardIsShown) {
        firstCard = $(this);
    }
    cardIsShown = true;
    secondCard = $(this);
    cardsOpenCounter++;

    if (cardsOpenCounter === 2) {
        checkIfCardsMatch(firstCard, secondCard);
    }
});

function checkIfCardsMatch(firstCard, secondCard) {
    let first = firstCard[0];
    let second = secondCard[0];
    if (first.firstChild.getAttribute('src') === second.firstChild.getAttribute('src')) {
        cardsMatch(first, second);
    } else {
        cardsDifferent(first, second);
    }
    cardsOpenCounter = 0;
    cardIsShown = false;
}

function cardsMatch(first, second) {
    first.classList.add('match');
    second.classList.add('match');
    cardsMatchCounter++;
    checkIfWon();
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

function checkIfWon() {
    if (cardsMatchCounter === 10) {
        $('#winModal').modal('show');
        $('#modal-theme').text(`You played the ${userChoice} theme`);
        $("#moves").text(`You made ${wrongGuess} mistakes`);
    }
}

$(window).on('load', function () {
    $('#start-modal').modal('show');
});

$('#new-game').click(() => {
    location.reload();
});

