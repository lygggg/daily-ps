const pathSearch = (n, arr) => {
  let answer = 0;
  let check = Array(n + 1).fill(0);
  let path = Array.from(Array(n + 1), () => Array());
  arr.forEach((e) => {
    path[e[0]].push(e[1]);
  });
  const DFS = (v) => {
    if (v === n) {
      answer += 1;
      return;
    } else {
      for (let i = 0; i <= path[v].length; i++) {
        if (check[path[v][i]] === 0) {
          check[path[v][i]] = 1;
          DFS(path[v][i]);
          check[path[v][i]] = 0;
        }
      }
    }
  };
  check[1] = 1;
  DFS(1);
  return answer;
};

test("pathSearch", () => {
  expect(
    pathSearch(5, [
      [1, 2],
      [1, 3],
      [1, 4],
      [2, 1],
      [2, 3],
      [2, 5],
      [3, 4],
      [4, 2],
      [4, 5],
    ])
  ).toBe(6);
});
