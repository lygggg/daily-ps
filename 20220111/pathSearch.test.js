/*
이해
방향 그래프가 주어지면 1번 정점에서 N번 정점으로 가는 모든 경로의 가지수를 출력하는 프로그램을 작성하시오.

계획
먼저 갯수를 카운팅할  answer값을 0으로 정해주고, 경로를 그려줄 이차원배열 arr를 만들어주고, 갔던 경로를 체크해줄 check배열을 만들어준다.
그후 재귀함수DFS를 호출해서 만약 현재노드 v가 n가되면, 종료하고, 카운트를 리턴한다. 만약 아니면 현재노드 v에서 for문을 돌려서 arr에 있는 경로와
일치하고, check 위치가 0이면 check현재 위치를 1로 바까주고, DFS를 호출한다.  DFS를 빠져나오면 check를 0으로 바까준다.
*/

const pathSearch = (n, arr) => {
  let answer = 0;
  let check = Array(n + 1).fill(0);
  let path = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  let test = [];
  arr.forEach((e) => (path[e[0]][e[1]] = 1));
  const DFS = (v) => {
    if (v == n) {
      answer += 1;
      return;
    } else {
      for (let i = 1; i <= n; i++) {
        if (path[v][i] == 1 && check[i] == 0) {
          test.push(i);
          check[i] = 1;
          DFS(i);
          check[i] = 0;
          test.pop();
        }
      }
    }
  };

  check[1] = 1;
  DFS(1);
  return answer;
};

test("pathSearch", () => {
  expect(
    pathSearch(5, [
      [1, 2],
      [1, 3],
      [1, 4],
      [2, 1],
      [2, 3],
      [2, 5],
      [3, 4],
      [4, 2],
      [4, 5],
    ])
  ).toBe(6);
});
