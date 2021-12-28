/*
이해
배열의 맨 앞부터 바로 뒤에 있는 학생의 키가 크면 카운트를 증가해야한다.

구해야하는것
선생님이 볼수 있는 최대  학생 수

계획
반복문으로 돌면서 내 뒤 자리가 더 크면 카운트 증가후 리턴
*/

const visibleStudent = (students) => {
  let count = 0;
  let tall = students[0] - 1;
  students.forEach((e) => {
    if (tall < e) {
      count++;
      tall = e;
    }
  });
  return count;
};

test("visibleStudnet", () => {
  expect(visibleStudent([130, 135, 148, 140, 145, 150, 150, 153])).toBe(5);
});
