let fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim();

const N = parseInt(input);

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
  constructor(N, count) {
    this.N = N;
    this.count = count;
  }
}

// 12/3 4, 4/2 2, 2/2 1

const makeOne = (N) => {
  // 완전 탐색 자료구조 - DFS(queue), BFS(Queue)
  // 앞으로 탐색해야할 상태를 담고 있음
  const queue = new Queue();
  // 초기 상태 삽입
  queue.push(new State(N, 0));
  // 문제에서 주어진 크기에 따라 방문 검사 배열 정의
  // State가 포함하는 변수의 개수에 따라 차원의 수가 결정됨
  const isVisited = new Array(1000001).fill(false);
  isVisited[N] = true;

  // 탐색할 상태가 남아있는 동안 계속 검사
  while (!queue.isEmpty()) {
    // 현재 방문할 상태
    const { N, count } = queue.pop();
    // state에 대한 처리
    if (N === 1) {
      return count;
    }

    for (let i = 3; i > 0; i--) {
      const nextState = i > 1 ? N / i : N - 1;

      if (nextState <= 0 || nextState > 1000000) {
        continue;
      }
      if (!Number.isInteger(nextState)) {
        continue;
      }
      if (isVisited[nextState]) {
        continue;
      }

      // 방문 처리
      // 완전 탐색 자료구조에 넣어줬다.
      isVisited[nextState] = true;
      queue.push(new State(nextState, count + 1));
    }
  }
};

console.log(makeOne(N));
