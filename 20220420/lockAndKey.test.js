/*
이해
고고학자인 "튜브"는 고대 유적지에서 보물과 유적이 가득할 것으로 추정되는 비밀의 문을
발견하였습니다. 그런데 문을 열려고 살펴보니 특이한 형태의 자물쇠로 잠겨 있었고 문 앞에는
특이한 형태의 열쇠와 함께 자물쇠를 푸는 방법에 대해 다음과 같이 설명해 주는 종이가
발견되었습니다. 잠겨있는 자물쇠는 격자 한 칸의 크기가 1x1인 NxN 크기의 정사각 격자 형태이고
특이한 모양의 열쇠는 MxM크기인 정사각 격자 형태로 되어있습니다.
자물쇠에는 홈이 파여 있고 열쇠 또한 홈과 돌기 부분이 있습니다. 열쇠는 회전과 이동이 가능하며,
열쇠의 돌기 부분을 자물쇠의 홈 부분에 딱 맞게 채우면 자물쇠가 열리게 되는 구조입니다. 자물쇠 영역을 벗어난 부분에
있는 열쇠의 홈과 돌기는 자물쇠를 여는데 영향을 주지 않지만, 자물쇠 영역 내에서는 열쇠의 돌기 부분과
자물쇠의 홈 부분이 정확히 일치해야 하며 열쇠의 돌기와 자물쇠의 돌기가 만나서는
안됩니다. 또한 자물쇠의 모든 홈을 채워 비어있는 곳이 없어야 자물쇠를 열 수 있습니다.
열쇠를 나타내는 2차월 배열 key와 자물쇠를 나타내는 2차원 배열 lock이 매개변수로 주어질 때,
열쇠로 자물쇠를 열수 있으면 true를, 열수 없으면 false를 return 하도록 solution함수를 완성해주세요.

계획
먼저 행 열 lock-1 + (key x 2) 배열을 만들고 0을 채운다.

 */

const lockAndKey = (key, lock) => {
  const checkArr = Array.from(Array(lock.length + (key.length - 1) * 2), () =>
    Array(lock.length + (key.length - 1) * 2).fill(0)
  );
  for (let i = 0; i < lock.length * 2 - 1; i++) {
    const resultArr = [];
    for (let j = 0; j < lock.length * 2 - 1; j++) {
      let state = true;

      //3번 회전
      for (let c = 0; c < 4; c++) {
        let rotate = Array.from(Array(key.length), () =>
          Array(key.length).fill(0)
        );

        // 90도 회전
        for (let row = 0; row < key.length; row++) {
          for (let col = 0; col < key.length; col++) {
            rotate[row][col] = key[key.length - 1 - col][row];
          }
        }

        // 회전한거 체크
        for (let row = 0; row < key.length; row++) {
          for (let col = 0; col < key.length; col++) {
            if (rotate[row][col] === 1) {
              checkArr[i + row][j + col] += 1;
            }
          }
        }

        // checkArr의 lock부분이 다 1인지 확인하는 로직
        for (let ci = 0; ci < lock.length; ci++) {
          for (let cj = 0; cj < lock.length; cj++) {
            if (checkArr[key.length - 1 + ci][key.length - 1 + cj] !== 1) {
              state = false;
              continue;
            }
          }
        }

        // checkArr 초기화
        for (let si = 0; si < lock.length; si++) {
          for (let sj = 0; sj < lock.length; sj++) {
            if (lock[si][sj] === 1) {
              checkArr[key.length - 1 + si][key.length - 1 + sj] = 1;
            } else {
              checkArr[key.length - 1 + si][key.length - 1 + sj] = 0;
            }
          }
        }
        if (state === true) {
          console.log(i, j, c);
          return true;
        }
        resultArr.push(state);
        key = rotate;
      }
    }
  }
  return false;
};

test("lockAndKey", () => {
  expect(
    lockAndKey(
      [
        [0, 0, 0],
        [1, 0, 0],
        [0, 1, 1],
      ],
      [
        [1, 1, 1],
        [1, 1, 0],
        [1, 0, 1],
      ]
    )
  ).toBe(true);
});
