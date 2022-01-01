/*
이해
n*n의 격자판이 주어진다. 각 격자에는 그 지역의 높이가 써있고, 각 격자 판의 숫자중 자신의 상하좌우 숫자보다 큰 숫자는 봉우리 지역이다.
봉우리 지역이 몇개 있는 알아내는 프로그램을 작성해라

구해야하는 것
이중배열에서 해당 값의 상하좌우가 자신의 숫자보다 큰 값의 개수를 구해라.

계획
이중 for문으로 해당값의 위 아래 양 옆이 자신의 상하좌우보다 큰 숫자가 있으면 갯수를 세고 리턴한다.
만약 상하좌우 값이 없을경우 0으로 계산해서 구한다.
*/
const peak = (peakArr) => {
  peakArr.push(new Array(peakArr.length).fill(0));
  peakArr.unshift(new Array(peakArr.length - 1).fill(0));
  console.log(peakArr);
  let count = 0;
  for (let i = 1; i < peakArr.length - 1; i++) {
    for (let j = 0; j < peakArr.length; j++) {
      let leftZero = peakArr[i][j - 1];
      let rightZero = peakArr[i][j + 1];
      let upZero = peakArr[i - 1][j];
      let downZero = peakArr[i + 1][j];
      if (!leftZero) leftZero = 0;
      if (!rightZero) rightZero = 0;
      if (peakArr[i][j] > leftZero) {
        if (peakArr[i][j] > rightZero) {
          if (peakArr[i][j] > upZero) {
            if (peakArr[i][j] > downZero) {
              count++;
            }
          }
        }
      }
    }
  }
  return count;
};

test("peak", () => {
  expect(
    peak([
      [5, 3, 7, 2, 3],
      [3, 7, 1, 6, 1],
      [7, 2, 5, 3, 4],
      [4, 3, 6, 4, 1],
      [8, 7, 3, 5, 2],
    ])
  ).toBe(10);
});
