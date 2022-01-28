/*
이해
7*7격자판 미로를 탈출하는 경로의 가지수를 출력하는 프로그램을 작성하세요.
출발점은 격자의 (1,1)좌표이고, 탈출은 도착점 (7,7)좌표이다. 격자판 1은 벽이고, 0은 통로이다.
격자판의 움직임은 상하좌우로만 움직인다. 

구해야하는 것
격자판 지도 출발점에서 도착점까지 갈 수 있는 모든 방법의 수를 구해라.

계획
D(0,0)부터 상하좌우로 뻗는데, 현재 위치가 D(7,7)이면 카운트를 증가시키고 리턴한다.
위쪽은 D(-1,0) 아래쪽은 D(+1,0) 왼쪽은 D(0,-1) 오른쪽은 D(-1,0) 일경우고 만약 움직인 위치가 1일경우 DFS함수를 또 호출한다.
*/

const mazeExploration = (board) => {
  let answer = 0;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  const DFS = (x, y) => {
    if (x === 6 && x === 6) answer++;
    else {
      for (let k = 0; k < 4; k++) {
        let nx = x + dx[k];
        let ny = y + dy[k];
        if (nx >= 0 && nx <= 6 && ny >= 0 && ny <= 6 && board[nx][ny] === 0) {
          board[nx][ny] = 1;
          DFS(nx, ny);
          board[nx][ny] = 0;
        }
      }
    }
  };

  board[0][0] = 1;
  DFS(0, 0);
  console.log(answer);
  return answer;
};

test("mazeExploration", () => {
  expect(
    mazeExploration([
      [0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 1, 0, 0, 0],
      [1, 1, 0, 1, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 1],
      [1, 1, 0, 1, 1, 0, 0],
      [1, 0, 0, 0, 0, 0, 0],
    ])
  ).toBe(8);
});
