const immigration = (n, times) => {
  let left = 0;
  let right = Math.max(...times) * n;
  while (left <= right) {
    const mid = Math.floor((right + left) / 2);
    let count = 0;
    for (e of times) {
      count += Math.floor(mid / e);
    }

    if (count >= n) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
};

test("immigration", () => {
  expect(immigration(6, [7, 10])).toBe(28);
});
