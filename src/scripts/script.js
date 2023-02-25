let popups = $('.popups');
let popupRafaello = $('.popup-rafaello');
let popupOrange = $('.popup-orange');
let rafaello = $('.rafaello');
let orange = $('.orange');
let close = $('.close');

rafaello.click(function () {
    popups.css({
        display: 'flex'
    });
    popupRafaello.css({
        display: 'flex'
    });
});

close.click(function () {
    popups.css({
        display: 'none'
    });
    popupRafaello.css({
        display: 'none'
    });
});

orange.click(function () {
    popups.css({
        display: 'flex'
    });
    popupOrange.css({
        display: 'flex'
    });
});

close.click(function () {
    popups.css({
        display: 'none'
    });
    popupOrange.css({
        display: 'none'
    });
});
