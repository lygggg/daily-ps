const [input, ...rows] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = parseInt(input.split(" ")[0]);
const X = parseInt(input.split(" ")[1]);

const map = rows[0].split(" ").map((e) => parseInt(e));

if (!Math.max(...map)) {
  console.log("SAD");
  return;
}
let value = 0;
let max = 0;
let count = 1;
for (let i = 0; i < X; i++) {
  value += map[i];
}

let c = 0;
while (map[c + X] != null) {
  if (value > max) {
    count = 1;
    max = value;
  }
  value += map[c + X];
  value -= map[c];

  if (value === max) {
    count += 1;
  }
  c += 1;
}
console.log(max);
console.log(count);
