/*
이해
5*5dml 격자판이 주어진다. 각 행의 합, 각 열의 합,
두 대각선의 합 중 가장 큰 합을 출력해라.

구해야하는 것
각 행의합, 각 열의 합, 두 대각선의 합중 가장 큰것

계획
일단 배열을 만들고 이중 for문으로 각 행의 합 계산할때마다 푸쉬
이중 for문으로 각 열 계산할떄마다 푸쉬
이중 for문으로 돌면서 같은 두개의 원소가 같은 값끼리
같을때 합해서 리턴
이중포문 첫번째 for문 숫자를 뒤에서부터 같으면 합해서
리턴한다. 배열에서 가장 큰값 리턴
*/
const MaxSumPlate = (plates) => {
  const rowArr = [];
  const columnArr = [];
  const diagonalArr = [];
  const diagonalReversArr = [];
  let rowsum = 0;
  let columnSum = 0;
  let diagonalSum = 0;
  let diagonalReversSum = 0;

  for (let i = 0; i < plates.length; i++) {
    for (let j = 0; j < plates.length; j++) {
      rowsum += plates[i][j];
      columnSum += plates[j][i];
      if (j === plates.length - 1) {
        rowArr.push(rowsum);
        rowsum = 0;
      }
      if (j === plates.length - 1) {
        columnArr.push(columnSum);
        columnSum = 0;
      }
      if (plates[i] === plates[j]) {
        diagonalSum += plates[i][j];
      }
      if (plates[plates.length - 1 - i] === plates[j]) {
        diagonalReversSum += plates[i][j];
      }
    }
  }
  return Math.max.apply(null, [
    ...rowArr,
    ...columnArr,
    diagonalSum,
    diagonalReversSum,
  ]);
};

test("MaxSumPlate", () => {
  expect(
    MaxSumPlate([
      [10, 13, 10, 12, 15],
      [12, 39, 30, 23, 11],
      [11, 25, 50, 53, 15],
      [19, 27, 29, 37, 27],
      [19, 13, 30, 13, 19],
    ])
  ).toBe(155);
});
