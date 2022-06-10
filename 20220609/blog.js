const [input, ...rows] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = parseInt(input.split(" ")[0]);
const X = parseInt(input.split(" ")[1]);

const map = rows[0].split(" ").map((e) => parseInt(e));
if (Math.max(...map) === 0) {
  console.log("SAD");
  return;
}
let sum = 0;
let max = 0;
let count = 0;
for (let i = 0; i < X; i++) {
  sum += map[i];
}
max = sum;
count = 1;

for (let j = X; j < N; j++) {
  sum += map[j];
  sum -= map[j - X];
  if (sum > max) {
    max = sum;
    count = 1;
  } else if (sum == max) {
    count += 1;
  }
}
console.log(max);
console.log(count);
