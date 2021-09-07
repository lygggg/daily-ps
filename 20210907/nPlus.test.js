/*
이해
1부터 N까지의 합 출력하기
자연수 N이 입력되면 1부터 N까지의 자연수 값 합 출력

구해야하는것
1부터 N까지의 자연수 값 출력

계획
reduce로 배열 합 출력
*/
const nPlus = (N) => {
  return new Array(N)
    .fill()
    .map((e, i) => i + 1)
    .reduce((e, i) => e + i);
};

test("nPlus", () => {
  expect(nPlus(10)).toBe(55);
});
