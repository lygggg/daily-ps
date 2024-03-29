const overlappingPermutaion0218 = (N, M) => {
  const arr = Array(N - 1).fill(0);
  const result = [];
  const dfs = (depth, N) => {
    if (depth === M) {
      result.push([...arr]);
      return;
    }
    for (let i = 0; i < N; i++) {
      arr[depth] = i + 1;
      dfs(depth + 1, N);
    }
  };
  dfs(0, N);
  result.push(result.length);
  return result;
};

test("overlappingPermutaion0218", () => {
  expect(overlappingPermutaion0218(3, 2)).toEqual([
    [1, 1],
    [1, 2],
    [1, 3],
    [2, 1],
    [2, 2],
    [2, 3],
    [3, 1],
    [3, 2],
    [3, 3],
    9,
  ]);
});
