const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    rl.question("Give me a number: ", function(answer) {
      const currentNumber = parseInt(answer);

      sum += currentNumber;
      console.log(`Sum: ${sum}`);

      addNumbers(sum, numsLeft - 1, completionCallback);
    });
  }
  else {
    completionCallback(sum);
    rl.close();
  }
};

addNumbers(0, 5, sum => console.log(`Total Sum: ${sum}`));

