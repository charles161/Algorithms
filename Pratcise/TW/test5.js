var readline = require("readline");
var rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});

rl.question("input:\n", function (answer) {
 rl.close();
 main(answer)
});

function decode(str) {
 var s = str.split("")
 var tr = ""
 var final = ""
 var len
 s.forEach(e => {
  if (Number(e)) {
   len = Number(e)
  }
  else {
   tr += e
  }
 });
 while (len--) {
  final += tr
 }
 return final;

}

function main(answer) {
 console.log(decode(answer))
}

