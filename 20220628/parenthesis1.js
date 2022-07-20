const [rows] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const map = rows.split("");

const stack = [];
let tmp = 1;
let result = 0;
for (let i = 0; i < map.length; i++) {
  if (map[i] === "(") {
    tmp *= 2;
    stack.push("(");
  } else if (map[i] === "[") {
    tmp *= 3;
    stack.push("[");
  } else if (map[i] === ")") {
    if (stack.length === 0 || stack[stack.length - 1] !== "(") {
      console.log(0);
      return;
    }
    if (map[i - 1] === "(") {
      result += tmp;
    }
    tmp /= 2;
    stack.pop();
  } else {
    if (stack.length === 0 || stack[stack.length - 1] !== "[") {
      console.log(0);
      return;
    }
    if (map[i - 1] === "[") {
      result += tmp;
    }
    tmp /= 3;
    stack.pop();
  }
}
if (stack.length !== 0) {
  console.log(0);
  return;
}
console.log(result);
