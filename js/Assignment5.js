
// notes 
// 1. 
// 2. 
// 3.



let numOfCards = 20;

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
        image.src = `./images/pic${orderArray[i]}.svg`;
        image.style.width = "45%"
        card.appendChild(image);
    }
}

let cards = cardsOrder();
start(cards);

//////////////////////////////////////////////////////////

$('.col').click( function showCard() {
    $(this).toggleClass('flip');
});




