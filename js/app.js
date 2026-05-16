'use strict';

//****************************************
//          GLOBAL VARIABLES
// ****************************************

let nextBtn = document.getElementById('next-btn');
let genBtn = document.getElementById('gen-btn');
let refreshBtn=document.getElementById('refresh');
let quoteSect = document.getElementById('dq-section');
let quoteImagePathArr = ['img/dmitriy-frantsev-unsplash.jpg',
  'img/emptyfield.jpg',
  'img/kalen-emsley-unsplash.jpg',
  'img/kelli-dougal-unsplash.jpg',
  'img/kenrick-mills-unsplash.jpg',
  'img/remi-thorel-unsplash.jpg'];
let quoteTextArray = ['"Be excellent to each other. And... PARTY ON, DUDES!" - Abe Lincoln (Bill & Ted\'s Excellent Adventure)',
  '"I usually take a two-hour nap from one to four” - Yogi Berra',
  '"Hi baby abs!! I see you!!! I hope to meet your other ab friends soon. (Yes, I\'m talking to my muscles. I\'ve never met most of them before.)” - Khloe Kardashian',
  '"I already know what giving up feels like. I want to see what happens if I don\'t." - Neila Ray',
  '"Progress not perfection." - Kimberly Snyder',
  '“Life isn\'t about waiting for the storm to pass, its about dancing in the rain.” - Greg Plitt'
];
// *******************************************
//             CLASS
//********************************************

let workoutHistory = [];
class Workout {
  constructor(woType, woTime) {
    this.type = woType;
    this.bank = [];
    this.selectedTime = woTime;
    this.numOfMovements = 0;
    this.getNumOfMoves();
    this.movementArr = [];
    this.bankChooser();
    this.generateWorkoutMovements();
    workoutHistory.push(this);
  }

  getNumOfMoves() {
    if (this.selectedTime === '10') {
      this.numOfMovements = 3;
    } else if (this.selectedTime === '30') {
      this.numOfMovements = 5;
    } else if (this.selectedTime === '45') {
      this.numOfMovements = 7;
    } else {
      this.numOfMovements = 10;
    }
  }

  bankChooser() {
    if (this.type === 'stretch') {
      this.bank = stretchBankArr;
    } else if (this.type === 'strength') {
      this.bank = strengthBankArr;
    } else if (this.type === 'abs') {
      this.bank = absBankArr;
    } else {
      this.bank = enduranceBankArr;
    }
  }

  generateWorkoutMovements() {
    while (this.movementArr.length < this.numOfMovements) {
      let randoNum = randNum(this.bank.length);
      if (!this.movementArr.includes(randoNum)) {
        this.movementArr.push(randoNum);
      }
    }
  }
}
//****************************************
//            HELPER FUNCTIONS
//****************************************
function randNum(max) {
  return Math.floor(Math.random() * max);
}

function generateRandomQuote() {
  let rndImage = quoteImagePathArr[randNum(quoteImagePathArr.length)];
  quoteSect.style.backgroundImage = 'url(' + rndImage + ')';
  let rndQuote = quoteTextArray[randNum(quoteTextArray.length)];
  let dailyQuote = document.createElement('p');
  dailyQuote.textContent = rndQuote;
  dailyQuote.setAttribute('id', 'daily-quote');
  quoteSect.appendChild(dailyQuote);
}
//********************************************
//            EVENT HANDLERS
//*******************************************
function handleType(event) {
  event.preventDefault();
  let woType = document.getElementsByName('radio');
  for (let i = 0; i < woType.length; i++) {
    if (woType[i].checked) {
      let workoutType = woType[i].value;
      let workoutObject = {
        type: workoutType
      };
      let workoutObjectJSON = JSON.stringify(workoutObject);
      localStorage.setItem('CurrentWO', workoutObjectJSON);
    }
  }
  window.location.href = 'time-page.html';
}

function handleTime(event) {
  event.preventDefault();
  let woTime = document.getElementsByName('radio');
  for (let i = 0; i < woTime.length; i++) {
    if (woTime[i].checked) {
      let workoutTime = woTime[i].value;
      let retrievedObject = localStorage.getItem('CurrentWO');
      let parsedRetrievedObject = JSON.parse(retrievedObject);
      parsedRetrievedObject.time = workoutTime;
      let stringifiedObjectWithTime = JSON.stringify(parsedRetrievedObject);
      localStorage.setItem('CurrentWO', stringifiedObjectWithTime);
      let currentWorkout = new Workout(parsedRetrievedObject.type, parsedRetrievedObject.time);
      let stringifiedNewWorkout = JSON.stringify(currentWorkout);
      localStorage.setItem('ChosenWorkout', stringifiedNewWorkout);
      window.location.href = 'workout-page.html';
    }
  }
}

