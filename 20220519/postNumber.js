const [input, ...rows] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = parseInt(input);
class State {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const map = rows.map((e) => e.split("").map((i) => parseInt(i)));

const dfs = (x, y, N, map, isVisited) => {
  const stack = [new State(x, y)];
  isVisited[y][x] = true;
  let count = 0;
  while (stack.length !== 0) {
    // 현재 방문할 상태
    const { x, y } = stack.pop();

    // state에 대한 처리
    count += 1;

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (ny < 0 || nx < 0 || ny >= N || nx >= N) {
        continue;
      }
      if (map[ny][nx] === 0) {
        continue;
      }
      if (isVisited[ny][nx]) {
        continue;
      }

      // 방문 처리
      // 완전 탐색 자료구조에 넣어줬다.
      isVisited[ny][nx] = true;
      stack.push(new State(nx, ny));
    }
  }
  return count;
};

const isVisited = Array.from(Array(N), () => Array(N).fill(false));
let result = [];
for (let y = 0; y < N; y++) {
  for (let x = 0; x < N; x++) {
    if (map[y][x] !== 1 || isVisited[y][x]) continue;
    result.push(dfs(x, y, N, map, isVisited));
  }
}
result.sort((a, b) => a - b);
result.unshift(result.length);
result.forEach((e) => console.log(e));
