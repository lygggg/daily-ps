const sameQueue = (queue1, queue2) => {
  let count = 0;
  const sumQueue = [...queue1, ...queue2];
  const target = sumQueue.reduce((pre, cur) => pre + cur) / 2;
  let ai = 0;
  let bi = queue1.length;
  let sum = sumQueue.slice(ai, bi).reduce((pre, cur) => pre + cur);
  while (sumQueue.length * 3 >= count) {
    if (sum < target) {
      sum += sumQueue[bi];
      bi += 1;
    } else if (sum > target) {
      sum -= sumQueue[ai];
      ai += 1;
    } else if (target === sum) {
      return count;
    }
    count++;
  }
  return -1;
};

test("sameQueue", () => {
  expect(sameQueue([1, 2, 1, 2], [1, 10, 1, 2])).toBe(7);
});
