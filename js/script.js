$(document).ready(function () {

    /* button "Envoyez moi un mail" */
    $(".mail").mouseover(function () {
        $('.mail').css('background-color','#e8f0e7');
        $('.mail p').css('color', 'rgba(105, 111, 171, 0.838)');
    });

    $(".mail").mouseout(function () {
        $('.mail').css('background-color', 'rgba(105, 111, 171, 0.838)');
        $('.mail p').css('color', 'white');
    });

    /* button "Tel: 0475 84 79 07" */
    $(".tel").mouseover(function () {
        $('.tel').css('background-color', '#e8f0e7');
        $('.tel p').css('color', 'rgba(171, 105, 105, 0.838)');
    });

    $(".tel").mouseout(function () {
        $('.tel').css('background-color', 'rgba(171, 105, 105, 0.838)');
        $('.tel p').css('color', 'white');
    });




});