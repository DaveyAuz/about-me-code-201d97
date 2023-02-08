'use strict';

function getName() {
  //    return name
}


function welcome() {
  let name = prompt("Please Enter Your Name");
  document.write("Greetings Carbon Based Life-form, " + name + "!");
}
welcome()
console.log('')


function questionOne() {
  let ans = prompt("Does Davey play guitar?");
  if (ans == "yes") {
    alert("Most Excellent!");
  } else {
    alert("Bogus!");
  }
}
questionOne()

function timeOfDay() {
  let time = prompt('What hour is it? (0-23)'); // 15;
  let message = '';

  if (time <= 11) {
    message = 'Good Morning!';
  } else if (time <= 18) {
    message = 'Good Afternoon!';
  } else if (time < 24) {
    message = "Good Evening!";
  } else {
    message = "That hour does not exist!";
  }

  return message;
}
timeOfDay()

function displayRating() {

  let output = '7';
  let rating = prompt('scale of 1-10, how many Guitars does Davey Own?');
  for (let i = 1; i < rating; i++) {
    output += "<img class='star' src='images/star.png'/>";
  }

  return document.write(output);
}

guessANumber();
