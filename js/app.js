'use strict';

//****************************************
//          GLOBAL VARIABLES
// ****************************************

//Hard coded reserve of STRETCH exercises:
let stretchBankArr = [['Hamtrings Stretch', 'Remaining seated, extend one leg outward. Reach toward your toes. Hold for 10 to 30 seconds. Repeat on the other side'], ['Lunge with a Spinal Twist', 'Start in a low lunge position: Keep your left leg straight behind you, right leg bent, and hands on the floor inside your right leg.Raise your right arm toward the ceiling as you twist your upper body and open your chest toward the right side.Hold for 1 minute, and then repeat on the other side.'], ['Dynamic Side Lunges', 'Start in a wide stance with toes angled outward. Send hips back and shift all your weight to the right side, lowering into a side lunge. Allow left toes to come off the floor and point up.Push through right heel and shift your weight to the left, then repeat on the opposite side for 1 rep. Repeat this for 30 seconds of continuous movement'], ['Trunk rotation', 'Keep your feet firmly on the ground, facing forward. Twist your upper body in the direction of the arm thats resting on the back of your chair. Hold pose for 10 to 30 seconds. Repeat on other side.'], ['Seated Spine Twist', 'Cross one leg over the other, then twist your body toward the leg that is on top. You can use the arm of the chair to push yourself into a deeper twist if need be. Hold for 30 seconds, repeat 3 times each side.'], ['Reach for the Sky', 'To stretch your back, interlock both hands above your head, palms facing the ceiling. Sit straight up, then push your palms upward and elongate your spine. You should feel a nice stretch in your back. Make sure to keep your shoulders loose and relaxed. Hold for 10 seconds, repeat 5 times.'], ['Forearm Stretch', 'Seated or standing, stretch the right arm out and turn the hand down so that the fingers point towards the floor. Use the left hand to gently pull the fingers towards you, feeling a stretch in the forearm. Hold for 10 to 30 seconds and repeat on the other hand.'], ['Seated Hip Stretch', 'While seated, cross the right ankle over the left knee and sit up nice and tall. Gently lean forward, keeping the back straight and reaching out with the torso until you feel a stretch in the right glute and hip.'], ['Inner Thigh Stretch', 'While seated, take the legs wide, toes out and lean forward with the elbows on the thighs. Keep the back straight and the abs contracted. Gently press forward while using the elbows to push the thighs out until you feel a stretch in the inner thighs. Hold for 10 to 30 seconds and repeat as many times as you like.'], ['Overhead Triceps Stretch', 'Stand; feet hip-width apart and roll your shoulders behind your back. Raise right arm toward the ceiling, bend it at the elbow, and place right hand against the middle of your back. Lift left hand toward the ceiling and place your fingers on your right elbow, applying some light pressure to deepen the stretch.Hold for about 30 seconds, then repeat on the other side.']];

//Hard coded reserve of STRETCH PHOTOS:
let stretchPhotos = [];

//Hard coded reserve of STRENGTH exercises:
let strengthBankArr = [['Squats', 'Go down very slowly, while going down you have to inhale. Keep your back straight and when youre going down, your knees should not go beyond your toes, or you will injure your knee and back.'], ['Pushups', 'For a simple pushup, lie down with your palms near our chest and lift up your body with pressure on your palms. Hold for a few seconds and repeat.'], ['Single-leg Glute Bridge', 'Lie on your back with one leg raised in the air. Thrust forward and raise your hips off the ground as high as you can. Clench your glutes at the top of the rep to activate more muscle fibres and see greater growth. Slowly lower yourself to the floor.'], ['Spider-Man press-up', 'Start in the top of a press-up position. Bend your arms to lower your chest until its just off the floor and simultaneously bring one knee up to your elbow, then return to the start. Alternate knees. '], ['Wide-grip push-up', 'Perform a standard push-up but with your arms double shoulder-width apart. Lower your chest until its just off the floor, then press back up until your arms are straight.'], ['Reverse Lunges', 'Start standing with your feet about shoulder-width apart. Step backwards with your left foot, landing on the ball of your foot and bending your knees to create two 90-degree angles. Push through your right heel to return to standing. Repeat on the other side.'], ['Squat Jacks', 'Start standing with your feet together, hands at your chest. Jump your feet out and sit back into a small squat. Jump your feet back together to return to standing.'], ['Diamond Push-Ups', 'Start in a high plank. Walk your hands together so that your thumbs and forefingers form a triangle. Bend your elbows to lower your chest and torso toward the floor and then push back up.'], ['Donkey Kicks', 'Start on all fours. Pull your right knee toward your chest, keeping your foot flexed. Then, kick your right leg up behind you and toward the sky, then back down, keeping your knee bent and foot flexed. Repeat on the other side.'], ['Single-Leg Reach and Jumps', 'Stand with feet hip width apart, hands at your sides. Hinge at your hips and bend your knees to extend your left leg behind you (no higher than your hips) as you reach your left arm to ground about a foot ahead of where your left foot was. Drive your left knee up to return to an upright position, and hop on your right foot. Repeat on the other side.']];

