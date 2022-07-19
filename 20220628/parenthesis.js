const [rows] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const map = rows.split("");
/*
(를 만나면 2곱하기 그후 [가 나오면 3곱하고 닫히면 더한다
2*2
tmp = 4 result = 4;
tmp = 2 stack = ["("]
2*3*3
tmp = 18 result = 22;
tmp = 6 stack = ["(","["]
2*3
tmp = 6 result = 22;
tmp = 2 stack = ["("]
2
tmp = 2 result = 22;
tmp = 1 stack = []

0
tmp = 1 result = 22
tmp = 1 stack = []

*/
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
  } else if (map[i] == ")") {
    if (stack.length === 0 || stack[stack.length - 1] !== "(") {
      console.log(0);
      return;
    }
    if (map[i - 1] === "(") {
      result += tmp;
    }
    console.log(stack);
    stack.pop();
    tmp /= 2;
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
