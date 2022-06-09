const [total, ...rows] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const x = parseInt(rows[1]);
const map = rows[0]
  .split(" ")
  .map((e) => parseInt(e))
  .sort((a, b) => a - b);

let count = 0;
let start = 0;
let end = parseInt(total) - 1;
let sum = 0;
while (start != end) {
  sum = map[start] + map[end];
  if (sum === x) {
    count += 1;
    start += 1;
  } else if (sum > x) {
    end -= 1;
  } else {
    start += 1;
  }
}
console.log(count);
