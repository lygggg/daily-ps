/*
이해
두 정수 left와 right가 매개변수로 주어집니다. left부터 right 까지의 모든 수들
중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀수를 리턴

계획
left부터 right까지의 수를 배열에 넣고, 반복문으로 해당 값의 약수의 개수가
짝수면 sum에 더하고 홀수면 빼서 결과를 리턴한다.
*/

const divisorNumber = (left, right) => {
  let sum = 0;
  const arr = Array(right + 1 - left)
    .fill()
    .map((e, i) => left + i);

  arr.forEach((e, i) => {
    if (getDivisor(e) % 2 === 0) {
      sum += e;
      return;
    }
    sum -= e;
    return;
  });

  return sum;
};

const getDivisor = (number) => {
  let count = 0;
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      count += 1;
    }
  }
  return count;
};

test("divisorNumber", () => {
  expect(divisorNumber(13, 17)).toBe(43);
});

test("getDivisor", () => {
  expect(getDivisor(13)).toBe(2);
});
