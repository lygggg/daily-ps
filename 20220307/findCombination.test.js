const findCombination = (n, m) => {
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0);
  function DFS(L, s) {
    if (L === m) {
      answer.push(tmp.slice());
      return;
    } else {
      for (let i = s; i <= n; i++) {
        console.log(tmp[L]);
        tmp[L] = i;
        DFS(L + 1, i + 1);
      }
    }
  }
  DFS(0, 1);
  return answer;
};

test("findCombination", () => {
  expect(findCombination(4, 2)).toEqual(
    [
      [1, 2],
      [1, 3],
      [1, 4],
      [2, 3],
      [2, 4],
      [3, 4],
    ],
    6
  );
});
