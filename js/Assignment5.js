
// notes 
// 1. 
// 2. 
// 3. theme of cards - animal 
// 4. modal - username and choose theme


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

function start(orderArray) {
    for (let i = 0; i < orderArray.length; i++) {
        let card = document.getElementsByClassName("card")[i];
        let image = document.createElement("img");
        image.src = `./images/${theme}/pic${orderArray[i]}.svg`;
        image.style.width = "45%"
        card.appendChild(image);
    }
}

let cards = cardsOrder();
start(cards);

//////////////////////////////////////////////////////////

let numOfClicks = 0;
let firstClick = false;
let firstCard = '';
let secondCard = '';

$('.card').click(function showCard() {
    if (numOfClicks === 0) {
        $(this).addClass('flip');
        firstCard = $(this).html();
        console.log(firstCard);
        numOfClicks === 1;
    }
    if (numOfClicks === 1) {
        $(this).addClass('flip');
        firstCard = $(this).html();
        console.log(firstCard);
        numOfClicks++;
    }
});


