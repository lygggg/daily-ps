const [input, ...rows] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = parseInt(input);
const map = rows.map((e) => e.split(" ").map((i) => parseInt(i)));
const check = Array(11).fill(false);
let count = 0;
for (let i = 0; i < N; i++) {
  if (check[map[i][0]] === false) {
    check[map[i][0]] = map[i][1];
  }
  if (check[map[i][0]] !== false && check[map[i][0]] !== map[i][1]) {
    count += 1;
    check[map[i][0]] = map[i][1];
  }
}
console.log(count);
