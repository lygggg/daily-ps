/*
이해
1다스는 12자루 학생 1인당 연필 1자루씩 나누어준다고 할 때
N명의 학생수를 입력하면 필요한 연필 다스 수를 계산해라

구해야하는것
필요한 연필 다스 수

계획
학생수 나누기 12 몫 리턴
*/
const pencil = (N) => {
  return Math.ceil(N / 12);
};

test("pencil", () => {
  expect(pencil(178)).toBe(15);
});
