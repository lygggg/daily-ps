/*
이해
자연수 N을 입력하면 N!값을 구하세요.
N! = n*(n-1)*(n-2)*.....*2*1입니다.
만약 N=5라면 5!=5*4*3*2*1 = 120입니다.

계획
dfs함수를 생성하고 N값이 1이되면멈추도록 설정하고
더한값을 dfs함수 인자에 넣어주고, dfs함수를 출력한다
*/

function factorial2019(N) {
  let result = 0;
  const dfs = (N, num) => {
    if (N === 1) {
      result = num;
      return;
    }

    dfs(N - 1, num * N);
  };
  dfs(N, 1);
  return result;
}

test("factorial2019", () => {
  expect(factorial2019(5)).toBe(120);
});
