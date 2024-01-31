//duplicate card
document.querySelector('.duplicate').addEventListener('click', function (event) {
    //No More than 10 cards
    console.log(document.querySelectorAll('.base').length);
    if (document.querySelectorAll('.base').length < 10) {
        const newCard = document.querySelector('#cardlist .base').cloneNode(true);
        document.querySelector('#cardlist').appendChild(newCard);
    }
});

//Change Title
document.querySelector('#changetitle').addEventListener('click', function (e) {
    document.querySelector('.card-title').innerHTML = "Worst Meme";
});

//change image
document.querySelector('#changeimage').addEventListener('click', function (e) {
    document.querySelector('.img').src = "https://github.com/elmsln.png";
});

//change bg color
document.querySelector('#changebg').addEventListener('click', function (e) {
    //change bg of all cards, toggle-able
    var cards = document.getElementsByClassName('base');
    if (cards[0].classList.contains('change-color')) {
        for (var i = 0; i < cards.length; i++) {
            var base = cards[i];
            base.classList.remove('change-color');
        }
    }
    else {
        for (var i = 0; i < cards.length; i++) {
            var base = cards[i];
            base.classList.add('change-color')
        }
    }
});

//delete card
document.querySelector('#delete').addEventListener('click', function (e) {
    console.log(document.querySelectorAll('.base').length);
    if (document.querySelectorAll('.base').length !== 1) {
        document.querySelector('.base').remove();
    }
});