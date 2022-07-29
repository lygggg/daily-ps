const [input, ...rows] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.split(" ");
const NArr = rows.slice(0, N);
const MArr = rows.slice(N, M + N);

let count = 0;
const set = new Set();

for (let i = 0; i < NArr.length; i++) {
  set.add(NArr[i]);
}

for (let i = 0; i < MArr.length; i++) {
  if (set.has(MArr[i])) {
    count += 1;
  }
}

console.log(count);
