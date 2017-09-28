'use strict';

var userPoints = 0;

console.log('hello yawllll');
alert('Welcome to my guessing game!');

var user = prompt('What is your name?');
alert('Hi ' + user + '! I am so happy you want to play my game!');

var answer = prompt('Is Devin\'s favorite food Chipotle? Type yes or no').toLowerCase();
console.log(answer);

if (answer === 'yes' || answer === 'y'){
  userPoints++;
} else {
  alert('Wrong! Actually, I LOVE mexican food!!');
}

alert('You have ' + userPoints + ' point(s)!');
console.log(userPoints);
