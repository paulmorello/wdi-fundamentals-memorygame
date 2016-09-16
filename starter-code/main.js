var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

// if(cardTwo === cardFour) {
// 	window.alert("You found a match.");
// } else {
// 	window.alert("Sorry, try again.");
// }

var gameboard = document.getElementById('gameboard');

var card = document.createElement('div');
card.className = 'card';

var cardText = document.createTextNode("...");

card.appendChild('board');

for (var i = 0; i < gameboard.length; i++) {
gameboard[i].className('board');
}

createBoard = function();

for (var i = 0; i < createBoard.length; i++) {
createBoard[i].insideHTML("...");
}

createBoard.appendChild('board');

var cards = ['queen','queen', 'king', 'king'];

var cardsInPlay = [];

for (var i = 0; i < cards.length; i++) {
	cardElement.setAttribute('data-card', cards[i]);
}

function = isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
	} else {
		cardsInPlay = [];
	}
}

cardElement.addEventListener('click', isTwoCards);
cardElement.innerHTML = '<img src="../images/queen.jpg" alt="queen"/>';

function = isMatch() {
cardElement.innerHTML = "";
}





