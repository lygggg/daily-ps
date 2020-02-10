const getMinNumber = (A, B) => {
  let count = 0;

  const max = A.sort(function(a, b) {
    return a - b;
  });
  
  const min = B.sort(function(a, b) {
    return b - a;
  });

  for (let i = 0; i < max.length; i++) {
    count += max[i] * min[i];
  }
  return count;
};

test("getMinNumber", () => {
  expect(getMinNumber([1, 4, 2], [5, 4, 4])).toBe(29);
});
