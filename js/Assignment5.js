
// notes -
// 1. theme of cards - animal 
// 2. modal - username and choose theme

let numOfCards = 20;
let theme = "Food"

function cardsOrder() {
    let array = [];
    let i = 0;
    while (i < numOfCards) {
        let randomNumber = Math.floor(Math.random() * 10) + 1;
        if (countInArray(array, randomNumber) < 2) {
            array.push(randomNumber);
            numOfCards--;
        }
    }
    return array;
}

function countInArray(array, num) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === num) {
            count++;
        }
    }
    return count;
}

function startGame(orderArray) {
    for (let i = 0; i < orderArray.length; i++) {
        let card = document.getElementsByClassName("card")[i];
        let image = document.createElement("img");
        image.src = `./images/${theme}/pic${orderArray[i]}.svg`;
        image.style.width = "40%"
        image.style.zIndex = "-1";
        card.appendChild(image);
    }
}

let cards = cardsOrder();
startGame(cards);

//////////////////////////////////////////////////////////

let cardsOpen = 0;
let firstCard;
let secondCard;
let cardOpen = true;
let wrongGuess = 0;
let totalAttempts = 0;

$('.card').click(function showCard() {
    cardOpen >= 2 ? false : true;
    $(this).addClass('flip');
    if (cardOpen) {
        firstCard = $(this);
    }
    cardOpen = false;
    secondCard = $(this);
    cardsOpen++;

    if (cardsOpen === 2) {
        checkMatch(firstCard, secondCard);
    }
});

function checkMatch(firstCard, secondCard) {
    if (firstCard === secondCard) {
        console.log("match");
        $(firstCard).addClass('match');
        $(secondCard).addClass('match');
        totalAttempts++
    } else {
        console.log("not match");
        $(firstCard).addClass('different');
        $(secondCard).addClass('different');
        wrongGuess++;
        totalAttempts++;
    }
    cardOpen = 0;
    cardOpen = true;
}

