const { join } = require("path");

const [input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const map = input.split("");
const result = [];
let check = false;
let text = "";
for (let i = 0; i < map.length; i++) {
  if (map[i] === "<") {
    if (text) {
      result.push(text.split("").reverse().join(""));
      text = "";
    }
    check = true;
  }
  if (check === true) {
    result[i] = map[i];
  }
  if (map[i] === ">") {
    check = false;
  }
  if (map[i] === " ") {
    if (text) {
      result.push(text.split("").reverse().join(""));
      text = "";
    }
    result[i] = map[i];
  }
  if (check === false && map[i] !== " " && map[i] !== ">") {
    text += map[i];
  }
  if (i === map.length - 1 && text) {
    result.push(text.split("").reverse().join(""));
  }
}
console.log(result.join(""));
