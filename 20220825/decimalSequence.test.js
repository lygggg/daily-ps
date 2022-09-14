/*

 */
function isPrime(num) {
  if (num === 1 || num === 0) {
    return false;
  } else if (num === 2) {
    return true;
  } else {
    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
}

const decimalSequence = (n, k) => {
  const sequence = n.toString(k).split("0");
  let count = 0;
  for (num of sequence) {
    if (isPrime(Number(num))) count += 1;
  }
  return count;
};

test("decimalSequence", () => {
  expect(decimalSequence(437674, 3)).toBe(3);
});
