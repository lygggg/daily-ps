const [input, ...rows] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = parseInt(input.split(" ")[0]);
const map = rows[0].split(" ").map((e) => parseInt(e));

const max = Math.max(...map);
let start = 0;
let end = max;
while (start <= end) {
  let mid = Math.ceil((start + end) / 2);
  let count = 0;
  for (let i = 0; i < map.length; i++) {
    if (map[i] >= mid) {
      count += Math.floor(map[i] / mid);
    }
  }
  if (count >= N) {
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}
if (end === -1) {
  console.log(0);
  return;
}
console.log(end);
