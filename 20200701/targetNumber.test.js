/*
이해

n개의 음이 아닌 정수가 있다. 이 수를 적절히 더하거나 빼서 타겟 넘버를 만들려고 합니다. 예를 들어 [1,1,1,1,1]로 숫자 3을 만들려면
다음 다섯 방법을 쓸 수 있습니다.
숫자가 담긴 배열 numbers 안에있는 원소들을 더하거나 빼서  target값을 만들어라.

구해야하는 것

numbers안에 원소들을 더하거나 빼서 target을 만들 수 있는 방법의 갯수를 리턴하라.

계획

numbers 배열의 첫번째부터 마지막까지 재귀함수를 돌려서 배열에 넣고,
그배열에서 타겟과 같은 수의 갯수를 리턴한다.
*/

const targetNumber = (numbers, target) => {
  const arr = [];
  Computation(numbers, arr, 0);
  return arr.filter((e) => e == target).length;
};

const Computation = (numbers, arr, acc) => {
  const arr1 = numbers.slice();
  if (arr1.length == 0) {
    arr.push(acc);
    return;
  }

  const firstNumber = arr1.pop();

  Computation(arr1, arr, acc + firstNumber);
  Computation(arr1, arr, acc - firstNumber);
};

test("target", () => {
  expect(targetNumber([1, 1, 1, 1, 1], 3)).toBe(5);
});
