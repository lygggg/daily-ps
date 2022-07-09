const [inputs] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const input = inputs.split(" ");
const N = parseInt(input[0]);
const K = parseInt(input[1]);

const arr = Array(N)
  .fill(0)
  .map((e, i) => e + 1 + i);
const result = [];
let count = 0;
while (result.length !== arr.length) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[j]) {
      count += 1;
    }
    if (count >= K) {
      if (arr[j]) {
        result.push(arr[j]);
        arr[j] = false;
        count = 0;
      }
    }
  }
}
console.log("<" + result.join(", ") + ">");
