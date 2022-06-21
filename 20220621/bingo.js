const [...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const input1 = input.slice(0, 5);
const input2 = input.slice(5, 10);

const 철수 = input1.map((e) => e.split(" ").map((i) => parseInt(i)));
const 사회자 = input2.map((e) => e.split(" ").map((i) => parseInt(i)));
let count = 0;
let checkCount = 0;

const rowCheck = () => {
  for (let y = 0; y < 5; y++) {
    let rowCount = 0;
    for (let x = 0; x < 5; x++) {
      if (!철수[y][x]) {
        rowCount += 1;
      }
    }
    if (rowCount >= 5) {
      checkCount += 1;
    }
  }
};

const columnCheck = () => {
  for (let y = 0; y < 5; y++) {
    let columnCount = 0;
    for (let x = 0; x < 5; x++) {
      if (!철수[x][y]) {
        columnCount += 1;
      }
    }
    if (columnCount >= 5) {
      checkCount += 1;
    }
  }
};

const diagonalLeftCheck = () => {
  let diagonalCount = 0;
  for (let x = 0; x < 5; x++) {
    if (!철수[x][x]) {
      diagonalCount += 1;
    }
  }
  if (diagonalCount >= 5) {
    checkCount += 1;
  }
};

const diagonalRightCheck = () => {
  let diagonalCount = 0;
  for (let x = 0; x < 5; x++) {
    if (!철수[x][4 - x]) {
      diagonalCount += 1;
    }
  }
  if (diagonalCount >= 5) {
    checkCount += 1;
  }
};

const checkArr = (point) => {
  for (let y = 0; y < 5; y++) {
    for (let x = 0; x < 5; x++) {
      if (철수[y][x] === point) {
        철수[y][x] = false;
        count += 1;

        rowCheck();
        columnCheck();
        diagonalLeftCheck();
        diagonalRightCheck();
      }
      //빙고가 몇개인지 체크해줘야함
    }
  }
};

for (let y = 0; y < 5; y++) {
  for (let x = 0; x < 5; x++) {
    const point = 사회자[y][x];
    checkArr(point);
    if (checkCount >= 3) {
      console.log(count);
      return;
    } else {
      checkCount = 0;
    }
  }
}
