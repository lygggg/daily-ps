let fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((e) => parseInt(e));
input.shift();

/*
1. 계단은 한번에 한 계단씩 또는 두 계단씩 오를 수 있다. 즉 한 계단을 밝으면서
이어서 다음 계단이나, 다음 다음 계단으로 오를 수 있다.
2. 연속된 세 개의 계단을 모두 밟아서는 안 된다. 단 시작점은 계단에 포함되지 않는다.
3. 마지막 도착 계단은 반드시 밟아야 한다.
*/
// TODO: 처음 계단 무조건 밟게 되는 문제 해결하기

const mem = Array.from(new Array(301), () => new Array(3).fill(-1));
/*
 * 상태 (p, s) : 답이 정해지는 변수들의 집합
 *  - p, 위치
 *  - s, 연속으로 몇 번째 밟는건지
 *
 * 종료조건
 *  - (N, x) : 0
 *
 * 점화식
 *  - (p, 0) : 이전 계단을 안 밟았으면 이번 계단은 무조건 밟아야 한다.
 *      -> (p + 1, 1) + stairs[p]
 *  - (p, 1) :
 *      -> (p + 1, 2) + stairs[p] : 밟는 경우
 *      -> (p + 1, 0) : 밟지 않는 경우
 *  - (p, 2) :
 *      -> (p + 1, 0)
 */
function count(p, s, stairs) {
  if (p >= stairs.length) return 0;
  if (mem[p][s] !== -1) return mem[p][s];

  let answer = 0;
  switch (s) {
    case 0:
      count(p + 1, 1, stairs) + stairs[p];
      break;
    case 1:
      answer = Math.max(
        count(p + 1, 2, stairs) + stairs[p],
        count(p + 1, 0, stairs)
      );
      break;
    case 2:
      answer = count(p + 1, 0, stairs);
      break;
  }
  mem[p][s] = answer;
  return answer;
}

const stairs = input;
console.log(count(0, 0, stairs));
