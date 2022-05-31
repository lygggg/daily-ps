const [total, input, cnt, ...rows] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");
// console.log(total, input, cnt, rows);

const M = parseInt(total);
const [nx, ny] = input.split(" ");
const x = parseInt(nx) - 1;
const y = parseInt(ny) - 1;
const map = Array.from(Array(M), () => []);

class State {
  constructor(x, count) {
    this.x = x;
    this.count = count;
  }
}

rows
  .map((e) => e.split(" ").map((i) => parseInt(i) - 1))
  .map(([u, v]) => {
    map[u].push(v);
    map[v].push(u);
  });

const dfs = () => {
  const stack = [];
  // 초기 상태 삽입
  stack.push(new State(x, 0));
  // 문제에서 주어진 크기에 따라 방문 검사 배열 정의
  // State가 포함하는 변수의 개수에 따라 차원의 수가 결정됨
  const isVisited = new Array(M).fill(false);
  isVisited[x] = true;
  // 탐색할 상태가 남아있는 동안 계속 검사
  while (stack.length !== 0) {
    // 현재 방문할 상태
    const { x, count } = stack.pop();

    // state에 대한 처리
    if (x === y) {
      return count;
    }
    for (const nextState of map[x]) {
      if (isVisited[nextState]) {
        continue;
      }

      // 방문 처리
      // 완전 탐색 자료구조에 넣어줬다.
      isVisited[nextState] = true;
      stack.push(new State(nextState, count + 1));
    }
  }
};
if (!dfs()) {
  console.log(-1);
} else {
  console.log(dfs());
}
