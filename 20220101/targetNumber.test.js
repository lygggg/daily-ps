/*
이해
배열에 있는 수를 빼거나 합해서 결과값이 target
인 개수를 구해야한다. 
구해야하는 것
배열에 있는 수를 빼거나 합해서 결과값이 target
인 개수를 구해야한다.
계획
꼬리재귀를 사용해서 하나는 - 다른 하나는 + 하는
함수를 만들고 만약 값이  target과 같으면
*/

const targetNumber = (numbers, target) => {
  const arr = [];
  conculate(numbers, target, arr, 0);
  return arr.length;
};

const conculate = (numbers, target, arr, sum) => {
  if (numbers.length === 0) {
    if (sum === target) {
      arr.push(target);
    }
    return;
  }
  const numbers1 = numbers.slice();
  const firstNumber = numbers1.shift();
  conculate(numbers1, target, arr, sum - firstNumber);
  conculate(numbers1, target, arr, sum + firstNumber);
};

test("targetNumber", () => {
  expect(targetNumber([1, 1, 1, 1, 1], 3)).toBe(5);
});
