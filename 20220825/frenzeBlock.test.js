const dx = [0, 1, 0, 1];
const dy = [0, 0, 1, 1];
const frenzeBlock = (m, n, board) => {
  let splitArr = board.map((e) => e.split(""));
  while (true) {
    let check = [];
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (!splitArr[i][j]) {
          continue;
        }
        let bool = true;
        const diff = splitArr[i][j];
        for (let c = 0; c < 4; c++) {
          const ny = i + dy[c];
          const nx = j + dx[c];
          if (ny >= m || nx >= n) {
            bool = false;
            continue;
          }
          if (splitArr[ny][nx] !== diff) {
            bool = false;
          }
        }
        if (bool) {
          for (let c = 0; c < 4; c++) {
            const ny = i + dy[c];
            const nx = j + dx[c];
            check.push([ny, nx]);
          }
        }
      }
    }
    for ([index1, index2] of check) {
      splitArr[index1][index2] = 0;
    }
    let flag = true;
    while (flag) {
      flag = false;
      for (let y = 1; y < m; y++) {
        for (let x = 0; x < n; x++) {
          if (!splitArr[y][x]) {
            splitArr[y][x] = splitArr[y - 1][x];
            splitArr[y - 1][x] = 0;
            if (splitArr[y][x]) {
              flag = true;
            }
          }
        }
      }
    }
    if (check.length === 0) {
      break;
    }
  }
  let count = 0;
  splitArr.forEach((y) => {
    y.forEach((value) => {
      if (!value) count += 1;
    });
  });
  return count;
};

test("frenzeBlock", () => {
  expect(
    frenzeBlock(5, 6, ["AAAAAA", "BBAATB", "BBAATB", "JJJTAA", "JJJTAA"])
  ).toBe(24);
});
