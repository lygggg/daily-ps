const [input, ...row] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const M = parseInt(input.split(" ")[0]);

const map = row.map((e) => e.split(" ").map((i) => parseInt(i) - 1));

const list = Array.from(Array(M), () => []);
map.map(([u, v]) => {
  list[u].push(v);
  list[v].push(u);
});

const isVisited = new Array(M).fill(false);

const dfs = (i, M, list) => {
  const stack = [i];
  // 문제에서 주어진 크기에 따라 방문 검사 배열 정의
  // State가 포함하는 변수의 개수에 따라 차원의 수가 결정됨
  isVisited[i] = true;

  // 탐색할 상태가 남아있는 동안 계속 검사
  while (stack.length !== 0) {
    // 현재 방문할 상태
    const state = stack.pop();

    // state에 대한 처리

    for (const nextState of list[state]) {
      if (isVisited[nextState]) {
        continue;
      }

      // 방문 처리
      // 완전 탐색 자료구조에 넣어줬다.
      isVisited[nextState] = true;
      stack.push(nextState);
    }
  }
};

let count = 0;

for (let i = 1; i <= M; i++) {
  if (isVisited[i - 1]) {
    continue;
  }
  dfs(i - 1, M, list);
  count += 1;
}
console.log(count);