//Hard coded reserve of STRENGTH PHOTOS:
let strengthPhotos = [];

//Hard coded reserve of ABS exercises:
let absBankArr = [['Crunch', 'Lie Flat on back with knees bent. Cross arms across chest. Contract abdominal muscles, bring upper body up until only lower back and hips remain on the ground. Lower upper body to starting position for 1 repetition.'], ['Plank', 'Lay facedown on your stomach. Raise yourself up and place your elbows directly below your shoulders with your forearms resting on the ground. Have your legs extended with your weight distributed to the toes. Keep your back in a straight alignment from your head to your feet. Set a time interval for 1 repetition (30 sec-1min)'], ['Mountain Climbers', 'Lay facedown on your stomach. Raise yourself up into a push-up position. Tuck one knee up into your chest and extend the opposite leg with your weight on the balls of your feet. Alternate leg positions for 1 repetition.'], ['Leg Raises', 'Lay flat on your back with your feet extended and toes pointed outward. Place hands under your hips for support. Slightly elevate head off of ground. Lift feet vertically to a 90 deg angle keeping your hips on the ground. Lower legs to starting position without letting them touch the ground for 1 repetition.'], ['Reverse Crunch', 'Lie flat on your back with your knees up and your feet flat on the ground. Place your arms by your sides for support. Elevate your head slightly, then contract your abdominals and raise your knees to just above your head keeping a 90 deg bend with your knees to your feet. Return your legs to their starting position for 1 repetition.'], ['Scissor Kicks', 'Lie flat on your back, legs extended with your head slightly elevated. Lift one leg at a time towards a 90 deg angle with your core while keeping your knees straight. Do not let your legs return to the ground until exercise is complete. Alternate legs for 1 repetition.'], ['Criss Cross ', 'Lie flat on your back with  straight legs. Slightly elevate head and legs. Extend legs away from each other keeping heels 6-8 inches off the ground. When returning to start position (1 repetition ) cross 1 leg over the other. Alternate leg that is above the other each repetition. '], ['Hip Raises', 'Lie flat on your back with your knees bent and your feet flat on the floor. Place your hands at your sides for support. Raise your hips up off the floor until your back is in a straight alignment from your shoulder blades to your hip. Weight should be distributed on your upper should blades and feet. Return to start position for 1 repetition. '], ['Ladder Climb ', 'Start in a standing position. Raise 1 knee upward while at the same time extending the opposite hand like your are stepping and grasping onto a ladder. When your arm is fully extended above your head and your knee is at 90 deg to your hips, return to the standing position for 1 rep. Alternate legs and arms every other repetition.'], ['Bicycle Crunch ', 'Lie flat on your back. Place both hands behind your head. Lift 1 knee towards your chest and lift and rotate 1 elbow until it touches the knee above the chest.  Return to start position for 1 repetition. Alternate knee and elbow every other repetition. ']];

//Hard coded reserve of ABS PHOTOS:
let absPhotos = [];

//Hard coded reserve of ENDURANCE exercises:
let enduranceBankArr = [['Squat Thrust', 'Stand with your feet at least hip-width apart, core engaged. Place both of your hands on the floor, then jump your feet back to come into a high plank position. Your core should be engaged, your hips level, and your wrists should be directly under your shoulders. Hop your feet forward, to come to a low squat position, and immediately stand up, squeezing your glutes at the top. Repeat.'], ['Plank Hip Dip', 'Start in a forearm plank position with your elbows directly under your shoulders, your shoulders pressed down away from your ears, your core engaged, your hips level, and your legs straight. Gently tip your left hip to the left, bringing it toward the floor. Your hip does not actually need to touch the floor.'], ['Lateral Lunge to Single-Leg Hop', 'Stand with your feet hip-width apart and your core engaged. Take a big step to the right side with your right foot, and immediately bend your right knee, send your hips back, and sink into a lateral lunge, keeping your left leg perfectly straight. Push off your right foot and as you bring your right foot back to the starting position, push off your left foot and hop up, without placing your right foot on the floor.'], ['Forearm Plank Reach Out', 'Start in a forearm plank position with your elbows directly under your shoulders, your shoulders pressed down away from your ears, your core engaged, your hips level, and your legs straight. Keeping your hips still, lift your right hand and extend your right arm to tap the floor in front of you. Return to your starting position and repeat on the other side with your left hand. Continue to alternate hands, keeping your hips level and still.'], ['Burpees', 'Lower your hands to the floor in front from a squat position and kick your feet back so you\'re on your hands and toes, moving to a pushup position. Do a  pushup, and a frog kick by jumping your feet back to their starting position. Jump quickly into the air and come back where you started.'], ['Jumping Jacks', 'This is an intense cardio exercise which can be made more powerful by increasing repetitions. Bend your knees slightly, and jump into the air. Spread your legs about shoulder-width apart and stretch your arms out and over your head as you jump back to the starting position. Do as many repetitions as you can.'], [' Crab Walk', 'Sit on the floor with your hands planted behind your back and your legs bent in front of you. Raise your hips upwards so only your hands and feet are planted on the floor. Start walking using your hands and feet to propel you forwards.'], ['Jumping lunge', 'Lunge forward until your rear knee is almost touching the ground. Jump into the air, bringing your rear foot forward and the front foot back. Land in a lunge position and repeat.'], ['Jump squat', 'Squat down, keeping your back straight, until your thighs are parallel with the floor and your bum is about level with your knees. Explode upwards into a jump, and go straight into the next squat.'], ['Ice Skater Jumps', 'Stand on one leg with your other leg bent at the knee. Bring your bent leg behind you, jump laterally, and land on your opposite leg. Stick the landing, reset and jump back sideways to your starting foot.']];

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
  this.selectedTime = woTime;

  // NUMBER OF MOVEMENTS (BASED ON TIME ENTRY)
  this.numOfMovements = Math.floor(parseInt(woTime) / 2);

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

