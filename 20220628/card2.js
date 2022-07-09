const [input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = parseInt(input);

const arr = Array(N)
  .fill(0)
  .map((e, i) => e + 1 + i);
let offset = 0;
while (offset !== arr.length - 1) {
  if (arr[offset]) {
    offset += 1;
    arr.push(arr[offset]);
    offset++;
  } else {
    continue;
  }
}
console.log(arr[offset]);
