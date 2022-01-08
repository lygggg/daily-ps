/*
이해
이번 정보올림피아드대회에서 좋은 성적을 내기 위해 현수는 선생님이 주신 N개의 문제를 풀려고 한다.
각 문제는 그것을 풀었을 때 얻는 점수와 푸는데 걸리는 시간이 주어지게 된다. 제한시간 M안에 N개의 문제 중 최대점수를 얻을 수 있도록 해야한다.
해당문제는 해당시간이 걸리면 푸는걸로 간주합니다. 한 유형당 한개만 풀 수 있다.
첫번째 줄에는 문제의 개수, 제한시간이 주어진다.
두번째 줄에는 N줄에 겹친 문제를 풀엇을때 점수와 푸는데 걸리는 시간이 주어진다.

구해야하는 것
첫번째 배열의 두번째 데이터 제한시간내에 최대한 얻을수 있는 높은 점수를 구해야한다.

계획
DFS라는 함수를 만들고, 한 유형당 한문제씩만 풀수 있으니, check라는 배열을 만들고, 재귀를 돌면서
depth가 arr의 길이랑 같으면 결과 배열에 넣어주고 리턴한다. 
모든 경우의수가 다 나왔으면 그 배열에서 20보다 작고 가장 합이 높은점수를 구한다.
*/

const maxScore = (n, arr) => {
  const check = Array(n[0]).fill(0);
  DFS(n, 0, arr, check, (result = []));
  return Math.max(...result);
};

const DFS = (n, depth, arr, check, result) => {
  if (depth === n[0]) {
    const filterArr = arr.filter((e, i) => {
      if (check[i] === 1) {
        return e;
      }
    });
    let sumTime = 0;
    let sumScore = 0;
    for (let i = 0; i < filterArr.length; i++) {
      sumTime += filterArr[i][1];
      sumScore += filterArr[i][0];
    }
    if (sumTime <= n[1]) {
      let sum = 0;
      filterArr.forEach((e, i) => {
        sum += e[0];
      });
      result.push(sum);
    }
    return;
  }
  check[depth] = 1;
  DFS(n, depth + 1, arr, check, result);
  check[depth] = 0;
  DFS(n, depth + 1, arr, check, result);
};

test("maxScore", () => {
  expect(
    maxScore(
      [5, 20],
      [
        [10, 5],
        [25, 12],
        [15, 8],
        [6, 3],
        [7, 4],
      ]
    )
  ).toBe(41);
});
