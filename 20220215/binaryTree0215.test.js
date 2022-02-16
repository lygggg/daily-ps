const binaryTree = (N) => {
  let number = 1;
  const arr = [];
  const dfs = (number, N, arr) => {
    if (number > N) {
      return arr;
    }
    arr.push(number);
    dfs(number * 2, N, arr);
    dfs(number * 2 + 1, N, arr);
  };
  dfs(number, N, arr);
  return arr;
};

test("binaryTree", () => {
  expect(binaryTree(7)).toEqual([1, 2, 4, 5, 3, 6, 7]);
});
