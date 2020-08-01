"use strict"

var cards = document.getElementsByClassName('card');
for(var cardIndex in cards) {
    var button = cards[cardIndex].querySelector('.card-button');
    button.addEventListener('click', function(event){
        var currentButton = event.target;
        var currentCard = currentButton.parentNode;
        var currentAnswer = currentCard.querySelector('.card-answer');
        if (currentButton.innerHTML == 'Show') {
            currentAnswer.style.display = 'Block';
            currentButton.innerHTML = 'Hide';
        } else if (currentButton.innerHTML == 'Hide') {
            currentAnswer.style.display = 'None';
            currentButton.innerHTML = 'Show';
        }
    })
}