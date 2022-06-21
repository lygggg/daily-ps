const [input, ...rows] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const dx = [0, 0, -1, 1, -1, -1, 1, 1];
const dy = [-1, 1, 0, 0, -1, 1, -1, 1];
const N = parseInt(input);
const mineArr = rows.slice(0, N).map((e) => e.split(""));
const checkArr = rows.slice(N, rows.length + 1).map((e) => e.split(""));

const checkCount = (x, y) => {
  let i = 0;
  let count = 0;
  while (i < 8) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (nx < 0 || ny < 0 || nx >= N || ny >= N) {
      i += 1;
      continue;
    }
    if (mineArr[ny][nx] === "*") {
      count += 1;
    }
    i += 1;
  }
  return count;
};
let flag = false;
for (let y = 0; y < N; y++) {
  for (let x = 0; x < N; x++) {
    if (!flag && checkArr[y][x] === "x" && mineArr[y][x] === "*") {
      flag = true;
    }
    if (checkArr[y][x] === "x") {
      const value = checkCount(x, y);
      checkArr[y][x] = value;
    } else {
      checkArr[y][x] = ".";
    }
  }
}
if (flag) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (mineArr[i][j] === "*") {
        checkArr[i][j] = "*";
      }
    }
  }
}
for (value of checkArr) {
  console.log(value.join(""));
}
