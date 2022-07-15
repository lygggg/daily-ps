const [rows] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const map = rows.replaceAll("()", 1).split("");
const stack = [];
let count = 0;
for (let i = 0; i < rows.length; i++) {
  if (map[i] === "(") {
    stack.push("(");
  }
  if (map[i] === "1") {
    count += stack.length;
  }
  if (map[i] === ")") {
    stack.pop();
    count += 1;
  }
}
console.log(count);
