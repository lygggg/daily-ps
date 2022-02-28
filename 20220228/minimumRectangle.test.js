/*
이해
명합 지갑을 만드는 회사에서 지갑의 크기를 정하려고 합니다. 다양한 모양과 크기의
명함들을 모두 수납할 수 있으면서, 작아서 들고 다니기 편한 지갑을 만들어야 합니다.
이러한 요건을 만족하는 지갑을 만들기 위해 디자인팀은 모든 명함의 가로 길이와
세로 길이를 조사했습니다. 가로의 길이 세로의 길이가 담긴 명함의 배열이 주어지고,
1  60  50
2  30  70
3  60  30
4  80  40
가장 긴 가로 세로의 길이가 각각 80 70 이기때문에 80 x 70의 크기를 가진 지갑을 생산하면
모든 명함들을 넣을 순 있지만 2번 명함을 뒤집으면 80 x 50의 크기를 가진 지갑을 생산할 수 있습니다.
모든 명함을 수납할 수 있는 가장 작은 지갑의 크기를 리턴하는 함수를 작성하세요.

계획
가로길이, 세로길이중 가장 큰 것들을 배열을 생성하고, 반복문을 돌면서
만약 해당 값들이 가장 큰 배열들과 같은 값이 있다면 위치를 reverse해보고 만약 revese한 값이
가장 큰 배열보다 작으면 reverse 값을 적용해주고 다시 큰수 배열 재 생성해도록하고, 다시 반복문
처음으로 돌아가서 반복진행 그후 결과를 리턴

아쉬운점
이 문제를 풀면서 아쉬운점이 있었다. ㅋㅋㅋ 나는 문제가 제시한 요구를 차례대로
정리하고 계획을 세워서 코드를 작성했는데, 결국 리턴하는 값이 중요한것... 너무 과정에 집착한
느낌이다.
*/

const minimumRectangle = (sizes) => {
  let maxArr = getMaxArr(sizes);
  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] === maxArr[0] || sizes[i][1] === maxArr[1]) {
      if (sizes[i][1] < maxArr[0] && sizes[i][0] <= maxArr[1]) {
        sizes[i] = sizes[i].reverse();
        maxArr = getMaxArr(sizes);
        i = -1;
      }
    }
  }
  return maxArr[0] * maxArr[1];
};

const getMaxArr = (arr) => {
  const maxLeftArr = [];
  const maxRightArr = [];
  arr.forEach((e) => {
    maxLeftArr.push(e[0]);
    maxRightArr.push(e[1]);
  });
  return [Math.max(...maxLeftArr), Math.max(...maxRightArr)];
};

test("minimumRectangle", () => {
  expect(
    minimumRectangle([
      [60, 50],
      [30, 70],
      [60, 30],
      [80, 40],
    ])
  ).toBe(4000);
  expect(
    minimumRectangle([
      [10, 7],
      [12, 3],
      [8, 15],
      [14, 7],
      [5, 15],
    ])
  ).toBe(120);
});

test("getMaxArr", () => {
  expect(
    getMaxArr([
      [60, 50],
      [30, 70],
      [60, 30],
      [80, 40],
    ])
  ).toEqual([80, 70]);
});
