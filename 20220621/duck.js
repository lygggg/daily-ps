const [input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const map = input.split("");
const checkArr = Array(map.length).fill(0);
const text = ["q", "u", "a", "c", "k"];
let count = 0;
let check = 0;
let lastWord;
let result = 0;
let i = 0;
let d = 0;
if (map.length % 5 != 0) {
  console.log(-1);
  return;
}

while (count < map.length) {
  if (map[i] === text[d] && checkArr[i] === 0) {
    checkArr[i] = map[i];
    count += 1;
    lastWord = text[d];
    d += 1;
  }
  if (d >= 5) {
    check += 1;
    d = 0;
    if (i !== map.length - 1 && count === map.length) {
      result += 1;
    }
  }
  if (i < map.length - 1) {
    i += 1;
  } else {
    if (lastWord !== "k") {
      console.log(-1);
      return;
    }
    i = 0;
    d = 0;
    if (check > 0) {
      result += 1;
    }

    check = 0;
  }
}
if (lastWord !== "k") {
  console.log(-1);
  return;
}

console.log(result);
