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
const arr2 = rows2.split(" ").map((e) => parseInt(e));

const result = [];
let mid;
for (let i = 0; i < arr2.length; i++) {
  let start = 0;
  let end = N - 1;
  while (start <= end) {
    mid = Math.ceil((start + end) / 2);
    if (arr1[mid] === arr2[i]) {
      result[i] = 1;
      break;
    }
    if (arr1[mid] > arr2[i]) {
      end = mid - 1;
    }
    if (arr1[mid] < arr2[i]) {
      start = mid + 1;
    }
  }
  if (!result[i]) {
    result[i] = 0;
  }
}

console.log(result.join(" "));
