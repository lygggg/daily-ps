const [n, ...rows] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = parseInt(n);
const map = rows[0].split(" ");

let index = 0;
const result = [];
const check = [...map];
while (result.length < map.length) {
  let count = 0;
  if (map[index]) {
    check[index] = false;
    result.push(index + 1);
    if (result.length >= map.length) {
      break;
    }

    if (map[index] > 0) {
      const resentIndex = map[index];
      while (count < resentIndex) {
        index += 1;
        if (check[index]) {
          count += 1;
        }
        if (index > map.length) {
          index = 0;
        }
      }
    } else {
      const resentIndex = Math.abs(map[index]);
      while (count < resentIndex) {
        index -= 1;
        if (check[index]) {
          count += 1;
        }
        if (index < 0) {
          index = map.length - 1;
          if (check[index]) {
            count += 1;
          }
        }
      }
    }
  }
}
console.log(result.join(" "));