function renderCurrWorkout() {
  let workoutCard = document.getElementById('workout-card');
  let chosenArr = [];
  if (localStorage.getItem('Stored-Workouts')) {
    let storedHistory = localStorage.getItem('Stored-Workouts');
    let parsedStoredHistory = JSON.parse(storedHistory);
    workoutHistory = parsedStoredHistory;
  }
  let retrievedWorkCard = localStorage.getItem('ChosenWorkout');
  let parsedWorkCard = JSON.parse(retrievedWorkCard);
  while (workoutCard.lastChild) {
    workoutCard.removeChild(workoutCard.lastChild);
  }
  for (let i = 0; i < parsedWorkCard.numOfMovements; i++) {
    let newLi = document.createElement('li');
    workoutCard.appendChild(newLi);
    let newMovement = document.createElement('h3');
    newLi.appendChild(newMovement);
    newMovement.textContent = parsedWorkCard.bank[parsedWorkCard.movementArr[i]][0];
    let newSteps = document.createElement('p');
    newLi.appendChild(newSteps);
    newSteps.textContent = parsedWorkCard.bank[parsedWorkCard.movementArr[i]][1];
    chosenArr.push([parsedWorkCard.bank[parsedWorkCard.movementArr[i]][0], parsedWorkCard.bank[parsedWorkCard.movementArr[i]][1]]);
  }
  workoutHistory.push(chosenArr);
  let stringifiedStoredWorkouts = JSON.stringify(workoutHistory);
  localStorage.setItem('Stored-Workouts', stringifiedStoredWorkouts);
}

function renderWorkoutHistory() {
  let maxHistoryShown = 8;
  let divWrapper = document.getElementById('wrapper');
  if (localStorage.getItem('Stored-Workouts')) {
    let storedHistory = localStorage.getItem('Stored-Workouts');
    let parsedStoredHistory = JSON.parse(storedHistory);
    workoutHistory = parsedStoredHistory;
    for (let i = workoutHistory.length-1; i > workoutHistory.length-1-maxHistoryShown; i--) {
      let newArticle = document.createElement('article');
      divWrapper.appendChild(newArticle);
      for (let j = 0; j < workoutHistory[i].length; j++) {
        let newUl = document.createElement('ul');
        newArticle.appendChild(newUl);
        let newLi = document.createElement('li');
        newUl.appendChild(newLi);
        let newH3 = document.createElement('h3');
        newLi.appendChild(newH3);
        newH3.textContent = workoutHistory[i][j][0];
        let newP = document.createElement('p');
        newLi.appendChild(newP);
        newP.textContent = workoutHistory[i][j][1];
      }
    }
  }
  else {
    let newArticle = document.createElement('article');
    divWrapper.appendChild(newArticle);
    let newUl = document.createElement('ul');
    newArticle.appendChild(newUl);
    let newLi = document.createElement('li');
    newUl.appendChild(newLi);
    let newH3 = document.createElement('h3');
    newLi.appendChild(newH3);
    newH3.textContent = 'You have no workout history to display';
  }
}

function generateNewWorkout(){
  let sameTypeAndTime;
  sameTypeAndTime=JSON.parse(localStorage.getItem('CurrentWO'));
  let genNewWorkout=new Workout(sameTypeAndTime.type,sameTypeAndTime.time);
  let stringifiedGenNewWorkout = JSON.stringify(genNewWorkout);
  localStorage.setItem('ChosenWorkout', stringifiedGenNewWorkout);
  renderCurrWorkout();
}

//****************************************
//            EVENT LISTENERS
//****************************************

window.onload = () => {
  if (document.getElementById('type-page')) {
    nextBtn.addEventListener('click', handleType);
    generateRandomQuote();
  } else if (document.getElementById('time-page')) {
    genBtn.addEventListener('click', handleTime);
  } else if (document.getElementById('workout-card')) {
    refreshBtn.addEventListener('click',generateNewWorkout);
    renderCurrWorkout();
  } else if (document.getElementById('past-workout')) {
    renderWorkoutHistory();
  }
};
