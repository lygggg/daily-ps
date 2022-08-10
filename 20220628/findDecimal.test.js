const findDecimal = (numbers) => {
  const set = new Set();
  makeNumbers(set, "", numbers.split(""));
  return set.size;
};

function issosu(num) {
  if (num < 2) return false;
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function makeNumbers(set, cur, nums) {
  const clone = nums.slice().reverse();
  if (nums.length === 0) {
    return;
  }
  nums.forEach((e) => {
    console.log(set, cur, nums);
    const pop = clone.pop();
    const num = Number(cur + pop);
    if (issosu(num)) {
      set.add(num);
    }
    makeNumbers(set, cur + pop, clone);
    clone.unshift(pop);
  });
}
test("findDecimal", () => {
  expect(findDecimal("011")).toBe(2);
});
