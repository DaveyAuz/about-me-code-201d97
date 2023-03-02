'use strict';
let count = 0;
let name = '';
// eslint-disable-next-line no-unused-vars
function getName() {
  //    return name
}

function welcome() {
  //let name = '';
  name = prompt('What is Your Name?');
  console.log(name);
  document.getElementById('greetings').textContent = ('Greetings Carbon Based Life-form, ' + name + '!');
  //document.getElementById('greetings').innerHTML= 'Greetings Carbon Based Life-form, ' + name + '!' ;
}
welcome();
console.log('');


function questionOne() {
  count++;
  console.log('inside question one');
  let ans = prompt('Does Davey play guitar? Yes or No');
  if (ans === 'Yes') {
    alert('Most Excellent!');
    count++;
  } else {
    alert('(つ◉益◉)つ乃ㄖᎶㄩ丂!!!!!');
  }
}
questionOne();

function questionTwo() {
  let q1guess = prompt(`Hey ${name} do you think I have a partner? yes/no`)//.toLowerCase();
  //let count = 0;
  if (q1guess === 'yes') {
    alert('👻👻👻×º°”˜`”°º× 几ヨ呂丹卞工レヨ    呂廾回己卞   尺工句ヨ尺!!!!!×º°”˜`”°º×👻👻👻');
  } else if (q1guess === 'no') {
    alert('Correct I do not');
    // eslint-disable-next-line no-unused-vars
    count++;
  }
}
questionTwo();

function questionThree() {
  let q3Guess = prompt('Do I Have a Doggo?').toLowerCase();

  if (q3Guess === 'yes' || q3Guess === 'y') {
    count++;
    alert('You are correct! I have A PTSD Service Dog, 丂卄丨Ҝ卂尺丨.');
  } else if (q3Guess === 'no' || q3Guess === 'n') {
    alert('WRONG ANSWER DUDER!!!!');
  } else {
    alert('That was not a yes or no response! However, I do own a dog!');
  }
}
questionThree();

//question Four
function checkTime() {
  let time = prompt('What time is it? (0001-2359)'); // 15;
  console.log(time);
  let message = '';

  if (time <= 1100) {
    message = 'Good Morning!';
    alert(message);
  } else if (time <= 1800) {
    message = 'Good Afternoon!';
    alert(message);
  } else if (time < 2400) {
    message = 'Good Evening!';
    alert(message);
  } else {
    message = 'That time does not exist!';
    alert(message);

  }
}
checkTime();



function showImage() {
  let response = prompt('Guess the number of guitars Davey owns, between 1 and 10');
  response = parseInt(response);
  console.log(response);
  let attempts = 0;
  while (attempts < 4) {
    attempts++;
    if (response === 7) {
      count++;
      for (let i = 1; i < 8; i++) {
        let img = document.createElement('img');
        img.src = 'img/CapaldiDrsGuitar.jpg';
        document.getElementById('images').appendChild(img);
        console.log(response);
      }
      break;
    } else if (response < 7) {
      alert('Too Low, Dude!');
      response = prompt('Guess the number of guitars Davey owns, between 1 and 10');
      response = parseInt(response);
    }
    else if (response > 7) {
      alert('Too High, Dude! Now ya have to buy me one!! :P');
      response = prompt('Guess the number of guitars Davey owns, between 1 and 10');
      response = parseInt(response);
    }
  }
  alert('Davey Has Seven Guitars!!!!');
}
showImage();

function questionSeven() {
  let favFoods = ['pizza', 'tacos', 'spotted dick', 'brisket', 'sushi', 'shawarma', 'fried chicken'];
  let numOfGuesses = 0;
  let corrAns = false;
  while (numOfGuesses < 6 && corrAns === false) {
    let qSevenGuess = prompt('What is my favorite type of food? Hint:" Sushi, Shawarma, Pizza, Fried Chicken, Spotted Dick, Tacos or Pig Intestines ').toLowerCase();
    //for (let i = 0; i < favFoods.length; i++) {
    if (favFoods.includes(qSevenGuess)) {
      alert(`Congrats ${name} you got one of them right! All of my favorites are ` + favFoods);
      count++;
      corrAns = true;
      // break;
    }
    else {
      numOfGuesses++;
      alert('Incorrect, try again!');
    }
    //   }
  }
  if (numOfGuesses === 6) {
    alert(`Sorry ${name} you didn't guess any of my favorites! My favorites are ` + favFoods);
  }
}
questionSeven();


