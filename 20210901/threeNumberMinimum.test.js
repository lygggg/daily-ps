const threeNumberMinimum = (a, b, c) => {
  return Math.min(a, b, c);
};

test("camouflage", () => {
  expect(threeNumberMinimum(6, 5, 11)).toBe(5);
});
