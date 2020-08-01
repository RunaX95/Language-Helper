"use strict"

var firstButton = document.getElementsByClassName('card-button')[0];
var firstAnswer = document.getElementsByClassName('card-answer')[0];
firstButton.addEventListener('click', function(event){
    if(firstButton.innerHTML == 'Show'){
        firstAnswer.style.display = 'Block';
        firstButton.innerHTML = 'Hide';
    }else if(firstButton.innerHTML == 'Hide'){
        firstAnswer.style.display = 'None';
        firstButton.innerHTML = 'Show';
    }
    
})