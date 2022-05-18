class State {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];
const dfs = (grid, x, y, isVisited) => {
  if (isVisited[y][x]) return 0;
  const queue = [];
  queue.push(new State(x, y));
  isVisited[y][x] = true;

  let count = 0;
  while (queue.length !== 0) {
    const { x, y } = queue.pop();
    count += 1;
    for (let d = 0; d < 4; d++) {
      const ny = y + dy[d];
      const nx = x + dx[d];

      if (nx < 0 || ny < 0 || nx >= grid[0].length || ny >= grid.length) {
        continue;
      }
      if (grid[y][x] !== grid[ny][nx]) {
        continue;
      }
      if (isVisited[ny][nx]) {
        continue;
      }
      isVisited[ny][nx] = true;
      queue.push(new State(nx, ny));
    }
  }
  return count;
};

const line = (grid) => {
  let lastCount = 0;
  for (let y = 0; y < grid.length; y++) {
    let count = 0;
    const isVisited = Array.from(Array(grid.length), () =>
      Array(grid[0].length).fill(false)
    );
    for (let x = 0; x < grid[y].length; x++) {
      count += dfs(grid, x, y, isVisited);
    }
    if (lastCount < count) {
      lastCount = count;
    }
  }

  for (let x = 0; x < grid[0].length; x++) {
    let count = 0;
    const isVisited = Array.from(Array(grid.length), () =>
      Array(grid[0].length).fill(false)
    );
    for (let y = 0; y < grid.length; y++) {
      count += dfs(grid, x, y, isVisited);
    }
    if (lastCount < count) {
      lastCount = count;
    }
  }
  return lastCount;
};

test("line", () => {
  expect(
    line([
      ["A", "A", "A", "B", "B"],
      ["A", "C", "C", "B", "B"],
      ["A", "C", "B", "B", "B"],
      ["F", "F", "F", "D", "D"],
      ["A", "A", "A", "A", "D"],
    ])
  ).toBe(22);
});
