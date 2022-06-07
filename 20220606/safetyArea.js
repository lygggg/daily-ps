const [input, ...rows] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

class State {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
const map = rows.map((e) => e.split(" ").map((i) => parseInt(i)));
const M = parseInt(input);
const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];
const arr = [];
const dfs = (x, y, isVisited) => {
  // 완전 탐색 자료구조 - DFS(Stack), BFS(Queue)
  // 앞으로 탐색해야할 상태를 담고 있음
  const stack = [new State(x, y)];
  // 초기 상태 삽입
  // 문제에서 주어진 크기에 따라 방문 검사 배열 정의
  // State가 포함하는 변수의 개수에 따라 차원의 수가 결정됨
  isVisited[y][x] = true;

  // 탐색할 상태가 남아있는 동안 계속 검사
  while (stack.length !== 0) {
    // 현재 방문할 상태
    const { x, y } = stack.pop();
    // state에 대한 처리

    for (let d = 0; d < 4; d++) {
      const nx = x + dx[d];
      const ny = y + dy[d];
      if (nx < 0 || ny < 0 || nx >= M || ny >= M) {
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
};
for (let N = 1; N <= 100; N++) {
  let isVisited = Array.from(Array(M), () => Array(M).fill(false));
  let count = 0;
  map.forEach((i, index1) =>
    i.forEach((e, index2) => {
      if (e < N) {
        isVisited[index1][index2] = true;
      }
    })
  );
  for (let y = 0; y < M; y++) {
    for (let x = 0; x < M; x++) {
      if (isVisited[y][x]) {
        continue;
      }
      if (!map[y][x]) {
        continue;
      }
      count += 1;
      dfs(x, y, isVisited);
    }
  }
  arr.push(count);
}
console.log(Math.max(...arr));
