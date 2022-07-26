const [...rows] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const stack = [];
const brackets = [];
const result = new Set();
const str = rows[0].split("");
const selected = new Array(str.length).fill(true);
for (let i = 0; i < str.length; i++) {
  if (str[i] === "(") {
    stack.push(i);
  } else if (str[i] === ")") {
    brackets.push([stack.pop(), i]);
  }
}

const dfs = (idx, cnt) => {
  if (idx === brackets.length) {
    // if (cnt > 0) {
    let temp = "";
    for (let i = 0; i < str.length; i++) {
      if (selected[i]) temp += str[i];
    }
    result.add(temp);
    // }
    return;
  }
  dfs(idx + 1, cnt);
  selected[brackets[idx][0]] = false;
  selected[brackets[idx][1]] = false;
  dfs(idx + 1, cnt);
  selected[brackets[idx][0]] = true;
  selected[brackets[idx][1]] = true;
};

dfs(0, 0);
result.delete(rows[0]);
console.log([...result].sort().join("\n"));
