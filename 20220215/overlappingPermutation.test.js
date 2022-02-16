const overlappingPermutation = (N, M) => {
  let arr = Array(M).fill(0);
  let check = [...arr];

  const dfs = (depth, result) => {
    if (M === depth) {
      result.push([...check]);
      return;
    } else {
      for (let i = 1; i <= N; i++) {
        check[depth] = i;
        dfs(depth + 1, result);
      }
    }
  };
  dfs(0, (result = []));
  result.push(result.length);
  return result;
};

test("overlappingPermutaion", () => {
  expect(overlappingPermutation(3, 2)).toEqual([
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
