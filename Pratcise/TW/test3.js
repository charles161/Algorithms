// Find the minimum absolute difference for the sum of subsets of an array

var readline = require("readline");
var rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});

rl.question("input:\n", function (answer) {
 rl.close(); //closing RL and returning from function.
 //let ans = answer.split(" ");
 main(answer)
});

// Function to find the minimum sum 
function findMinRec(arr, i, sumCalculated, sumTotal) {
 // If we have reached last element.  Sum of one 
 // subset is sumCalculated, sum of other subset is 
 // sumTotal-sumCalculated.  Return absolute difference 
 // of two sums. 
 if (i == 0)
  return Math.abs((sumTotal - sumCalculated) - sumCalculated);


 // For every item arr[i], we have two choices 
 // (1) We do not include it first set 
 // (2) We include it in first set 
 // We return minimum of two choices 
 return Math.min(findMinRec(arr, i - 1, sumCalculated + arr[i - 1], sumTotal),
  findMinRec(arr, i - 1, sumCalculated, sumTotal));
}

// Returns minimum possible difference between sums 
// of two subsets 
function findMin(arr, n) {
 // Compute total sum of elements 
 var sumTotal = 0;
 for (var i = 0; i < n; i++)
  sumTotal += arr[i];

 // Compute result using recursive function 
 return findMinRec(arr, n, 0, sumTotal);
}


function main(input) {
 var c = input.split(" ");
 c = c.map(v => Number(v))
 var [c, ...arr] = c
 console.log(findMin(arr, c))


}