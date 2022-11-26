var visitors = 500;
var businesses = new Array(100).fill(0);
let neighbourhood = 1;

var problem1 = function() {
  let special = [4, 8, 17, 25, 32, 47, 62, 69, 74, 88, 92];
  var i = 0;
  while (i != special.length) {
      if (visitors - 10 > 0) {
          businesses[special[i]] = 10;
          visitors = visitors - 10;
          i += 1;
      } else {
          businesses[i] = visitors;
          visitors = 0;
          i = special.length
      }
  }
  console.log(visitors);
  if (visitors == 0) {
      return businesses;
  }

  let rest = Math.round(visitors / (businesses.length - special.length));
  var extra = visitors - (rest * (businesses.length - special.length));
  for (let j = 0; j < businesses.length; j++) {
      if (businesses[j] == 0) {
          businesses[j] = rest;
          if (extra != 0) {
              if (extra < 0) {
                  businesses[i] = rest - 1;
                  extra += 1;
              } else {
                  businesses[i] = rest + 1;
                  extra -= 1;
              }
          }
      }
  }
  return businesses;
};

// var problem2 = function() {
//   let initialDis = visitors / businesses.length;
//   for (let i = 0; i < businesses.length; i++) {
//     businesses[i] = initialDis;
//   }

//   let index = parseInt(prompt("Enter index: "));
//   var extraVisiter = parseInt(prompt("Enter extra Visitors: "));
//   if (extraVisiter < 10) {
//     businesses[index] += extraVisiter;
//     return businesses;
//   } else {
//     businesses[index] += 10;
//     extraVisiter -= 10;
//     let atLeast = Math.round(extraVisiter / businesses.length);
//     var extra = extraVisiter - (atLeast * businesses.length)
//     for (let j = 0; j < businesses.length; j++) {
//         if (extra < 0) {
//             if (j != index) {
//               businesses[j] -= 1;
//               extra += 1; 
//             }
//         } else if (extra > 0) {
//             businesses[j] += 1;
//             extra -= 1;
//         }
//         businesses[j] += atLeast;
//     }
//   }
//   return businesses;
// }

var problem2 = function() {
  let initialDis = visitors / businesses.length;
  for (let i = 0; i < businesses.length; i++) {
    businesses[i] = initialDis;
  }

  let index = parseInt(prompt("Enter index: "));
  var extraVisiter = parseInt(prompt("Enter extra Visitors: "));

  if (businesses[index] < 10) {
    const numForTen = 10 - businesses[index];
    if (numForTen < extraVisiter) {
      extraVisiter -= numForTen;
      businesses[index] += numForTen;
    } else {
      businesses += extraVisiter;
      return businesses;
    }
  }
  let atLeast = Math.round(extraVisiter / businesses.length);
  var extra = extraVisiter - (atLeast * businesses.length);
  for (let j = 0; j < businesses.length; j++) {
    if (extra < 0) {
        if (j != index) {
          businesses[j] -= 1;
          extra += 1; 
        }
    } else if (extra > 0) {
        businesses[j] += 1;
        extra -= 1;
    }
    businesses[j] += atLeast;
  }
  return businesses;
}

function App() {
  console.log(problem2());
}

export default App;
