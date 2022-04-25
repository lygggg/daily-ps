/*

*/
const network2 = (computers) => {
  let count = 0;
  const isVisited = new Array(computers.length).fill(false);
  for (let computer = 0; computer < computers.length; computer++) {
    if (isVisited[computer]) {
      continue;
    }
    isVisited[computer] = true;
    dfs(computer, computers, isVisited);
    count += 1;
  }
  return count;
};

const dfs = (initcomputer, computers, isVisited) => {
  const stack = [initcomputer];

  // 탐색할 상태가 남아있는 동안 계속 검사
  while (stack.length !== 0) {
    // 현재 방문할 상태
    const state = stack.pop();

    for (let nextState = 0; nextState < computers[state].length; nextState++) {
      if (computers[state][nextState] === 0 || state === nextState) {
        continue;
      }
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

test("network2", () => {
  expect(
    network2([
      [1, 1, 0],
      [1, 1, 0],
      [0, 0, 1],
    ])
  ).toBe(2);
});
