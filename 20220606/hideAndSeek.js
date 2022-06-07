const [input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const K = parseInt(input.split(" ")[1]);
const N = parseInt(input.split(" ")[0]);

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
  constructor(x, count) {
    this.x = x;
    this.count = count;
  }
}

const bfs = (N, K) => {
  // 완전 탐색 자료구조 - DFS(Stack), BFS(Queue)
  // 앞으로 탐색해야할 상태를 담고 있음
  const queue = new Queue();
  // 초기 상태 삽입
  queue.push(new State(N, 0));
  // 문제에서 주어진 크기에 따라 방문 검사 배열 정의
  // State가 포함하는 변수의 개수에 따라 차원의 수가 결정됨
  const isVisited = new Array(100001).fill(false);
  isVisited[N] = true;

  // 탐색할 상태가 남아있는 동안 계속 검사
  while (!queue.isEmpty()) {
    // 현재 방문할 상태
    const { x, count } = queue.pop();

    // state에 대한 처리
    if (x === K) {
      return count;
    }

    for (let nx of [x - 1, x + 1, x * 2]) {
      if (nx < 0 || nx > 100000) {
        continue;
      }
      if (isVisited[nx]) {
        continue;
      }

      // 방문 처리
      // 완전 탐색 자료구조에 넣어줬다.
      isVisited[nx] = true;
      queue.push(new State(nx, count + 1));
    }
  }
};

console.log(bfs(N, K));
