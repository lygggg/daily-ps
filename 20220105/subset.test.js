/*
이해
자연수 N이 주어지면 1부터 N까지의 원소를 갖는 집합의 부분집합을 모두 출력하는 프로그램을 작성하세요.

구해야하는 것
1부터 N까지의 원소를 갖는 집합의 부분집합을 담은 배열

계획
1부터 n까지의 배열을 생성한다.
check라는 이름의 n의 길이만큼 0을 채운 배열을 생성한다. DFS라는 재귀함수를 만들고 끝나는 값은 깊이가 n이상일 경우 리턴해준다.
dfs 왼쪽 오른쪽을 향하는 두개를 호출하고, 왼쪽으로 갈때는 check[깊이] = 1 오른쪽으로 갈때는 check[깊이] = 0 으로 바꿔준다.

*/

const subset = (n) => {
  const arr = Array(n)
    .fill()
    .map((e, i) => i + 1);
  const check = Array(n).fill(0);
  DFS(0, arr, check, (result = []));
  result.pop();
  return result;
};

const DFS = (depth, arr, check, result) => {
  if (depth === arr.length) {
    result.push(
      arr.filter((e, i) => {
        if (check[i] === 1) {
          return e;
        }
      })
    );
    return;
  }
  check[depth] = 1;
  DFS(depth + 1, arr, check, result);
  check[depth] = 0;
  DFS(depth + 1, arr, check, result);
};

test("subset", () => {
  expect(subset(3)).toEqual([[1, 2, 3], [1, 2], [1, 3], [1], [2, 3], [2], [3]]);
});
