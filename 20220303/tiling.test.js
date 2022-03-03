/*
2xn 크기의 직사각형을 1x2, 2x1 타일로 채우는 방법의 수를 구하는 프로그램을 작성하시오
아래 그림은 2x5 크기의 직사각형을 채운 한 가지 방법의 예이다.
*/

const tiling = (n) => {
  let count = 0;
  let sum = 0;
  const dfs = (sum) => {
    if (sum === n) {
      count += 1;
      return;
    }
    if (sum > n) {
      return;
    }
    dfs(sum + 1);
    dfs(sum + 2);
  };

  dfs(sum);
  return count;
};

test("tiling", () => {
  expect(tiling(2)).toBe(2);
  expect(tiling(9)).toBe(55);
});
