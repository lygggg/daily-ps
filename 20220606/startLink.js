const [input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const arr = input.split(" ");
const F = parseInt(arr[0]);
const S = parseInt(arr[1]);
const G = parseInt(arr[2]);
const U = parseInt(arr[3]);
const D = parseInt(arr[4]);

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

const bfs = () => {
  // 완전 탐색 자료구조 - DFS(Stack), BFS(Queue)
  // 앞으로 탐색해야할 상태를 담고 있음
  const queue = new Queue();
  // 초기 상태 삽입
  queue.push(new State(S, 0));
  // 문제에서 주어진 크기에 따라 방문 검사 배열 정의
  // State가 포함하는 변수의 개수에 따라 차원의 수가 결정됨
  const isVisited = new Array(F + 1).fill(false);
  isVisited[S] = true;

  // 탐색할 상태가 남아있는 동안 계속 검사
  while (!queue.isEmpty()) {
    // 현재 방문할 상태
    const { x, count } = queue.pop();

    // state에 대한 처리
    if (x === G) {
      return count;
    }
    for (const nextState of [x + U, x - D]) {
      if (nextState < 1 || nextState > 1000000 || nextState > F) {
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
  return "use the stairs";
};
console.log(bfs());
