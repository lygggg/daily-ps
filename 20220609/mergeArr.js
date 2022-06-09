const [input, row1, row2] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const map1 = row1.split(" ").map((e) => parseInt(e));
const map2 = row2.split(" ").map((e) => parseInt(e));

const result = [];

let first = 0;
let two = 0;
let max;
while (result.length != map1.length + map2.length) {
  if (first === map1.length) {
    for (let i = two; i < map2.length; i++) {
      result.push(map2[i]);
    }
    break;
  }
  if (two === map2.length) {
    for (let i = first; i < map1.length; i++) {
      result.push(map1[i]);
    }
    break;
  }
  if (map1[first] > map2[two]) {
    max = map1[first];
    result.push(map2[two]);
    two += 1;
  } else {
    max = map2[two];
    result.push(map1[first]);
    first += 1;
  }
}
console.log(result.join(" "));
