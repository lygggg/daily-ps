const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");
input.shift();
const map = input.map((line) => line.split("").map((e) => e === "1"));
console.log(map);

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

class State {
  constructor(x, y, count) {
    this.x = x;
    this.y = y;
    this.count = count;
  }
}

function solution(map) {
  const queue = [];
  const N = map.length;
  const M = map[0].length;
  queue.push(new State(0, 0, 1));
  const isVisited = Array.from(Array(N), () => Array(M).fill(false));
  isVisited[0][0] = true;

  while (queue.length !== 0) {
    const { x, y, count } = queue.pop();

    if (x === M - 1 && y === N - 1) {
      return count;
    }

    for (let d = 0; d < 4; d++) {
      const nx = x + dx[d];
      const ny = y + dy[d];

      if (nx < 0 || ny < 0 || nx >= M || ny >= N) {
        continue;
      }
      if (!map[ny][nx]) {
        continue;
      }
      if (isVisited[ny][nx]) {
        continue;
      }
      isVisited[ny][nx] = true;
      queue.push(new State(nx, ny, count + 1));
    }
  }
}

console.log(solution(map));
