
// notes -
// 1. theme of cards - animal 
// 2. modal - username and choose theme

let numOfCards = 20;
let theme = document.getElementById('theme');
let wrongGuess = document.getElementById('guess');
let userChoice = "Food"

wrongGuess.innerHTML = 0;
theme.innerHTML = (userChoice);

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
        image.src = `./images/${userChoice}/pic${orderArray[i]}.svg`;
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
let ifCardOpen = true;

$('.card').click(function showCard() {
    ifCardOpen >= 2 ? false : true;
    $(this).addClass('flip');
    if (ifCardOpen) {
        firstCard = $(this);
    }
    ifCardOpen = false;
    secondCard = $(this);
    cardsOpen++;

    if (cardsOpen === 2) {
        checkMatch(firstCard, secondCard);
    }
});

function checkMatch(firstCard, secondCard) {
    if (firstCard[0].firstChild.src === secondCard[0].firstChild.src) {
        console.log("match");
        $(firstCard).addClass('match');
        $(secondCard).addClass('match');
        // $(firstCard).removeClass('flip');
        // $(secondCard).removeClass('flip');
    } else {
        console.log("not match");
        $(firstCard).addClass('different');
        $(secondCard).addClass('different');
        wrongGuess.innerHTML++;
    }
    cardsOpen = 0;
    ifCardOpen = true;
}
