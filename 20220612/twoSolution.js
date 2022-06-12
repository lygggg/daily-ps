const [input, ...rows] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = parseInt(input.split(" ")[0]);
const map = rows[0]
  .split(" ")
  .map((e) => parseInt(e))
  .sort((a, b) => a - b);

let end = N - 1;
let start = 0;
let max;
let resent;

let arr = [];
while (start <= end) {
  let sum = map[start] + map[end];
  if (sum === 0 && start !== end) {
    arr[0] = map[start];
    arr[1] = map[end];
    break;
  }
  resent = sum;
  if (sum < 0) {
    resent *= -1;
  }
  if ((max > resent || !max) && start != end) {
    max = resent;
    arr[0] = map[start];
    arr[1] = map[end];
  }
  if (sum > 0) {
    end -= 1;
  }
  if (sum < 0) {
    start += 1;
  }
}
console.log(arr.sort((a, b) => a - b).join(" "));
