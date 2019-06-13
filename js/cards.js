let numOfCards = 20;
let theme = document.getElementById('theme');
let userChoice;

$('#start').click(() => {
    userChoice = themeUserChoice();
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
            image.style.width = '40%';
            image.style.visibility = 'hidden';
            card.appendChild(image);
        }
    }

    let cards = cardsOrder();
    startGame(cards);
});

