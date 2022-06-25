const [...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const dx = [0, 0, -1, 1, -1, 1, 1, -1];
const dy = [-1, 1, 0, 0, -1, -1, 1, 1];
const checkArr = Array.from(Array(19), () => Array(19).fill(false));

const map = input.map((e) => e.split(" ").map((i) => parseInt(i)));

const result = [];
for (let y = 0; y < 19; y++) {
  for (let x = 0; x < 19; x++) {
    if (map[y][x] === 1) {
      for (let d = 0; d <= 7; d++) {
        let count = 0;
        let nx = x;
        let ny = y;
        while (
          ny >= 0 &&
          nx >= 0 &&
          ny <= 18 &&
          nx <= 18 &&
          map[ny][nx] === 1
        ) {
          nx += dx[d];
          ny += dy[d];
          count += 1;
        }
        if (count === 5) {
          if (y - dy[d] < 0 || x - dx[d] < 0) {
            if (d === 7) {
              result.push(1, [ny - dy[d] + 1, nx - dx[d] + 1]);
              continue;
            }
            result.push(1, [y + 1, x + 1]);
            continue;
          }

          if (map[y - dy[d]][x - [dx[d]]] === 1) {
            continue;
          }
          if (d === 7) {
            result.push(1, [ny - dy[d] + 1, nx - dx[d] + 1]);
            continue;
          }
          result.push(1, [y + 1, x + 1]);
        }
      }
    }
    if (map[y][x] === 2) {
      for (let d = 0; d <= 7; d++) {
        let count = 0;
        let nx = x;
        let ny = y;
        while (
          ny >= 0 &&
          nx >= 0 &&
          ny <= 18 &&
          nx <= 18 &&
          map[ny][nx] === 2
        ) {
          nx += dx[d];
          ny += dy[d];
          count += 1;
        }
        if (count === 5) {
          if ((y - dy[d] < 0 || x - dx[d] < 0) && d !== 7) {
            if (d === 7) {
              result.push(2, [ny - dy[d] + 1, nx - dx[d] + 1]);
              continue;
            }
            result.push(2, [y + 1, x + 1]);
            continue;
          }
          if (map[y - dy[d]][x - [dx[d]]] === 2) {
            continue;
          }
          if (d === 7) {
            result.push(2, [ny - dy[d] + 1, nx - dx[d] + 1]);
            continue;
          }
          result.push(2, [y + 1, x + 1]);
        }
      }
    }
    if (result.length > 0) {
      console.log(result[0]);
      console.log(result[1].join(" "));
      return;
    }
  }
}
if (result.length === 0) {
  console.log(0);
}
