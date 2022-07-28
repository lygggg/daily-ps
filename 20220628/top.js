const [input, ...rows] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const tops = rows[0].split(" ").map((e) => parseInt(e));
const N = parseInt(input);

const stack = [];
const answer = [];

for (let i = 0; i < N; i++) {
  let now = tops[i];

  while (stack.length && tops[stack[stack.length - 1]] < now) {
    stack.pop();
  }

  if (stack.length === 0) {
    answer.push(0);
  } else {
    answer.push(stack[stack.length - 1] + 1);
  }
  stack.push(i);
}
console.log(answer.join(" "));
