/*
이해
삼각형의 가장 긴 변은 나머지 두변의 길이의 합보다 작아야한다.
구해야하는것
3개의 변으로 삼각형을 만들수있는지
계획
가장 큰 변을 찾고 나머지 변의 합이 가장큰 변보다 작은지 큰지 가려내서 리턴한다.
*/

const triangular = (A, B, C) => {
  return Math.max(A, B, C) >
    [A, B, C]
      .filter((e) => e !== Math.max(A, B, C))
      .reduce((s, e) => {
        return s + e;
      })
    ? "NO"
    : "YES";
};

test("triangular", () => {
  expect(triangular(6, 7, 11)).toBe("YES");
  expect(triangular(13, 33, 17)).toBe("NO");
});
