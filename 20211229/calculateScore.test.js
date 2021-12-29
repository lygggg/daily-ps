const calculateScore = (arr) => {
  let count = 0;
  let score = 0;
  arr.forEach((e) => {
    if (e === 1) {
      count += 1;
      score += count;
    }
    if (e === 0) {
      count = 0;
    }
  });
  return score;
};

test("calculateScore", () => {
  expect(calculateScore([1, 0, 1, 1, 1, 0, 0, 1, 1, 0])).toBe(10);
});
