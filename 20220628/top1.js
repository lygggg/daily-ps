const [input, ...rows] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const tops = rows[0].split(" ").map((e) => parseInt(e));

const stack = [];
const result = [];
for (let i = 0; i < tops.length; i++) {
  let resentInder = tops[i];
  while (stack.length > 0 && tops[stack[stack.length - 1]] <= resentInder) {
    stack.pop();
  }
  if (stack.length === 0) {
    result.push(0);
  } else {
    result.push(stack[stack.length - 1] + 1);
  }
  stack.push(i);
}
console.log(result.join(" "));
