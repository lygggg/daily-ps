const [input, ...rows] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = parseInt(input);
const map = rows[0].split(" ").map((e) => parseInt(e));

let start = 0;
let end = N - 1;
let max = Math.abs(map[start] + map[end]);
const arr = [map[start], map[end]];
while (start < end) {
  let sum = map[start] + map[end];
  if (max >= Math.abs(sum)) {
    max = Math.abs(sum);
    arr[0] = map[start];
    arr[1] = map[end];
  }
  if (sum <= 0) {
    start += 1;
  } else {
    end -= 1;
  }
}
console.log(arr.sort((a, b) => a - b).join(" "));
