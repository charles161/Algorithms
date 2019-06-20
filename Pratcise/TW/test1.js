

// given two strings s and t , the task is to find maximum length of some of the prefix of the string 's' which occur in string 't' as subsequence
//input s=digger t=biggerdiagram
//output = 3 (the prefix dig is in t)

var readline = require("readline");
var rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});

var stdin_input = ""

// process.stdin.on("data", function (input) {
//  stdin_input += input;
// })

// process.stdin.on("end", function () {
//  main(stdin_input)
// })

rl.question("input:\n", function (answer) {
 //if (answer.includes("exit"))
 //we need some base case, for recursion
 //return
 rl.close(); //closing RL and returning from function.
 //let ans = answer.split(" ");
 main(answer)
});

function main(input) {
 var c = input.split(" ");
 var c1 = c[0], c2 = c[1];
 var p1 = 0, p2 = 0, l1 = c[0].length, l2 = c[1].length, count = 0;
 while (p1 < l1 && p2 < l2) {
  if (c1[p1] == c2[p2]) {
   count++;
   p1++;
   p2++;
  }
  else {
   p2++;
  }
 }
 console.log(count)
}