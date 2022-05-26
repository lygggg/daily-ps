const [input, ...rows] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [Ns, Ms, Vs] = input.split(" ");
const N = parseInt(Ns);
const V = parseInt(Vs) - 1;

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

const map1 = Array.from(Array(N), () => []);
const map2 = Array.from(Array(N), () => []);
rows
  .map((e) => e.split(" ").map((i) => parseInt(i) - 1))
  .forEach(([u, v]) => {
    map1[u].push(v);
    map1[v].push(u);
    map2[u].push(v);
    map2[v].push(u);
  });
map1.map((e) => e.sort((a, b) => b - a));
map2.map((e) => e.sort((a, b) => a - b));

const dfs = (N, V, map) => {
  const result = [];
  // 완전 탐색 자료구조 - DFS(Stack), BFS(Queue)
  // 앞으로 탐색해야할 상태를 담고 있음
  const stack = [];
  // 초기 상태 삽입
  stack.push(V);
  // 문제에서 주어진 크기에 따라 방문 검사 배열 정의
  // State가 포함하는 변수의 개수에 따라 차원의 수가 결정됨
  const isVisited = new Array(N).fill(false);
  // isVisited[V] = true;

  // 탐색할 상태가 남아있는 동안 계속 검사
  while (stack.length !== 0) {
    // 현재 방문할 상태
    const state = stack.pop();

    if (isVisited[state]) continue;
    isVisited[state] = true;

    // state에 대한 처리
    result.push(state + 1);
    for (const nextState of map[state]) {
      if (isVisited[nextState]) {
        continue;
      }
      // 방문 처리
      // 완전 탐색 자료구조에 넣어줬다.
      // isVisited[nextState] = true;
      stack.push(nextState);
    }
  }
  return result;
};

const bfs = (N, V, map) => {
  const result = [];
  const queue = new Queue();
  queue.push(V);
  const isVisited = new Array(N).fill(false);

  while (!queue.isEmpty()) {
    const state = queue.pop();

    if (isVisited[state]) continue;
    isVisited[state] = true;

    result.push(state + 1);
    for (const nextState of map[state]) {
      if (isVisited[nextState]) {
        continue;
      }
      queue.push(nextState);
    }
  }
  return result;
};

console.log(dfs(N, V, map1).join(" "));
console.log(bfs(N, V, map2).join(" "));
