const [input, ...rows] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = parseInt(input);
const map = rows.map((e) => e.split(" "));
const stack = [];
let offset = 0;
const result = [];

for (let i = 0; i < N; i++) {
  if (map[i][0] === "push") {
    stack[offset] = map[i][1];
    offset++;
  }
  if (map[i][0] === "pop") {
    if (!stack[offset - 1]) {
      result.push(-1);
    } else {
      result.push(stack[offset - 1]);
      offset--;
    }
  }
  if (map[i][0] === "size") {
    result.push(offset);
  }
  if (map[i][0] === "empty") {
    if (offset === 0) {
      result.push(1);
    } else {
      result.push(0);
    }
  }
  if (map[i][0] === "top") {
    if (stack[offset - 1]) {
      result.push(stack[offset - 1]);
    } else {
      result.push(-1);
    }
  }
}
console.log(result.join("\n"));
