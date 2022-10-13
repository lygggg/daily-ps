class State {
  constructor(arr, time) {
    this.arr = arr;
    this.time = time;
  }
}

const delivery = (N, road, K) => {
  const arr = Array(N + 1).fill(Number.MAX_SAFE_INTEGER);
  const lines = Array.from(Array(N + 1), () => []);

  road.forEach((value) => {
    let [a, b, c] = value;
    lines[a].push({ to: b, cost: c });
    lines[b].push({ to: a, cost: c });
  });

  let queue = [{ to: 1, cost: 0 }];
  arr[1] = 0;

  while (queue.length) {
    let { to } = queue.pop();

    lines[to].forEach((next) => {
      if (arr[next.to] > arr[to] + next.cost) {
        arr[next.to] = arr[to] + next.cost;
        queue.push(next);
      }
    });
  }

  return arr.filter((item) => item <= K).length;
};
test("delivery", () => {
  expect(
    delivery(
      5,
      [
        [1, 2, 1],
        [2, 3, 3],
        [5, 2, 2],
        [1, 4, 2],
        [5, 3, 1],
        [5, 4, 2],
      ],
      3
    )
  ).toBe(4);
});
