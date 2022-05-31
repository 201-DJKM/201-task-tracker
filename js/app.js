'use strict';

//****************************************
//          GLOBAL VARIABLES
// ****************************************

//Hard coded reserve of STRETCH exercises:
let stretchBankArr = [];

//Hard coded reserve of STRETCH PHOTOS:
let stretchPhotos = [];

//Hard coded reserve of STRENGTH exercises:
let strengthBankArr = [];

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


let typeForm = document.getElementById('typeForm');

let nextBtn = document.getElementById('next-btn');

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

  // INPUT: WORKOUT TIME
  this.time = woTime;

  // PHOTOS FROM RELEVANT PHOTO ARRAY
  this.photoArr = [];

  // EXERCISES FROM RELEVANT MOVEMENT ARRAY
  this.movementArr = [];

  // OUTPUT: INVOKE WORKOUT RENDER FUNCTION 
  this.renderWorkout();

  // ADD NEW WORKOUT TO WORKOUT HISTORY
  workoutHistory.push(this);
}

// METHODS TO PROTOTYPES

// ***********5/31 (MARCO)

// function handleSubmit(event) {
  //   event.preventDefault();
  
  //   let woType = event.target.type.value;
  //   let woTime = event.target.time.value;
  
  //   new Workout(woType, woTime);
  
  // }
  
  // *********************************************
  //     INSTANTIATION & LOCAL STORAGE PT 2
  // *********************************************
  
  //****************************************
  //            HELPER FUNCTIONS
  //****************************************
  
  // RANDOM # GENERATOR
  function randNum() {
    return Math.floor(Math.random() * allProductsArr.length);
  }
  
  
  // *********************************************
  //              CHART RENDERING
  // *********************************************


  //********************************************
  //            EVENT HANDLERS
  //*******************************************
  // PROOF OF LIFE -- STARTING WITH STRETCH WORKOUT
  function handleSubmit(event) {
    event.preventDefault();
    
    let woType = document.getElementsByName('radio');
    for (let i = 0; i < woType.length; i++) {
      if (woType[i].checked) {
        console.log(woType[i].value)
        
      }
    }
  
    // new Workout(woType, woTime);
  
  }
  
  //****************************************
  //            EVENT LISTENERS
  //**************************************** 
  
  // typeForm.addEventListener('submit', handleSubmit);

  nextBtn.addEventListener('click', handleSubmit);

/* **********************************************
                  LOCAL STORAGE
********************************************** */

// STEP 1: STRINGIFY DATA
// let stringifiedProducts = JSON.stringify(allProductsArr);

// STEP 2: ADD TO LOCAL STORAGE
// localStorage.setItem('products', stringifiedProducts);

