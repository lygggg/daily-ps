const stoneBridge = (N) => {
  let sum = 0;
  let count = 0;
  const dfs = (sum) => {
    if (sum >= N) {
      count += 1;
      sum = 0;
      return;
    }
    dfs(sum + 1);
    dfs(sum + 2);
  };
  dfs(sum);
  return count;
};

test("stoneBridge", () => {
  expect(stoneBridge(7)).toBe(34);
});
