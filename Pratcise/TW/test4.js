// minimum number of squares whose sum equals to given number n

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

function getMinSquares(n) {
 // Create a dynamic programming table 
 // to store sq 
 var dp = new Array();

 // getMinSquares table for base case entries 
 dp[0] = 0;
 dp[1] = 1;
 dp[2] = 2;
 dp[3] = 3;

 // getMinSquares rest of the table using recursive 
 // formula 
 for (var i = 4; i <= n; i++) {
  // max value is i as i can always be represented 
  // as 1*1 + 1*1 + ... 
  dp[i] = i;

  // Go through all smaller numbers to 
  // to recursively find minimum 
  for (var x = 1; x <= i; x++) {
   var temp = x * x;
   if (temp > i)
    break;
   else dp[i] = Math.min(dp[i], 1 + dp[i - temp]);
  }
 }

 // Store result and free dp[] 
 var res = dp[n];
 delete dp;

 return res;
}

function main(input) {
 var c = input.split(" ");
 var c1 = Number(c[0])
 console.log(getMinSquares(c1))

}