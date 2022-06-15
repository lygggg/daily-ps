const [input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = parseInt(input);
let start = 0;
let end = n;
let min;

while (start <= end) {
  let mid = Math.ceil((start + end) / 2);
  let result = Math.pow(mid, 2);
  if (result >= n) {
    min = mid;
    end = mid - 1;
  } else {
    start = mid + 1;
  }
}
console.log(min);
