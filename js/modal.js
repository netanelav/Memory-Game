$(window).on('load', () => {
    $('#start-modal').modal('show');
});

$('#start').click( () => {
    themeUserChoice();
    $('#start-modal').modal('toggle');
});

function themeUserChoice() {
    let themeSelected = 'Food';
    if ($('#btn1').is(':checked')) {
        themeSelected = 'Animals';
    }
    else if ($('#btn2').is(':checked')) {
        themeSelected = 'Food';
    }
    else if ($('#btn3').is(':checked')) {
        themeSelected = 'Sports';
    }
    return themeSelected;
}

function getUserName() {
    let userName = $('#username').val();
    return userName;
}

function endGame() {
    let userName = getUserName();
    $('#win-modal').modal('show');
    $('#user').text(`Congratulations ${userName} 🎉`);
    $('#modal-theme').text(`You played the ${userChoice} theme`);
    $("#moves").text(`and finished with ${wrongGuess.innerText} wrong guesses`);
}

$('#modal-btn').click(() => {
    location.reload();
});