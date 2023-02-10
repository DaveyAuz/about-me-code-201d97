'use strict';

// eslint-disable-next-line no-unused-vars
function getName() {
  //    return name
}

let name = ''
function welcome() {
  name = prompt('Please Enter Your Name');
  document.write('Greetings Carbon Based Life-form, ' + name + '!');
}
welcome();
console.log('');


function questionOne() {
  let ans = prompt('Does Davey play guitar? Yes or No');
  if (ans === "Yes") {
    alert('Most Excellent!');
  } else {
    alert('Bogus!');
  }
}
questionOne();


let q1guess = prompt(`Hey ${name} do you think I have a partner? yes/no`).toLowerCase();
let count = 0;
if (q1guess === 'yes') {
  alert('N̶̪̥̄̽e̷̛̼̼͖͌͐ͅg̵̣͕̥͇̮̏̀ä̸͈̇̇t̷̨̰͊̕͝͠i̴̧͔̔͂v̴e̵͆  G̸̓h̴̬̀̾ȯ̵̘̏̇̌s̷͇̦̞̥͂̈́̽̏t̴̎  R̶̨͈̺͑͊́̈́ͅi̶̳̹̅d̸͇̾͆͛̐͑ȩ̴̨̳̗̓̎͛r̶̺͖̱̺̀̂́͋̋');
  count--;
} else if (q1guess === 'no') {
  alert('Correct I do not');

  count++;
}
function timeOfDay() {
  let time = prompt('What time is it? (0-23)'); // 15;
  let message = '';

  if (time <= 11) {
    message = 'Good Morning!';
  } else if (time <= 18) {
    message = 'Good Afternoon!';
  } else if (time < 24) {
    message = 'Good Evening!';
  } else {
    message = 'That time does not exist!';
  }

  return message;
}
timeOfDay();


function showImage() {
  let response = prompt('Guess the number of guitars Davey owns, between 1 and 10');
  response = parseInt(response);
  console.log(response);
  if (response === 7) {

    for (let i = 1; i < 8; i++) {

      let img = document.createElement('img');
      img.src = './img/CapaldiDrsGuitar.jpg';
      document.body.appendChild(img);
      console.log(response);
    }
  } else {
    showImage();
  }


}
// guessANumber();
showImage();
