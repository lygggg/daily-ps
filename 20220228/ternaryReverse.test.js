/*
이해
자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시
10진법으로 표현한 수를 return 하도록 함수를 작성하시오.

계획
n을 3진법으로 변경한후 reverse하고 다시 10진법으로 변경한후 리턴한다.

*/

const ternaryReverse = (n) => {
  return parseInt(n.toString(3).split("").reverse().join(""), 3);
};

test("ternaryReverse", () => {
  expect(ternaryReverse(45)).toBe(7);
});
