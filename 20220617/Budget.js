const [n, rows, m] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const map = rows.split(" ").map((e) => parseInt(e));
const M = parseInt(m);

const sumArr = map.reduce((a, b) => a + b);
if (sumArr <= M) {
  console.log(Math.max(...map));
  return;
}
let start = 0;
let end = M;
while (start <= end) {
  let mid = Math.ceil((start + end) / 2);
  let sum = 0;
  for (let i = 0; i < map.length; i++) {
    if (mid >= map[i]) {
      sum += map[i];
    } else {
      sum += mid;
    }
  }
  if (sum <= M) {
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}
console.log(end);
