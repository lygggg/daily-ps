const sameQueue = (queue1, queue2) => {
  let sum1 = queue1.reduce((a, b) => a + b);
  let sum2 = queue2.reduce((a, b) => a + b);
  const sumQueue = (sum1 + sum2) / 2;
  let count = 0;
  const max1 = queue1.length;
  const max2 = queue2.length;
  let queue1Index = 0;
  let queue2Index = 0;

  while (queue1Index < max1 || queue2Index < max2) {
    if (sum1 > sumQueue) {
      const poped = queue1[queue1Index];
      queue2.push(poped);
      queue1Index += 1;
      sum1 -= poped;
      count += 1;
    } else if (sum1 < sumQueue) {
      const poped = queue2[queue2Index];
      queue1.push(poped);
      queue2Index += 1;
      sum1 += poped;
      count += 1;
    }
    if (sum1 === sumQueue) {
      return count;
    }
  }
  return -1;
};

test("sameQueue", () => {
  expect(sameQueue([1, 1], [1, 5])).toBe(-1);
});
