const [input, ...rows] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = parseInt(input.split(" ")[0]);
let K = parseInt(input.split(" ")[1]);

const map = rows[0].split(" ").map((e) => parseInt(e));

let count = 0;
let max = 0;
let life = K;
let j = 0;
for (let i = 0; i < N; i++) {
  if (map[i] % 2 !== 0) {
    life -= 1;
  } else {
    count += 1;
  }
  if (life === -1) {
    j = i;
    break;
  }
}
if (life >= 0) {
  console.log(count);
  return;
}
max = count;
let i = 0;
while (i !== N) {
  if (life < -1) {
    if (map[i] % 2 !== 0) {
      life += 1;
    } else {
      count -= 1;
    }
    i++;
  }
  if (life > -2) {
    if (map[j] % 2 !== 0) {
      life -= 1;
    } else {
      count += 1;
    }
    j++;
  }

  if (count >= max) {
    max = count;
  }
}
console.log(max);
