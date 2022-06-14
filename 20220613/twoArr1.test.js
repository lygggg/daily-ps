const accumulate = (arr) => {
  const acc = [0];
  for (const e of arr) acc.push(e + acc[acc.length - 1]);
  return acc;
};
function sum(arr) {
  let sum = 0;
  for (const e of arr) sum += e;
  return sum;
}

const twoArr1 = (a, b) => {
  const aSum = sum(a); // 12
  const bSum = sum(b); // 18
  if ((aSum + bSum) % 2 === 1) return -1;

  const targetSum = (aSum + bSum) / 2; // 15
  // A에서 B로 얼마를 보내야 하는지.
  const target = aSum - targetSum; // -3
  const acc = accumulate(a);
  const bcc = accumulate(b);
  let ai = 0;
  let bi = 0;
  console.log(acc, bcc);
  while (ai < acc.length && bi < bcc.length) {
    let move = acc[ai] - bcc[bi];
    console.log(move);
    if (move < target) {
      ai++;
    } else if (move > target) {
      bi++;
    } else {
      return ai + bi;
    }
  }
};

test("twoArr1", () => {
  expect(twoArr1([3, 2, 7, 2], [4, 6, 5, 1])).toBe(2);
});
