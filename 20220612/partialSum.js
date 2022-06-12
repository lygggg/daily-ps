const [input, ...rows] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = parseInt(input.split(" ")[0]);
const S = parseInt(input.split(" ")[1]);
const map = rows[0].split(" ").map((e) => parseInt(e));

let count = 0;
let start = 0;
let end = 0;
let sum = 0;
let max = 0;

for (let i = 0; i < N; i++) {
  sum += map[i];
  if (sum >= S) {
    end = i;
    max = i + 1;
    count = i + 1;
    break;
  }
}
let i = 0;
while (start <= end) {
  if (sum >= S) {
    sum -= map[start];
    count -= 1;
    start += 1;
  } else if (end < N) {
    sum += map[end + 1];
    count += 1;
    end += 1;
  }
  if (end >= N - 1) {
    sum -= map[start];
    count -= 1;
    start += 1;
  }
  if (count < max && sum >= S) {
    max = count;
  }
  i++;
}
console.log(max);
