/*
이해
한개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출력하시오.

구해야하는 것
문자열s의 각 문자가 문자 t와 떨어진 최소거리

계획
해당 문자열을 반복문을 두개를 하나씩 나눠돌려서 하나는 오른쪽 하나는 왼쪽 걸리는 길이를 각자의 배열에 담고 두 배열을 비교후 작은 값 리턴
teachermode
teachermode
*/

const shortestDistance = (words, word) => {
  const leftResult = [];
  const rightResult = [];
  for (let i = 0; i < words.length; i++) {
    let count = 0;
    for (let j = i; j < words.length; j++) {
      if (words[j] === word) {
        leftResult.push(count);
        break;
      }
      count += 1;
    }
  }

  for (let i = words.length - 1; i > 0; i--) {
    let count = 0;
    for (let j = i; j > 0; j--) {
      if (words[j] === word) {
        rightResult.push(count);
        break;
      }
      count += 1;
    }
  }
  rightResult.push(leftResult[0]);
  rightResult.reverse();
  const result = rightResult.map((e, i) => {
    console.log(e, leftResult[i]);
    if (e > leftResult[i]) {
      return leftResult[i];
    }
    return e;
  });

  return result;
};

test("shortestDistance", () => {
  expect(shortestDistance("teachermode", "e")).toEqual([
    1, 0, 1, 2, 1, 0, 1, 2, 2, 1, 0,
  ]);
});
