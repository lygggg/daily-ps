const subset = (N) => {
  const number = 1;
  const result = [];
  const check = Array(N).fill(0);
  const dfs = (number, depth, result) => {
    const arr = [];
    if (depth === N) {
      for (let i = 0; i <= N; i++) {
        if (check[i] == 1) {
          arr.push(i + 1);
        }
      }
      result.push(arr);
      return;
    }
    check[depth] = 1;
    dfs(number, depth + 1, result);
    check[depth] = 0;
    dfs(number, depth + 1, result);
  };

  dfs(number, 0, result);
  result.pop();
  return result;
};

test("subest", () => {
  expect(subset(3)).toEqual([[1, 2, 3], [1, 2], [1, 3], [1], [2, 3], [2], [3]]);
});
