/*
이해
A와 B의 정보가 담긴 배열을 받는다. 
1은 가위 2는 바위 3은 보
이기는 사람을 배열에 출력한다.
구해야하는 것
가위바위보 결과가 담긴 배열
계획
반복문으로 가위바위보 조건문으로 비교하고 결과를 리턴
*/
const rockPaperScissors = (arr1, arr2) => {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] == arr2[i]) {
      result.push("D");
      continue;
    }
    if (arr1[i] == 1 && arr2[i] == 3) {
      result.push("A");
      continue;
    }
    if (arr1[i] == 2 && arr2[i] == 1) {
      result.push("A");
      continue;
    }
    if (arr1[i] == 3 && arr2[i] == 2) {
      result.push("A");
      continue;
    } else {
      result.push("B");
    }
  }
  return result;
};

test("rockPaperScissors", () => {
  expect(rockPaperScissors([2, 3, 3, 1, 3], [1, 1, 2, 2, 3])).toEqual([
    "A",
    "B",
    "A",
    "B",
    "D",
  ]);
});
