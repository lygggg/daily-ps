const permutaion = (N, M) => {
  const check = Array(N.length).fill(0);
  const arr = Array(N.length - 1).fill(0);
  const result = [];
  const dfs = (depth, N) => {
    if (depth === M) {
      result.push([...arr]);
      return;
    }
    for (let i = 0; i < N.length; i++) {
      if (check[i] == 0) {
        check[i] = 1;
        arr[depth] = N[i];
        dfs(depth + 1, N);
        check[i] = 0;
      }
    }
  };

  dfs(0, N);
  result.push(result.length);
  return result;
};

test("permutaion", () => {
  expect(permutaion([3, 6, 9], 2)).toEqual([
    [3, 6],
    [3, 9],
    [6, 3],
    [6, 9],
    [9, 3],
    [9, 6],
    6,
  ]);
});
