/*
이해
정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를
뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 리턴하는 함수를 작성하시오

계획
이중 반복문으로 완전탐색을 돌면서 합한값을 배열에 넣고 중복제거후 오름차순으로 정렬
*/

const pickTwoSum = (numbers) => {
  const arr = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      arr.push(numbers[i] + numbers[j]);
    }
  }
  return [...new Set(arr)].sort((a, b) => a - b);
};

test("pickTwoSum", () => {
  expect(pickTwoSum([2, 1, 3, 4, 1])).toEqual([2, 3, 4, 5, 6, 7]);
  expect(pickTwoSum([5, 0, 2, 7])).toEqual([2, 5, 7, 9, 12]);
});
