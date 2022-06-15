const [n, rows1, m, rows2] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = parseInt(n);
const arr1 = rows1
  .split(" ")
  .map((e) => parseInt(e))
  .sort((a, b) => a - b);
const M = parseInt(m);
const arr2 = rows2.split(" ").map((e) => parseInt(e));

const result = [];
let mid;
let start = 0;
let end = M - 1;
for (let i = 0; i < arr2.length; i++) {
  while (start <= end) {
    mid = Math.ceil((start + end) / 2);
    if (arr1[mid] === arr2[i]) {
      result[i] = 1;
      continue;
    }
    if (arr1[mid] > arr2[i]) {
      end = mid - 1;
    }
    if (arr1[mid] < arr2[i]) {
      start = mid + 1;
    }
    console.log(result);
  }
  result[i] = 0;
}

console.log(result);
