const [input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = parseInt(input);

let result = "";
if (N % 2 === 1) {
  for (let i = 0; i < Math.floor(N / 2); i++) {
    result += "4";
  }
}
if (N % 2 === 0) {
  for (let i = 0; i < N / 2; i++) {
    result += "7";
  }
}

console.log(result);
