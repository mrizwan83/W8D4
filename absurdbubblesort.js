const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

 function askIfGreaterThan(el1, el2, callback) {
   rl.question(`is ${el1} greater than ${el2}? `, function(answer) {
    (answer === "yes") ? callback(true) : callback(false);
   });
 };

 function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {

     if (i == (arr.length - 1)) {
       outerBubbleSortLoop(madeAnySwaps);
      return;
     }
      
     askIfGreaterThan(arr[i], arr[i + 1], function (isGreaterThan) {
       if (isGreaterThan) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
         madeAnySwaps = true;
       }
    
       innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
     });
 };


 function absurdBubbleSort(arr, sortCompletionCallback) {
   function outerBubbleSortLoop(madeAnySwaps) {
     (madeAnySwaps) ? innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop) : sortCompletionCallback(arr);
     }
   outerBubbleSortLoop(true);
 };


absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  rl.close();
});





// function addBubbleSort(arr, sortCompletionCallback) {
//   if (numsLeft > 0) {
//     rl.question("Give me a number: ", function (answer) {
//       const currentNumber = parseInt(answer);

//       sum += currentNumber;
//       console.log(`Sum: ${sum}`);

//       addNumbers(sum, numsLeft - 1, completionCallback);
//     });
//   }
//   else {
//     completionCallback(sum);
//     rl.close();
//   }
// };

// addNumbers(0, 5, sum => console.log(`Total Sum: ${sum}`));