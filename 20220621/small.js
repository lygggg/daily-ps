const [input, arr, rows] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const K = input.split(" ")[1];
const Darr = rows.split(" ").map((e) => parseInt(e));
let Sarr = arr.split(" ").map((e) => parseInt(e));
let result = [];
let count = 0;
while (count < K) {
  for (let i = 0; i < Darr.length; i++) {
    result[Darr[i] - 1] = Sarr[i];
  }
  Sarr = result;
  result = [];
  count += 1;
}
console.log(Sarr.join(" "));
