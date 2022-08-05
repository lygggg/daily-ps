const targetNumber1 = (numbers, target) => {
  let count = 0;
  let depth = 0;

  function dfs(numbers, depth, sum) {
    if (depth === numbers.length) {
      if (sum === target) {
        count += 1;
        return;
      } else {
        return;
      }
    }
    dfs(numbers, depth + 1, sum + numbers[depth]);
    dfs(numbers, depth + 1, sum - numbers[depth]);
  }
  dfs(numbers, depth, 0);
  return count;
};

test("targetNumber1", () => {
  expect(targetNumber1([1, 1, 1, 1, 1], 3)).toBe(5);
});
