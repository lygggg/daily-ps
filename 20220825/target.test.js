const target = (numbers, target) => {
  let sum = 0;
  let depth = 0;
  let count = 0;
  const dfs = (sum, depth) => {
    if (depth === numbers.length) {
      if (sum === target) {
        return (count += 1);
      }
      return;
    }
    dfs(sum + numbers[depth], depth + 1);
    dfs(sum - numbers[depth], depth + 1);
  };
  dfs(sum, depth);
  return count;
};

test("target", () => {
  expect(target([1, 1, 1, 1, 1], 3)).toBe(5);
});