Workout.prototype.bankChooser = function () {
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
};


// WORKOUT CARD GENERATOR
function workoutCardGenerator() {

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
      let workoutType = woType[i].value;
      // STORE TYPE LOCALLY
      // STEP 1: CREATE OBJECT FOR STORAGE
      let workoutObject = {
        type: workoutType
      };
      // STEP 2: STRINGIFY DATA
      let workoutObjectJSON = JSON.stringify(workoutObject);

      localStorage.setItem('CurrentWO', workoutObjectJSON);
      // PROOF OF LIFE (STORED DATA)
      let retrievedData = localStorage.getItem('CurrentWO');
      let parsedRetrievedData = JSON.parse(retrievedData);

      console.log(parsedRetrievedData);
    }
  }


};


// CLICK HANDLER FOR --TIME-- SELECTION
function handleTime(event) {
  event.preventDefault();

  let woTime = document.getElementsByName('radio');
  for (let i = 0; i < woTime.length; i++) {
    if (woTime[i].checked) {


      console.log(woTime[i].value);

      let workoutTime = woTime[i].value;

      // STORE TIME LOCALLY
      // STEP 1: RETRIEVE STORED OBJECT
      let retrievedObject = localStorage.getItem('CurrentWO');
      // STEP 2: PARSE STORED OBJECT
      let parsedRetrievedObject = JSON.parse(retrievedObject);
      // STEP 3: SET 'TIME' KEY:VALUE PAIR
      parsedRetrievedObject.time = workoutTime;
      // STEP 4: STRINGIFY AGAIN TO STORE
      let stringifiedObjectWithTime = JSON.stringify(parsedRetrievedObject);
      //STEP 5: STORE AGAIN
      localStorage.setItem('CurrentWO', stringifiedObjectWithTime);
      //STEP 6: PROOF OF LIFE
      let currentWorkout = new Workout(parsedRetrievedObject.type, parsedRetrievedObject.time);

      // STORE NEW WORKOUT IN LOCAL STORAGE
      // STRINGIFY WORKOUT
      let stringifiedNewWorkout = JSON.stringify(currentWorkout);
      // STORE WORKOUT
      localStorage.setItem('ChosenWorkout', stringifiedNewWorkout);


      //TAKE USER TO WORKOUT PAGE
      window.location.href = 'workout-page.html';
    }
  }

};


function renderCurrWorkout() {
  //create workout card
  let workoutCard = document.getElementById('workout-card');


  // Retrieve stored object
  let retrievedWorkCard = localStorage.getItem('ChosenWorkout');
  // Parse stored Object
  let parsedWorkCard = JSON.parse(retrievedWorkCard);

  for (let i = 0; i < parsedWorkCard.numOfMovements; i++) {
    let newMovement = document.createElement('h3');
    workoutCard.appendChild(newMovement);
    newMovement.textContent = parsedWorkCard.bank[parsedWorkCard.movementArr[i]][0];
    let newSteps = document.createElement('p');
    workoutCard.appendChild(newSteps);
    newSteps.textContent = parsedWorkCard.bank[parsedWorkCard.movementArr[i]][1];
  }
}

// renderCurrWorkout();

// Retrieve stored object
let retrievedWorkCard = localStorage.getItem('ChosenWorkout');
// Parse stored Object
let parsedWorkCard = JSON.parse(retrievedWorkCard);

console.log(parsedWorkCard);


//****************************************
//            EVENT LISTENERS
//**************************************** 

// typeForm.addEventListener('submit', handleSubmit);
// nextBtn.removeEventListener('click', handleType);

window.onload = (event) => {
  if (document.getElementById('type-page')) {
    nextBtn.addEventListener('click', handleType);

  } else if (document.getElementById('time-page')) {

    genBtn.addEventListener('click', handleTime);
  } else if (document.getElementById('workout-card')) {
    renderCurrWorkout();
  }
};






