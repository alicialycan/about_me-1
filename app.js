'use strict';

var userPoints = 0;

console.log('Game On');

var user = prompt('Welcome to my favorite guessing game! What is your name?');

while (!user){
  user = prompt('What is your name? Really, we need your name, or you cant play!');
}

if (user.toLowerCase() != 'devin'){
  alert('Too bad you are not Devin');
}

alert('Hi ' + user + '! I am so glad you want to play my game!');
//
// //QUESTION 1
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
  alert('That\'s correct! He works at Allegro Pediatrics in Bellevue.\nYou now have ' + userPoints + ' point(s');
} else {
  alert('I was really rooting for you on that one :( He does work for a Pediatric office named Allegro Pediatrics.\nYou now have ' + userPoints + ' point(s');
}

console.log('After question 5, the user has ' + userPoints + ' point(s)');

//QUESTION 6
var attempts = 4;
var answer6 = prompt('What year did Devin Graduate?\nYou will have 4 attempts');
while(attempts > 1){
  if (answer6 < 2009){
    attempts--;
    answer6 = prompt('Sorry, that is too low! Guess again.\nWhat year did Devin Graduate?\nYou have ' + attempts + '  attempts left');
    console.log('The user guessed ' + answer6 + ' and has ' + attempts + ' attempts left');
  }else if (answer6 > 2009) {
    attempts--;
    answer6 = prompt('Sorry, that is too high! Guess again.\nWhat year did Devin Graduate?\nYou have ' + attempts + ' attempts left');
    console.log('The user guessed ' + answer6 + ' and has ' + attempts + ' attempts left');
  }else{
    userPoints++;
    alert('Correct! He graduated from Skyline High School in 2009\nYou now have ' + userPoints + ' point(s)');
    break;
  }
}
console.log('After question 6, the user has ' + userPoints + ' point(s)');

//QUESTION 7
var cars = ['bmw' , 'porsche' , 'vw' , 'buggati' , 'lamborghini'];
var myCars = cars.join('\n');
var flag = false;
var attemptsCars = 6;
var answer7 = prompt('Can you guess another car brand that is my favorite besides Audi?').toLowerCase();

while (!flag && attemptsCars > 0) {
  for (var i = 0; i < cars.length; i++) {
    if (answer7 === cars[i]) {
      flag = true;
    }
  }
  if (flag === true) {
    userPoints++;
    alert('Correct! ' + answer7 + ' is on my list of favorite car brands!');
    console.log('The user guessed ' + answer7 + ' and has ');
  } else {
    attemptsCars--;
    answer7 = prompt('Sorry, ' + answer7 + ' is not on my list of favorite car brands!\nYou have ' + attemptsCars + '  attempts left');
    console.log('The user guessed ' + answer7 + ' and has ' + (attemptsCars) + ' attempts left');
  }
}
console.log('After question 7 the user has ' + userPoints + ' point(s)');

alert('Here are my favorite car brands:\n' + myCars + '\n' + user + ', your final score is ' + userPoints + '/7 points');
