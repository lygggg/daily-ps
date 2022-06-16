const [input, ...rows] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const K = parseInt(input.split(" ")[0]);
const N = parseInt(input.split(" ")[1]);
const map = rows.map((e) => parseInt(e));

const max = Math.max(...map);
let start = 0;
let end = max;
while (start <= end) {
  let mid = Math.ceil((start + end) / 2);
  let count = 0;
  for (let i = 0; i < map.length; i++) {
    count += Math.floor(map[i] / mid);
  }
  if (count >= N) {
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}
console.log(end);
