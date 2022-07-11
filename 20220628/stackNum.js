const [input, ...rows] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = parseInt(input);
const map = rows.map((e) => parseInt(e));

const stack = [];
const result = [];

let i = 1;
let index = 0;
while (i <= n) {
  if (i <= n) {
    stack.push(i);
    result.push("+");
    i++;
  }
  while (stack[stack.length - 1] === map[index]) {
    stack.pop(i);
    result.push("-");
    index += 1;
    if (index >= n) {
      break;
    }
  }
}
if (stack.length > 0) {
  console.log("NO");
  return;
}
console.log(result.join("\n"));
