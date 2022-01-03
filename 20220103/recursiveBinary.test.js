const recursiveBinary = (N) => {
  conculate(N, (arr = []));
  return parseInt(arr.reverse().join(""));
};

const conculate = (N, arr) => {
  if (N === 1) {
    arr.push(1);
    return;
  }
  const number = N % parseInt(N / 2);
  N = parseInt(N / 2);
  arr.push(number);
  conculate(N, arr);
};

test("recursiveBinary", () => {
  expect(recursiveBinary(11)).toBe(1011);
});
