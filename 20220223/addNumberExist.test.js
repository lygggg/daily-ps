/*
이해
0부터 9까지의 숫자 중 일부가 들어가 있는 정수 배열 numbers가 매개변수로 주어집니다.
numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return해라

계획
[0,1,2,3,4,5,6,7,8,9,10] 배열을 만들고 number를 반복문을 돌면서 indexOf로 해당 값이 있는지 확인하고 없으면 sum에 더해준다.
*/

const addNumberExist = (numbers) => {
  let sum = 0;
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  arr.forEach((e, i) => {
    if (numbers.indexOf(e) === -1) {
      sum += e;
    }
  });
  return sum;
};

test("addNumberExist", () => {
  expect(addNumberExist([1, 2, 3, 4, 6, 7, 8, 0])).toBe(14);
});
