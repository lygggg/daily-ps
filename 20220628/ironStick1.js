const [rows] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const map = rows.replaceAll("()", 1).split("");

let count = 0;
const stack = [];
for (let i = 0; i < map.length; i++) {
  if (map[i] === "(") {
    stack.push("(");
  }
  if (map[i] === ")") {
    stack.pop();
    count += 1;
  }
  if (map[i] === "1") {
    count += stack.length;
  }
}
console.log(count);
