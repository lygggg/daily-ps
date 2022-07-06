const [input, ...rows] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = parseInt(input);
const map = rows.map((e) => e.split(""));

let count = 0;
for (let i = 0; i < map.length; i++) {
  const checkSet = new Set();
  let resentWord = map[i][0];
  checkSet.add(map[i][0]);
  let isnot = true;
  for (let j = 0; j < map[i].length; j++) {
    if (checkSet.has(map[i][j]) && resentWord !== map[i][j]) {
      isnot = false;
    }
    if (resentWord !== map[i][j]) {
      resentWord = map[i][j];
      checkSet.add(map[i][j]);
    }
  }
  if (isnot) {
    count += 1;
  }
}
console.log(count);
