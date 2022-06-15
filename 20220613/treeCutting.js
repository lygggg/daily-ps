const [input, ...rows] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = parseInt(input.split(" ")[0]);
const M = parseInt(input.split(" ")[1]);
const map = rows[0]
  .split(" ")
  .map((e) => parseInt(e))
  .sort((a, b) => a - b);

let start = 0;
let end = Math.max(...map);

while (start <= end) {
  const mid = Math.ceil((start + end) / 2);
  let cnt = 0;
  for (tree of map) {
    if (tree > mid) {
      cnt += tree - mid;
    }
  }
  if (cnt >= M) {
    start = mid + 1;
  }
  if (cnt < M) {
    end = mid - 1;
  }
}
console.log(end);
