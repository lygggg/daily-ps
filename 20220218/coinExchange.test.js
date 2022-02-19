/*
이해
다음과 같이 여러 단위의 동전들이 주어져 있을때 거스름돈을 가장 적은 수의 동전으로 교환 해주려면 어떻게 주면 되는가?
각 단위의 동전은 무한정 쓸 수 있다.
첫 번째 줄에는 동전의 종류개수가 주어진다. 두 번째 줄에는 N개의 동전의 종류가 주어지고, 그 다음줄에 거슬러 줄 금액 N이 주어진다.
각 동전의 종류는 100원을 넘지 않는다.

계획
중복 순열과 같은 문제다. 배열에 원소를 가지고 재귀함수를 돌면서 합이 합이 15가 되면 멈추고,
또는 동전의 개수와 depth가 같아지면 함수를 종료한다.
개수를 카운트하면서 결과 배열에 넣은순간 개수를 초기화한다.
그중 가장 작은 수의 배열을 리턴한다.

*/

const exChangeCoin = (N, arr, M) => {
  const result = [];
  const dfs = (depth, arr, sum) => {
    if (sum === M) {
      result.push(depth);
      return;
    }
    if (depth === N) {
      sum = 0;
      return;
    }
    for (let i = 0; i < N; i++) {
      dfs(depth + 1, arr, sum + arr[i]);
    }
  };
  dfs(0, arr, 0);
  return Math.min(result);
};

test("exChangeCoin", () => {
  expect(exChangeCoin(3, [1, 2, 5], 15)).toBe(3);
});
