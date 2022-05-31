'use strict';

//****************************************
//          GLOBAL VARIABLES
// ****************************************


// ***********Click Variables****************


// *******************************************
//             CONSTRUCTOR
//********************************************



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

// function renderChart() {

//   let productName = [];
//   let productVotes = [];
//   let productViews = [];

//   for (let i = 0; i < allProductsArr.length; i++) {
//     productName.push(allProductsArr[i].name);
//     productVotes.push(allProductsArr[i].votes);
//     productViews.push(allProductsArr[i].views);
//   }

//   new Chart(ctx, {
//     type: 'bar',
//     data: {
//       labels: productName,
//       datasets: [{
//         label: '# of Votes',
//         data: productVotes,
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.2)',
//           'rgba(54, 162, 235, 0.2)',
//           'rgba(255, 206, 86, 0.2)',
//           'rgba(75, 192, 192, 0.2)',
//           'rgba(153, 102, 255, 0.2)',
//           'rgba(255, 159, 64, 0.2)'
//         ],
//         borderColor: [
//           'rgba(255, 99, 132, 1)',
//           'rgba(54, 162, 235, 1)',
//           'rgba(255, 206, 86, 1)',
//           'rgba(75, 192, 192, 1)',
//           'rgba(153, 102, 255, 1)',
//           'rgba(255, 159, 64, 1)'
//         ],
//         borderWidth: 1
//       }, {
//         label: '# of Views',
//         data: productViews,
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.2)',
//           'rgba(54, 162, 235, 0.2)',
//           'rgba(255, 206, 86, 0.2)',
//           'rgba(75, 192, 192, 0.2)',
//           'rgba(153, 102, 255, 0.2)',
//           'rgba(255, 159, 64, 0.2)'
//         ],
//         borderColor: [
//           'rgba(255, 99, 132, 1)',
//           'rgba(54, 162, 235, 1)',
//           'rgba(255, 206, 86, 1)',
//           'rgba(75, 192, 192, 1)',
//           'rgba(153, 102, 255, 1)',
//           'rgba(255, 159, 64, 1)'
//         ],
//         borderWidth: 1
//       }]
//     },
//   });
// }


//********************************************
//            EVENT HANDLERS
//******************************************** */



//****************************************
//            EVENT LISTENERS
//**************************************** 

productContainer.addEventListener('click', handleClick);

/* **********************************************
                  LOCAL STORAGE
********************************************** */

// STEP 1: STRINGIFY DATA
// let stringifiedProducts = JSON.stringify(allProductsArr);

// STEP 2: ADD TO LOCAL STORAGE
// localStorage.setItem('products', stringifiedProducts);

