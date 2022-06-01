'use strict';

//****************************************
//          GLOBAL VARIABLES
// ****************************************

//Hard coded reserve of STRETCH exercises:
let stretchBankArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

//Hard coded reserve of STRETCH PHOTOS:
let stretchPhotos = [];

//Hard coded reserve of STRENGTH exercises:
let strengthBankArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

//Hard coded reserve of STRENGTH PHOTOS:
let strengthPhotos = [];

//Hard coded reserve of ABS exercises:
let absBankArr = [];

//Hard coded reserve of ABS PHOTOS:
let absPhotos = [];

//Hard coded reserve of ENDURANCE exercises:
let enduranceBankArr = [];

//Hard coded reserve of ENDURANCE PHOTOS:
let endurancePhotos = [];

// let typeForm = document.getElementById('typeForm');

// CHOSEN TYPE 
let chosenType = '';

// CHOSEN TIME 
let chosenTime = '';

// DOM tag for Type-of-workout selection
let nextBtn = document.getElementById('next-btn');

// DOM tag for Time-of-workout selection
let genBtn = document.getElementById('gen-btn');

// ***********CLICK MANAGEMENT****************


// *******************************************
//             CONSTRUCTOR
//********************************************

// ARRAY THAT WILL STORE ALL PAST WORKOUTS
let workoutHistory = [];

// WORKOUT GENERATOR CONSTRUCTOR

function Workout(woType, woTime) {

  // INPUT: WORKOUT TYPE
  this.type = woType;

  // 
  this.bank = [];

  // INPUT: WORKOUT TIME
  this.numOfMovements = Math.floor(parseInt(woTime)/2);

  // PHOTOS FROM RELEVANT PHOTO ARRAY
  this.photoArr = [];

  // EXERCISES FROM RELEVANT MOVEMENT ARRAY
  this.movementArr = [];

  // CHOOSE MOVEMENT BANK ARRAY
  this.bankChooser();

  // POPULATE THIS.MOVEMENTARR[]
  this.generateWorkoutMovements();

  // OUTPUT: INVOKE WORKOUT RENDER FUNCTION 
  // this.renderWorkout();

  // ADD NEW WORKOUT TO WORKOUT HISTORY
  workoutHistory.push(this);

  // PROOF OF COMPLETION
  console.log('constructor complete');
}

// METHODS TO PROTOTYPES
// for (let i = 0; i < this.numOfMovements; i++) {
//   let randoMovement = randNum(stretchBankArr.length);
//   this.movementArr.push(stretchBankArr[randoMovement]);
// }

Workout.prototype.bankChooser = function() {
  if (this.type === 'stretch') {
    this.bank = stretchBankArr;
  } else if (this.type === 'strength') {
    this.bank = strengthBankArr;
  } else if (this.type === 'abs') {
    this.bank = absBankArr;
  } else {
    this.bank = enduranceBankArr;
  }
};

Workout.prototype.generateWorkoutMovements = function () {
  while (this.movementArr.length < this.numOfMovements) {
    let randoNum = randNum(this.bank.length);

    if (!this.movementArr.includes(randoNum)) {
      this.movementArr.push(randoNum);
    }
  }

};

// *********************************************
  //     INSTANTIATION & LOCAL STORAGE PT 2
  // *********************************************
  // console.log(new Workout('stretch', '10'));
  // console.log(new Workout('strength', '10')); 

  //****************************************
  //            HELPER FUNCTIONS
  //****************************************
  
  // RANDOM # GENERATOR
  function randNum(max) {
    return Math.floor(Math.random() * max);
  }
  
  
  // *********************************************
  //              CHART RENDERING
  // *********************************************


  //********************************************
  //            EVENT HANDLERS
  //*******************************************
  // CLICK HANDLER FOR --TYPE-- SELECTION
  function handleType(event) {
    event.preventDefault();
    
    let woType = document.getElementsByName('radio');
    for (let i = 0; i < woType.length; i++) {
      if (woType[i].checked) {
        console.log(woType[i].value);
        chosenType = woType[i].value;
        // STORE TYPE LOCALLY
        
        // STEP 1: STRINGIFY DATA
        let stringifiedType = JSON.stringify(woType[i].value);
        
        // STEP 2: ADD TO LOCAL STORAGE
        workoutObject = {
          type : "chosenType"
        };

        let workoutObjectJSON = JSON.stringify(workoutObject);

        localStorage.setItem('CurrentWO', workoutObjectJSON);
        
        // PROOF OF LIFE (STORED DATA)
        let chosenType = localStorage.getItem('CurrentWO');
        let chosenType2 = JSON.parse(text);

        console.log(chosenType2);
      }
    }
      
  }
  
  // CLICK HANDLER FOR --TIME-- SELECTION
  function handleTime(event) {
    event.preventDefault();
    
    let woTime = document.getElementsByName('radio');
    for (let i = 0; i < woTime.length; i++) {
      if (woTime[i].checked) {
        console.log(woTime[i].value);

        chosenType = localStorage.getItem('CurrentWO');

        chosenTime = woTime[i].value;
        console.log(chosenTime);
        console.log(chosenType);

        let currentWorkout = new Workout(localStorage.getItem('CurrentWO'), chosenTime);
    
        console.log('this is our current workout', currentWorkout);
        
        // STORE TIME LOCALLY
    
        // STEP 1: STRINGIFY TIME
        let stringifiedTime = JSON.stringify(woTime[i].value);
        
        // STEP 2: ADD TO LOCAL STORAGE
        localStorage.setItem('CurrentWOTIME', stringifiedTime);
    
        // PROOF OF LIFE (STORED DATA)
        let storedWOTIME = localStorage.getItem('CurrentWOTIME');
        console.log(storedWOTIME);
        console.log(storedWO);
      }
    }
    
  }
  
  //****************************************
  //            EVENT LISTENERS
  //**************************************** 
  
  // typeForm.addEventListener('submit', handleSubmit);
  
  window.onload = (event) => {
    if (document.getElementById('type-page')) {
      nextBtn.addEventListener('click', handleType);

    } else if (document.getElementById('time-page')) {

      genBtn.addEventListener('click', handleTime);
    }
  };
  

  
  // nextBtn.removeEventListener('click', handleType);
  
  /* **********************************************
  LOCAL STORAGE
  ********************************************** */
 
 // STEP 1: STRINGIFY DATA
 // let stringifiedProducts = JSON.stringify(allProductsArr);
 
 // STEP 2: ADD TO LOCAL STORAGE
 // localStorage.setItem('products', stringifiedProducts);

