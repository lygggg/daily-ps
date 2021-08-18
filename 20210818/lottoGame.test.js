/*
이해
해당 로또 두개가있다 하나는 내가 산 로또지만
동생의 실수로 지워져서 0으로 체크되어있다.
또 다른 하나는 당첨번호이다. 이것을 보고 등수를 구해야한다.

구해야하는 것
순서에 상관없이 확실하게 같은 수의 개수+0의 개수를 더한값의
순위를 배열의 첫번째에 넣고 두번째에 0을제외한 확실한
같은숫자들의 순위를 넣어야한다.

계획
배열 두개를 순회하면서 같은 값이 있으면 컨디뉴로 넘어가고
카운트를 증가시킨다 마지막에 lottos배열의 0의 수를 합한다.
위 카운트의 0값을 제외한 값을 넣는다.
*/

const { test, expect } = require("@jest/globals");

const lottoGame = (lottos, win_nums) => {
  let count = 0;
  for (let i = 0; i < lottos.length; i++) {
    for (let j = 0; j < win_nums.length; j++) {
      if (lottos[i] == win_nums[j]) {
        count += 1;
        continue;
      }
    }
  }
  const zero = lottos.reduce((cnt, e) => cnt + (0 === e), 0);
  const result = [zero + count, count].map((e) => {
    if (e === 6) {
      return 1;
    }
    if (e === 5) {
      return 2;
    }
    if (e === 4) {
      return 3;
    }
    if (e === 3) {
      return 4;
    }
    if (e === 2) {
      return 5;
    }
    if (e === 1 || e == 0) {
      return 6;
    }
  });
  return result;
};

test("lottoGame", () => {
  expect(lottoGame([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])).toEqual([
    3,
    5,
  ]);
});
