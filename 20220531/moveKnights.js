const [total, ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

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

const dx = [-1, -2, -2, -1, 1, 2, 2, 1];
const dy = [-2, -1, 1, 2, 2, 1, -1, -2];
const bfs = (size, S, N) => {
  const [Sx, Sy] = S;
  const [Nx, Ny] = N;
  // 완전 탐색 자료구조 - DFS(Stack), BFS(Queue)
  // 앞으로 탐색해야할 상태를 담고 있음
  const queue = new Queue();
  // 초기 상태 삽입
  queue.push(new State(Sx, Sy, 0));
  // 문제에서 주어진 크기에 따라 방문 검사 배열 정의
  // State가 포함하는 변수의 개수에 따라 차원의 수가 결정됨
  const isVisited = Array.from(Array(size), () => Array(size).fill(false));
  isVisited[Sy][Sx] = true;

  // 탐색할 상태가 남아있는 동안 계속 검사
  while (!queue.isEmpty()) {
    // 현재 방문할 상태
    const { x, y, count } = queue.pop();
    // state에 대한 처리
    if (x === Nx && y === Ny) {
      return count;
    }
    for (let d = 0; d < 8; d++) {
      const nx = x + dx[d];
      const ny = y + dy[d];
      if (nx < 0 || ny < 0 || nx >= size || ny >= size) {
        continue;
      }
      if (isVisited[ny][nx]) {
        continue;
      }

      // 방문 처리
      // 완전 탐색 자료구조에 넣어줬다.
      isVisited[ny][nx] = true;
      queue.push(new State(nx, ny, count + 1));
    }
  }
};

for (let i = 0; i < total; i++) {
  const index = i * 3;
  const size = parseInt(input[index]);
  const S = input[index + 1].split(" ").map((e) => parseInt(e));
  const N = input[index + 2].split(" ").map((e) => parseInt(e));
  console.log(bfs(size, S, N));
}
