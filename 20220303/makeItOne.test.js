/*
이해
X가 3으로 나누어 떨어지면, 3으로 나눈다
X가 2로 나누어 떨어지면 2로 나눈다.
1을 뺀다
정수 N이 주어졌을때, 위와 같은 연산 세 개를 적절히 사용해서 1을
만들려고 한다. 연산을 사용하는 횟수의 최솟값을 출력하시오.
*/

const makeItOne = (X) => {
  const countArr = [];
  let count = 0;
  const dfs = (X) => {
    if (X === 1) {
      countArr.push(count);
      count = 0;
      return;
    }
    if (X % 3 === 0 && X !== 3) {
      count += 1;
      dfs(X / 3);
    }
    if (X % 2 === 0 && X !== 2) {
      count += 1;
      dfs(X / 2);
    }
    count += 1;
    dfs(X - 1);
  };
  dfs(X);
  return Math.min(...countArr);
};

test("makeItOne", () => {
  expect(makeItOne(2)).toBe(1);
  expect(makeItOne(10)).toBe(3);
});
