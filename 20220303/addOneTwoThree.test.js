/*
정수 4를 1,2,3의 합으로 나타내는 방법은 총 7가지가 있다.
합을 나타낼 때는 수를 1개 이상 사용해야 한다.
1+1+1+1, 1+1+2, 1+2+1, 2+1+1, 2+2, 1+3, 3+1
*/

const addOneTwoThree = (n) => {
  let count = 0;
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
    dfs(sum + 3);
  };
  dfs(0);
  return count;
};

test("addOneTwoThree", () => {
  expect(addOneTwoThree(4)).toBe(7);
  expect(addOneTwoThree(7)).toBe(44);
  expect(addOneTwoThree(10)).toBe(274);
});
