class State {
  constructor(arr, time, isVisited) {
    this.arr = arr;
    this.time = time;
    this.isVisited = isVisited;
  }
}

const delivery = (N, road, K) => {
  const result = new Set();
  const list = Array.from(Array(N), () => []);
  road.map(([u, v, time]) => {
    list[u - 1].push([v - 1, time]);
    list[v - 1].push([u - 1, time]);
  });

  const dfs = (arr, list) => {
    // 완전 탐색 자료구조 - DFS(Stack), BFS(Queue)
    // 앞으로 탐색해야할 상태를 담고 있음
    const stack = [];
    const isVisited = Array(N).fill(0);
    isVisited[0] = true;
    // 초기 상태 삽입
    stack.push(new State(arr, 0, isVisited));
    // 문제에서 주어진 크기에 따라 방문 검사 배열 정의
    // State가 포함하는 변수의 개수에 따라 차원의 수가 결정됨

    // 탐색할 상태가 남아있는 동안 계속 검사
    while (stack.length !== 0) {
      // 현재 방문할 상태
      const { arr, time, isVisited } = stack.pop();
      // state에 대한 처리
      for (const nextState of arr) {
        if (isVisited[nextState[0]]) {
          continue;
        }
        if (time + nextState[1] <= K) {
          result.add(nextState[0]);
        } else {
          continue;
        }
        // 방문 처리
        // 완전 탐색 자료구조에 넣어줬다.
        const copyIsVisited = isVisited.slice();
        copyIsVisited[nextState[0]] = true;
        stack.push(
          new State(list[nextState[0]], time + nextState[1], copyIsVisited)
        );
      }
    }
  };

  dfs(list[0], list);
  return result.size + 1;
};
test("delivery", () => {
  expect(
    delivery(
      6,
      [
        [1, 2, 1],
        [1, 3, 2],
        [2, 3, 2],
        [3, 4, 3],
        [3, 5, 2],
        [3, 5, 3],
        [5, 6, 1],
      ],
      4
    )
  ).toBe(4);
});
