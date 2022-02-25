/*
이해
길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다.
a와 b의 내적을 return 하도록 함수를 작성하시오
이때, a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1]입니다.
(n은 a, b의 길이)

계획
a의 길이만큼 반복문을 돌면서 a[index]*b[index]값을 sum에 더한 뒤 결과를 리턴
*/

const internal = (a, b) => {
  let sum = 0;
  a.forEach((e, i) => {
    sum += e * b[i];
  });
  return sum;
};

test("internal", () => {
  expect(internal([1, 2, 3, 4], [-3, -1, 0, 2])).toBe(3);
});
