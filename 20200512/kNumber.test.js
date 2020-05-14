/*
이해
배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때
 k번째에 있는 수를 구하려고 합니다.
배열 array, [i,j,k]를 원소로 가진 2차원 배열
commands가 매개벼수로 주어질 때
모든 연산을 한 결과를 배열에 담아 리턴해라.

구해야하는 것
commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return

계획
commands를 forEach 돌면서
array를 e[0]부터 e[1]까지 자른후
e[3]의 값을 구하라.
*/

const kNumber = (array, commands) => {
  return commands.map(
    (e) => array.slice(e[0] - 1, e[1]).sort((a, b) => a - b)[e[2] - 1]
  );
};

test("kNumber", () => {
  expect(
    kNumber(
      [1, 5, 2, 6, 3, 7, 4],
      [
        [2, 5, 3],
        [4, 4, 1],
        [1, 7, 3],
      ]
    )
  ).toEqual([5, 6, 3]);
});
