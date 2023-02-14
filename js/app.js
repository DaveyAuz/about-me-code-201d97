'use strict';

// eslint-disable-next-line no-unused-vars
function getName() {
  //    return name
}

let name = '';
function welcome() {
  name = prompt('Please Enter Your Name');
  document.getElementById('greetings').textContent= ('Greetings Carbon Based Life-form, ' + name + '!');
  //document.getElementById('greetings').innerHTML= 'Greetings Carbon Based Life-form, ' + name + '!' ;
}
welcome();
console.log('');


function questionOne() {
  let ans = prompt('Does Davey play guitar? Yes or No');
  if (ans === 'Yes') {
    alert('Most Excellent!');
  } else {
    alert('(つ◉益◉)つ乃ㄖᎶㄩ丂!!!!!');
  }
}
questionOne();


let q1guess = prompt(`Hey ${name} do you think I have a partner? yes/no`).toLowerCase();
let count = 0;
if (q1guess === 'yes') {
  alert('👻👻👻×º°”˜`”°º× 几ヨ呂丹卞工レヨ    呂廾回己卞   尺工句ヨ尺!!!!!×º°”˜`”°º×👻👻👻');
  count--;
} else if (q1guess === 'no') {
  alert('Correct I do not');

  count++;
}
function timeOfDay() {
  let time = prompt('What time is it? (0001-2359)'); // 15;
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
      img.src = 'img/CapaldiDrsGuitar.jpg';
      document.getElementById('images').appendChild(img);
      console.log(response);
    }
  } else {
    showImage();
  }


}
// guessANumber();
showImage();
