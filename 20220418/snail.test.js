// 우, 하, 좌, 상
const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

function solution(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(new Array(n).fill(0));
  }

  // 다음에 넣어주어야 할 숫자
  let number = 1;
  // 다음에 숫자가 들어가야할 위치
  let x = 0;
  let y = 0;
  // 진행 방향
  let d = 0;
  while (number <= n * n) {
    arr[y][x] = number++;

    x += dx[d];
    y += dy[d];

    if (arr[y] == null || arr[y][x] == null || arr[y][x] !== 0) {
      x -= dx[d];
      y -= dy[d];

      // 우(0) -> 하(1) -> 좌(2) -> 상(3) -> 우(0)
      d = (d + 1) % 4;

      x += dx[d];
      y += dy[d];
    }
  }

  return arr;
}

/*
 * 1 2 3
 * 8   4
 * 7 6 5
 */

console.log(solution(5));
