const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [M, N, H] = input[0].split(" ").map((e) => parseInt(e));
const data = input
  .slice(1)
  .map((line) => line.split(" ").map((e) => parseInt(e)));

const tomatoes = [];
for (let h = 0; h < H; h++) {
  const plate = [];
  for (let n = 0; n < N; n++) {
    plate.push(data[h * N + n]);
  }
  tomatoes.push(plate);
}

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
  constructor(x, y, z, count) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.count = count;
  }
}
const dx = [0, 0, -1, 1, 0, 0];
const dy = [-1, 1, 0, 0, 0, 0];
const dz = [0, 0, 0, 0, -1, 1];
function solution(tomatoes) {
  const queue = new Queue();
  const isVisited = Array.from(Array(H), () =>
    Array.from(Array(N), () => new Array(M).fill(false))
  );
  for (let z = 0; z < H; z++) {
    for (let y = 0; y < N; y++) {
      for (let x = 0; x < M; x++) {
        if (tomatoes[z][y][x] === 1) {
          queue.push(new State(x, y, z, 0));
          isVisited[z][y][x] = true;
        }
      }
    }
  }
  let maxCount = 0;
  while (!queue.isEmpty()) {
    const { x, y, z, count } = queue.pop();
    maxCount = count;
    for (let d = 0; d < 6; d++) {
      const nx = x + dx[d];
      const ny = y + dy[d];
      const nz = z + dz[d];
      if (nz < 0 || nz >= H || ny < 0 || ny >= N || nx < 0 || nx >= M) continue;
      if (tomatoes[nz][ny][nx] === -1) continue;
      if (isVisited[nz][ny][nx]) continue;
      isVisited[nz][ny][nx] = true;
      queue.push(new State(nx, ny, nz, count + 1));
    }
  }
  for (let z = 0; z < H; z++) {
    for (let y = 0; y < N; y++) {
      for (let x = 0; x < M; x++) {
        if (!isVisited[z][y][x] && tomatoes[z][y][x] !== -1) {
          return -1;
        }
      }
    }
  }
  return maxCount;
}

console.log(solution(tomatoes));
