const [input, ...rows] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const inputs = input.split(" ");
const H = parseInt(inputs[0]);
const W = parseInt(inputs[1]);
const map = rows[0].split(" ").map((e) => parseInt(e));

const checkArr = Array.from(Array(H), () => Array(W).fill(0));

map.forEach((e, index) => {
  for (let i = 0; i < e; i++) {
    checkArr[i][index] = 1;
  }
});
let result = 0;
for (let y = 0; y < H; y++) {
  let checkCount = 0;
  let checkBlock = 0;
  for (let x = 0; x < W; x++) {
    if (checkArr[y][x] === 1) {
      checkBlock += 1;
    }
    if (checkArr[y][x] === 0 && checkBlock === 1) {
      checkCount += 1;
    }
    if (checkBlock === 2) {
      result += checkCount;
      checkCount = 0;
      checkBlock = 1;
    }
  }
}
console.log(result);
