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

      if (count < 0) {
        continue;
      }
      if (count > n) {
        continue;
      }
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
        isVisited[isVisited.length - 1] = count;
        arrResult.push(isVisited);
      }
      for (let i = 0; i < info.length; i++) {
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
  result.forEach((e, i) => {
    if (e === Math.max(...result)) {
      maxArr.push(arrResult[i]);
    }
  });
  // 19 27 34 40 45
  const value = [];
  maxArr.forEach((e) => {
    const arr = e.map((item, i) => {
      if (i === 10) {
        return item;
      }
      if (item) {
        return info[i] + 1;
      } else {
        return 0;
      }
    });
    value.push(arr.reverse());
  });
  value.sort((a, b) => {
    for (let i = 0; i < a.length; i++) {
      if (a[i] > b[i]) return -1;
      if (a[i] < [b[i]]) return 1;
    }
  });
  return value[0].reverse();
};

test("archerCompetition", () => {
  expect(archerCompetition(10, [0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 3])).toEqual([
    1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 2,
  ]);
});
