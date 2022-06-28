const [input, ...rows] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const map = rows.map((e) => e.split(" ").map((i) => parseInt(i)));

const checkArr = Array(366).fill(0);

map.forEach(([a, c]) => {
  for (let i = a; i <= c; i++) {
    checkArr[i] += 1;
  }
});

let maxY = 0;
let maxX = 0;
let sum = 0;
for (let j = 0; j < checkArr.length; j++) {
  if (checkArr[j] !== 0) {
    maxX += 1;
  }
  if (checkArr[j] !== 0 && checkArr[j] > maxY) {
    maxY = checkArr[j];
  }
  if (checkArr[j] === 0) {
    sum += maxX * maxY;
    maxX = 0;
    maxY = 0;
  }
}
sum += maxX * maxY;

console.log(sum);
