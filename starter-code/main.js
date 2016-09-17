var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var board = document.getElementById('gameboard');
function createBoard() {
for (i = 0; i < cards.length; i++) {
	var cardElement = document.createElement('div');
	cardElement.className = 'card';
	cardElement.setAttribute('data-card', cards[i]);
	cardElement.addEventListener('click', isTwoCards);
	board.appendChild(cardElement);
}
}

function isMatch(cards) {
if(cards[0] === cards[1]) {
	window.alert("You found a match.");
} else {
	window.alert("Sorry, try again.");
}
}

function isTwoCards () {
cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
	this.innerHTML = '<img src="../images/knight.png"/>';
}	else {
	this.innerHTML = '<img src="../images/queen.jpg"/>';
}
if (cardsInPlay.length === 2) {
	isMatch(cardsInPlay);
}	else {
	cardsInPlay = [];
}
}

createBoard();


