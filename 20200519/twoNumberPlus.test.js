/*
이해
두 정수 a, b가 주어졌다.

구해야하는것
a와 b 사이에 속한 모든 정수의 합을 리턴해라.

계획
a에서부터 b까지의 배열을 만든 후 forEach로 배열 전체를 합해준다.
*/

const twoNumberPlus = (a, b) => {
  let answer = 0;

  if (a < b) {
    for (let i = a; i <= b; i++) {
      answer += i;
    }
    return answer;
  } else {
    for (let i = b; i <= a; i++) {
      answer += i;
    }
    return answer;
  }
};

test("twoNumberPlus", () => {
  // expect(twoNumberPlus(3, 5)).toBe(12)
  expect(twoNumberPlus(5, 3)).toBe(12);
});
