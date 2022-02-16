const recursive = (N) => {
  let number = 0;
  dfs(N, number, (arr = []));
  return arr;
};

const dfs = (N, number, arr) => {
  if (number === N) {
    return;
  }
  number += 1;
  arr.push(number);
  dfs(N, number, arr);
};

test("recursive", () => {
  expect(recursive(3)).toEqual([1, 2, 3]);
});
