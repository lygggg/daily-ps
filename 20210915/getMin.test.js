const getMin = (N) => {
  return Math.min(...N);
};

test("getMin", () => {
  expect(getMin([5, 3, 7, 11, 2, 15, 17])).toBe(2);
});
