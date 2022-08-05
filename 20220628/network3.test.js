const network = (n, computers) => {
  let count = 0;
  const check = Array(computers.length).fill(0);
  for (let i = 0; i < computers.length; i++) {
    if (!check[i]) {
      check[i] = true;
      dfs(computers[i], computers, check);
      count += 1;
    }
  }
  function dfs(computer, computers, check) {
    const stack = [];
    stack.push(computer);
    while (stack.length !== 0) {
      const state = stack.pop();
      for (let i = 0; i < state.length; i++) {
        if (!state[i]) {
          continue;
        }
        if (check[i]) {
          continue;
        }
        check[i] = true;
        stack.push(computers[i]);
      }
    }
  }
  return count;
};

test("network", () => {
  expect(
    network(3, [
      [1, 1, 0],
      [1, 1, 1],
      [0, 1, 1],
    ])
  ).toBe(1);
});
