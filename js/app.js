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
  let ans = prompt("Does Davey play guitar? Yes or No");
  if (ans == "Yes") {
    alert("Most Excellent!");
  } else {
    alert("Bogus!");
  }
}
questionOne()


let q1guess = prompt(`Hey ${userName} do you think I have a partner? yes/no`).toLowerCase();

if (q1guess === 'yes') {
  alert('Negative, Ghost Rider');
  count--;
} else if (q1guess === 'no') {
  alert('Correct I do not');
  count++;
}
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


function showImage() {
  let response = prompt("Guess the number of guitars Davey owns, between 1 and 10");
  response = parseInt(response)
  console.log(response);

  if (response == 7) {

    for (let i = 1; i < 8; i++) {

      let img = document.createElement('img');
      <img.src ="img./CapaldiDrsGuitar.jpg">
      document.body.appendChild(img);
      console.log(response);
    }
  } else {
    showImage();
  }
}

guessANumber();
