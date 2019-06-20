// Generate all the prime numbers within the given range

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

function main(input) {
 var c = input.split(" ");
 var c1 = Number(c[0]), c2 = Number(c[1]);
 var num, factor;
 for (num = c1; num < c2; num++) {
  for (factor = 2; factor <= Math.sqrt(num); factor++)
   if (num % factor == 0) break;
  if (factor > Math.sqrt(num)) console.log(num);
 }
}