/*
1. 만약 k점에 여러발을 맞춰도 가장 많이 맞춘사람이 점수를 가져간다.
2. 맞춘 횟수가 같을경우 어피치가 가져간다.
3. 아무도 못맞춘 경우 아무도 안가져간다.
10에서부터 어피치 개수 바로 위만큼
*/
class State {
  constructor(index, sum, count, isVisited) {
    this.sum = sum;
    this.index = index;
    this.count = count;
    this.isVisited = isVisited;
  }
}
const archerCompetition = (n, info) => {
  const result = [];
  const arrResult = [];
  let max = 0;
  let apeachSum = 0;
  info.forEach((e, i) => {
    if (e) {
      apeachSum += Math.abs(10 - i);
    }
  });
  const dfs = (num, index, sum, isVisited) => {
    const stack = [];
    let count = n - num;
    // 초기 상태 삽입
    stack.push(new State(index, sum, count, isVisited));
    // 탐색할 상태가 남아있는 동안 계속 검사
    while (stack.length !== 0) {
      // 현재 방문할 상태
      const { index, sum, count, isVisited } = stack.pop();
      //   console.log(isVisited);
      // 화살개수, 인덱스, 합, 현재 남은 갯수
      // state에 대한 처리

      if (count < 0) {
        continue;
      }
      if (count > n) {
        continue;
      }
      if (count === 0) {
        let value = 0;
        isVisited.forEach((e, i) => {
          if (e && info[i]) {
            value += Math.abs(10 - i);
          } else if (e) {
            value += Math.abs(10 - i);
          } else if (info[i]) {
            value -= Math.abs(10 - i);
          }
        });
        if (value > 0) {
          result.push(value);
          arrResult.push(isVisited);
        }
      }
      for (let i = 0; i < 11; i++) {
        let nextIndex = index + i;
        let next = info[nextIndex] + 1;
        if (nextIndex > 10) {
          continue;
        }
        if (isVisited[nextIndex]) {
          continue;
        }

        // 방문 처리
        // 완전 탐색 자료구조에 넣어줬다.
        const copyIsVisited = isVisited.slice();
        copyIsVisited[nextIndex] = true;
        stack.push(
          new State(
            nextIndex,
            sum + Math.abs(10 - nextIndex),
            count - next,
            copyIsVisited
          )
        );
        // 다음 인덱스, 합, 현재 남은 갯수
      }
    }
  };
  for (let i = 0; i < info.length; i++) {
    let isVisited = new Array(info.length).fill(false);
    isVisited[i] = true;
    dfs(info[i] + 1, i, Math.abs(10 - i), isVisited);
  }
  if (result.length === 0) {
    return [-1];
  }

  const maxArr = [];
  console.log(Math.max(...result));
  result.forEach((e, i) => {
    if (e === Math.max(...result)) {
      maxArr.push(arrResult[i]);
    }
  });
  // 19 27 34 40 45
  console.log(maxArr);
};
// 10 8 7 25
// 9 6 5 4 24
test("archerCompetition", () => {
  expect(archerCompetition(10, [0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0])).toEqual([
    1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 2,
  ]);
});
