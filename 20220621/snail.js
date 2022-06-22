const [n, m] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = parseInt(n);
const M = parseInt(m);

const arr = Array.from(Array(N), () => Array(N).fill(0));
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];
let x = 0;
let y = 0;
let d = 0;
let i = n * n;
let positionX = 0;
let positionY = 0;
while (i > 0) {
  arr[y][x] = i--;
  if (arr[y][x] === M) {
    positionX = x;
    positionY = y;
  }
  x = x + dx[d];
  y = y + dy[d];
  console.log(x, y);
  if (
    arr[x] == null ||
    arr[y] == null ||
    arr[y][x] == null ||
    arr[y][x] !== 0
  ) {
    x = x - dx[d];
    y = y - dy[d];
    console.log(d);
    d = (d + 1) % 4;
    console.log(d);

    x += dx[d];
    y += dy[d];
  }
}
arr.forEach((e) => console.log(e.join(" ")));
console.log(positionY + 1, positionX + 1);
