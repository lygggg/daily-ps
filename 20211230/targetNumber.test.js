/*
이해
n개의 음이 아닌 정수가 있다. 이 수를 적절하게 
더하거나 빼서 타겟 넘버를 만들려고한다. 

구해야하는 것
배열안의 수를 적절하게 빼고 계산해서 타겟넘버를
만들수있는 방법의 수

계획
꼬리재귀로 conculate라는 함수를 만들어서 하나는
- 하는 함수를 만들고, 나머지 하나는 + 하는 함수를
만든다. 계속 재귀함수를 호출하면서 slice로
또다른 배열을 만들어주고, numbers배열의
맨 앞 값을 shift해서 conculate프로퍼티 안에있는 sum에 더해준다.
만약 numbers의 길이가 0이 되고, sum의 값과 target의 값이 같을경우 conculate 프로퍼티 안에있는 arr에 sum의 값을 푸쉬한다.
targetNumber함수에서 받아온 arr의 길이를 리턴한다.

*/

const targetNumber = (numbers, target) => {
  const arr = [];
  conculate(numbers, target, arr, 0);
  return arr.length;
};

const conculate = (numbers, target, arr, sum) => {
  if (numbers.length === 0) {
    if (sum === target) {
      arr.push(sum);
    }
    return;
  }
  const number1 = numbers.slice();
  const firstNumber = number1.shift();
  conculate(number1, target, arr, sum - firstNumber);
  conculate(number1, target, arr, sum + firstNumber);
};

test("targetNumber", () => {
  expect(targetNumber([1, 1, 1, 1, 1], 3)).toBe(5);
});
