/*
이해
철수는 계딴을 오를 때 한 번에 한 계단 또는 두 계단씩 올라간다.
만약 총 4계단을 오른다면 그 방법의 수는 1+1+1+1, 1+1+2, 1+2+1, 2+1+1, 2+2
로 총 5가지이다. 그렇다면 총 N계단일 때 철수가 올라갈 수 있는 방법의 수는 몇가지인가?
*/

const climbingStairs = (N) => {
  let count = 0;
  const dfs = (depth) => {
    if (depth === N) {
      count += 1;
      return;
    }
    if (depth > N) {
      return;
    }
    dfs(depth + 1);
    dfs(depth + 2);
  };
  dfs(0);
  return count;
};

test("climbingStairs", () => {
  expect(climbingStairs(7)).toBe(21);
});
