const [input, ...rows] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = parseInt(input.split(" ")[0]);
const K = parseInt(input.split(" ")[1]);
const map = rows[0].split(" ").map((e) => parseInt(e));

let start = 0;
let end = 0;
let count = 0;
let sum = 0;
let max = 0;
const check = [];
while (start <= N - 1) {
  if (!check[map[end]]) {
    check[map[end]] = 0;
  }
  if (!check[map[start]]) {
    check[map[start]] = 0;
  }
  if (count > max) {
    max = count;
  }
  if (check[map[end]] + 1 <= K && end <= N - 1) {
    sum += map[end];
    check[map[end]] += 1;
    end += 1;
    count += 1;
  } else {
    sum -= map[start];
    check[map[start]] -= 1;
    start += 1;
    count -= 1;
  }
}
console.log(max);
