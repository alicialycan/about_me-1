'use strict';

var userPoints = 0;

console.log('Whats up!?');
alert('Welcome to my favorite guessing game! \nAll you have to do is answer Yes or No - It\'s that simple!');

var user = prompt('What is your name?');
alert('Hi ' + user + '! I am so happy you want to play my game!');

//QUESTION 1
var answer = prompt('Soooo ' + user + '... Is Devin\'s favorite food Chipotle? Type yes or no').toLowerCase();
console.log('The user answered: ' + answer);

if (answer === 'yes' || answer === 'y'){
  userPoints++;
  alert('Yep yep yep!\nYou now have ' + userPoints + ' point(s)');
} else {
  alert('Wrong! Actually, I LOVE mexican food!!\nYou now have ' + userPoints + ' point(s)');
}
console.log('After question 1, the user has ' + userPoints + ' point(s)!');

//QUESTION 2
var answer2 = prompt('Is Devin\'s favorite car brand Ford?').toLowerCase();
console.log('The user answered: ' + answer2);

if (answer2 === 'no' || answer2 === 'n'){
  userPoints++;
  alert('You\'re right! He is not a big fan of Ford\'s but he does love Audi!\nYou now have ' + userPoints + ' point(s)');
} else {
  alert('Uh oh... his favorite car brand is actually Audi.\nYou now have ' + userPoints + ' point(s)');
}

console.log('After question 2, the user has ' + userPoints + ' point(s)!');

//QUESTION 3
var answer3 = prompt('Did Devin go to a 4 year college before Code Fellows?').toLowerCase();
console.log('The user answered: ' + answer3);

if (answer3 === 'no' || answer3 === 'n'){
  userPoints++;
  alert('That\'s correct! He attended Seattle Central Community College for an AA in Commercial Photography!\nYou now have ' + userPoints + ' point(s)');
} else {
  alert('Nope! But he did attended Seattle Central Community College for an AA in Commercial Photography!\nYou now have ' + userPoints + ' point(s)');
}

console.log('After question 3, the user has ' + userPoints + ' point(s)!');

//QUESTION 4
var answer4 = prompt('Did Devin grow up in Issaquah Washington?').toLowerCase();
console.log('The user answered: ' + answer4);

if (answer4 === 'yes' || answer4 === 'y'){
  userPoints++;
  alert('DING DING DING, that is right!\nYou now have ' + userPoints + ' point(s)');
} else {
  alert('Aw man, if you would have said yes, you would have gotten it right.\nYou now have ' + userPoints + ' point(s)');
}

console.log('After question 4, the user has ' + userPoints + ' point(s)');

//QUESTION 5
var answer5 = prompt('Does Devin currently work for a Pediatric office?').toLowerCase();
console.log('The user answered: ' + answer5);

if (answer5 === 'yes' || answer5 === 'y'){
  userPoints++;
  alert('That\'s correct! He works at Allegro Pediatrics in Bellevue.\nYour final score is ' + userPoints + '/5 points.');
} else {
  alert('I was really rooting for you on that one :( He does work for a Pediatric office named Allegro Pediatrics. \nYour final score is ' + userPoints + '/5 points.');
}

console.log('After question 5, the user has ' + userPoints + ' point(s)');
