const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");
const tomatoes = input
  .slice(1)
  .map((line) => line.split(" ").map((e) => parseInt(e)));

class Queue {
  offset_ = 0;
  container_ = [];

  push(value) {
    this.container_.push(value);
  }

  pop() {
    return this.container_[this.offset_++];
  }

  isEmpty() {
    return this.container_.length === this.offset_;
  }
}

class State {
  constructor(x, y, count) {
    this.x = x;
    this.y = y;
    this.count = count;
  }
}
const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];
function solution(tomatoes) {
  const N = tomatoes.length;
  const M = tomatoes[0].length;
  const queue = new Queue();
  const isVisited = Array.from(Array(N), () => new Array(M).fill(false));
  for (let y = 0; y < tomatoes.length; y++) {
    for (let x = 0; x < tomatoes[y].length; x++) {
      if (tomatoes[y][x] === 1) {
        queue.push(new State(x, y, 0));
        isVisited[y][x] = true;
      }
    }
  }
  let maxCount = 0;
  while (!queue.isEmpty()) {
    const { x, y, count } = queue.pop();
    maxCount = count;
    for (let d = 0; d < 4; d++) {
      const nx = x + dx[d];
      const ny = y + dy[d];
      if (ny < 0 || ny >= N || nx < 0 || nx >= M) continue;
      if (tomatoes[ny][nx] === -1) continue;
      if (isVisited[ny][nx]) continue;
      isVisited[ny][nx] = true;
      queue.push(new State(nx, ny, count + 1));
    }
  }
  for (let y = 0; y < tomatoes.length; y++) {
    for (let x = 0; x < tomatoes[y].length; x++) {
      if (!isVisited[y][x] && tomatoes[y][x] !== -1) {
        return -1;
      }
    }
  }
  return maxCount;
}

console.log(solution(tomatoes));
