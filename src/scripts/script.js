let popups = $('.popups');
let popupRafaello = $('.popup-rafaello');
let rafaello = $('.rafaello');

rafaello.click(function () {
    popups.css({
        display: 'flex'
    });
    popupRafaello.css({
        display: 'flex'
    });

});

popups.click(function () {
    popups.css({
        display: 'none'
    });
});
