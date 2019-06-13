$(window).on('load', function () {
    $('#start-modal').modal('show');
});

$('#start').click(function () {
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
