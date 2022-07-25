const [...rows] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const map = rows.map((e) => e.split(""));
const result = [];
let i = 0;
while (i < map.length) {
  if (map[i][0] === ".") {
    break;
  }
  const stack = [];
  for (let j = 0; j < map[i].length; j++) {
    if (map[i][j] === ".") {
      break;
    }
    if (map[i][j] === "(") {
      stack.push("(");
    } else if (map[i][j] === "[") {
      stack.push("[");
    } else if (map[i][j] === ")") {
      if (stack[stack.length - 1] === "(") {
        stack.pop();
      } else {
        stack.push(map[i][j]);
      }
    } else if (map[i][j] === "]") {
      if (stack[stack.length - 1] === "[") {
        stack.pop();
      } else {
        stack.push(map[i][j]);
      }
    }
  }
  if (stack.length > 0) {
    result.push("no");
  } else {
    result.push("yes");
  }
  i++;
}

console.log(result.join("\n"));
