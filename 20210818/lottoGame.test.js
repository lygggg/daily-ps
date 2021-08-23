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
