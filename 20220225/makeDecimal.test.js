const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
};

const makeDecimal = (nums) => {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let l = j + 1; l < nums.length; l++) {
        if (isPrime(nums[i] + nums[j] + nums[l])) {
          count += 1;
        }
      }
    }
  }
  return count;
};

test("makeDecimal", () => {
  expect(makeDecimal([1, 2, 3, 4])).toBe(1);
});
