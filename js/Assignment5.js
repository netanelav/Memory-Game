
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

function startGame(orderArray) {
    for (let i = 0; i < orderArray.length; i++) {
        let card = document.getElementsByClassName("card")[i];
        let image = document.createElement("img");
        image.src = `./images/${theme}/pic${orderArray[i]}.svg`;
        image.style.width = "35%"
        image.style.zIndex = "-1";
        card.appendChild(image);
    }
}

let cards = cardsOrder();
startGame(cards);

//////////////////////////////////////////////////////////

let cardsOpen = 0;
let firstClick = false;
let firstCard = '';
let secondCard = '';

$('.card').click(function showCard() {
    if (cardsOpen === 0) {
        $(this).addClass('flip');
        firstCard = $(this).html();
        console.log(firstCard);
        cardsOpen++;
        console.log(cardsOpen);
    }
    if (cardsOpen === 1) {
        $(this).addClass('flip');
        firstCard = $(this).html();
        console.log(firstCard);
        cardsOpen++;
    }
});


function checkMatch(firstCard, secondCard) {
    if (firstCard === secondCard) {
        firstCard.addClass('cards-match');
        secondCard.addClass('cards-match');
    } else {
        firstCard.addClass('cards-different');
        secondCard.addClass('cards-different');

        // setTimeout(function () {
        //     firstCard.removeClass('flip');
        //     firstCard.removeClass('cards-different');
        //     secondCard.removeClass('flip');
        //     secondCard.removeClass('cards-different');
        // }, 1000);

        setTimeout(removeClass(firstCard), 1000);
        setTimeout(removeClass(firstCard), 1000);
    }
}


function removeClass(eventObj) {
    eventObj.removeClass('flip');
    eventObj.removeClass('cards-different');
}

// function matching(e) {
//     if (firstClick) {
//         // firstClickedTile = e.target.parentNode;
//         let firstImg = e.firstChild;
//         console.log(firstImg);
//         numOfClicks++;
//     } if (numOfClicks === 1) {
//         let secondImg = e.firstChild;
//         console.log(secondImg);
//     }
// }





// function cardOpen() {
//     openedCards.push(this);
//     var len = openedCards.length;
//     if (len === 2) {
//         moveCounter();
//         if (openedCards[0].type === openedCards[1].type) {
//             matched();
//         } else {
//             unmatched();
//         }
//     }
// };

// //for when cards match
// function matched() {
//     openedCards[0].classList.add("match");
//     openedCards[1].classList.add("match");
//     openedCards[0].classList.remove("show", "open");
//     openedCards[1].classList.remove("show", "open");
//     openedCards = [];
// }

// //for when cards don't match
// function unmatched() {
//     openedCards[0].classList.add("unmatched");
//     openedCards[1].classList.add("unmatched");
//     disable();
//     setTimeout(function () {
//         openedCards[0].classList.remove("show", "open", "unmatched");
//         openedCards[1].classList.remove("show", "open", "unmatched");
//         enable();
//         openedCards = [];
//     }, 1100);
// }
