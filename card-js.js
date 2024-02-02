//duplicate card
document.querySelector('.duplicate').addEventListener('click', function (event) {
    //No More than 10 cards
    console.log(document.querySelectorAll('.base').length);
    if (document.querySelectorAll('.base').length < 10) {
        const newCard = document.querySelector('.cardlist .base').cloneNode(true);
        document.querySelector('.cardlist').appendChild(newCard);
    }
});

//Change Title
document.querySelector('#changetitle').addEventListener('click', function (e) {
    //document.querySelector('.card-title').innerHTML = "Worst Meme";
    var cardtitles = document.getElementsByClassName('card-title');
    if (cardtitles[0].innerHTML !== 'THE WORST MEME') {
        for (var i = 0; i < cardtitles.length; i++) {
            cardtitles[i].innerHTML = "THE WORST MEME";
        }
    }
    else {
        for (var i = 0; i < cardtitles.length; i++) {
            cardtitles[i].innerHTML = "THE BEST MEME";
        }
    }
});

//change image
document.querySelector('#changeimage').addEventListener('click', function (e) {
    //document.querySelector('.img').src = "https://github.com/elmsln.png";
    var cardimgs = document.getElementsByClassName('img');
    if (cardimgs[0].src !== "https://github.com/elmsln.png") {
        for (var i = 0; i < cardimgs.length; i++) {
            cardimgs[i].src = "https://github.com/elmsln.png";
        }
    }
    else {
        for (var i = 0; i < cardimgs.length; i++) {
            cardimgs[i].src = "https://i.pinimg.com/originals/fb/30/d0/fb30d0ef2fd6304ebcb837a59afb8817.jpg";
        }
    }
});

//change bg color
document.querySelector('#changebg').addEventListener('click', function (e) {
    //change bg of all cards, toggle-able
    var cards = document.getElementsByClassName('base');
    if (cards[0].classList.contains('change-color')) {
        for (var i = 0; i < cards.length; i++) {
            cards[i].classList.remove('change-color');
        }
    }
    else {
        for (var i = 0; i < cards.length; i++) {
            cards[i].classList.add('change-color')
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