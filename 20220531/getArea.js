const [input, ...rows] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = parseInt(input.split(" ")[0]);
const M = parseInt(input.split(" ")[1]);

const map = rows.map((e) => e.split(" ").map((i) => parseInt(i)));

const isVisited = Array.from(Array(N), () => Array(M).fill(false));

map.forEach((item) => {
  let start = [item[0], item[1]];
  let end = [item[2], item[3]];
  for (let y = start[1]; y < end[1]; y++) {
    for (let x = start[0]; x < end[0]; x++) {
      isVisited[y][x] = true;
    }
  }
});
// [0,2]~ [4,4]
// [0,2], [1,2],[2,2],[3,2]
// [0,3],[1,3],[2,3],[3,3]
class State {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

const dfs = (x, y, isVisited) => {
  // 완전 탐색 자료구조 - DFS(Stack), BFS(Queue)
  // 앞으로 탐색해야할 상태를 담고 있음
  const stack = [];
  let count = 0;
  // 초기 상태 삽입
  stack.push(new State(x, y));
  // 문제에서 주어진 크기에 따라 방문 검사 배열 정의
  // State가 포함하는 변수의 개수에 따라 차원의 수가 결정됨
  isVisited[y][x] = true;
  // 탐색할 상태가 남아있는 동안 계속 검사
  while (stack.length !== 0) {
    // 현재 방문할 상태
    const { x, y } = stack.pop();

    count += 1;
    // state에 대한 처리
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx < 0 || ny < 0 || nx >= M || ny >= N) {
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

const result = [];
for (let y = 0; y < N; y++) {
  for (let x = 0; x < M; x++) {
    if (isVisited[y][x]) {
      continue;
    }
    result.push(dfs(x, y, isVisited));
  }
}
console.log(result.length);
console.log(result.sort((a, b) => a - b).join(" "));
