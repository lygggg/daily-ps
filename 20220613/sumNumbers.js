const [input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const S = parseInt(input);
let num = 0;
let sum = 0;
let count = 0;
while (true) {
  sum += num;
  num += 1;
  if (sum === S) {
    console.log(count);
    return;
  }
  if (sum > S) {
    break;
  }
  count++;
}
console.log(count - 1);
