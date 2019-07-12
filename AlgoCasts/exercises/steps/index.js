// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// own solutioncd
// function steps(n) {
//     let arr = []

//     for (i = 0; i < n; i++) {
//       arr.push(' ')
//     }
  
//     for (i = 0; i < n; i++) {
//       arr[i] = '#'
//       console.log(arr.join(''))
//     }
// }


// course solution #1
// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let stair = '';

//     for (let col = 0; col < n; col++) {
//       if (col <= row) {
//         stair += '#';
//       } else {
//         stair += ' ';
//       }
//     }
//     console.log(stair);
//   }
// }


// course solution #2
function steps(n, row = 0, stair = '') {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  stair.length <= row ? stair += '#' : stair += ' ';

  steps(n, row, stair);
}

module.exports = steps;
