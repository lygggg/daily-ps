const [input, ...rows] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = parseInt(input.split(" ")[0]);
const M = parseInt(input.split(" ")[1]);

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
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];
const bfs = (x, y, map, isVisited, map1) => {
  // 완전 탐색 자료구조 - DFS(Stack), BFS(Queue)
  // 앞으로 탐색해야할 상태를 담고 있음
  const queue = new Queue();
  // 초기 상태 삽입
  queue.push(new State(x, y));
  // 문제에서 주어진 크기에 따라 방문 검사 배열 정의
  // State가 포함하는 변수의 개수에 따라 차원의 수가 결정됨
  isVisited[y][x] = true;

  // 탐색할 상태가 남아있는 동안 계속 검사
  while (!queue.isEmpty()) {
    // 현재 방문할 상태
    const { x, y } = queue.pop();

    // state에 대한 처리

    for (let d = 0; d < 4; d++) {
      const nx = x + dx[d];
      const ny = y + dy[d];
      if (nx < 0 || ny < 0 || ny >= N || nx >= M) {
        continue;
      }
      if (!map[ny][nx]) {
        if (map1[y][x] > 0) {
          map1[y][x] -= 1;
        }
        continue;
      }
      if (isVisited[ny][nx]) {
        continue;
      }
      // 방문 처리
      // 완전 탐색 자료구조에 넣어줬다.
      isVisited[ny][nx] = true;
      queue.push(new State(nx, ny));
    }
  }
};

let map = rows.map((i) => i.split(" ").map((e) => parseInt(e)));
let result = 0;
let i = 0;
while (true) {
  let count = 0;
  let map1 = JSON.parse(JSON.stringify(map));
  const isVisited = Array.from(Array(N), () => Array(M).fill(false));
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
      if (map[y][x] <= 0) {
        continue;
      }
      if (isVisited[y][x]) {
        continue;
      }
      count += 1;
      bfs(x, y, map, isVisited, map1);
    }
  }
  if (count >= 2) {
    result = i;
    break;
  }
  map = map1;
  i += 1;
  let ice = 0;
  map.forEach((i) =>
    i.forEach((e) => {
      if (e === 0) {
        ice += 1;
      }
    })
  );
  if (ice === M * N) {
    break;
  }
}
console.log(result);
