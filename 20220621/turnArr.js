const [input, ...rows] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = parseInt(input);
const map = rows.map((e) => e.split(" ").map((i) => parseInt(i)));
let move1 = 0;
let move2 = 1;
const turnArr = (n, d, arr, imArr) => {
  if (d > 0) {
    for (let c = 0; c < Math.abs(d) / 45; c++) {
      for (let i = 0; i < n; i++) {
        const xx = Math.ceil(n / 2) - 1;
        imArr[i][xx] = arr[i][i]; // x의 대각선을 중앙으로
        imArr[i][n - 1 - i] = arr[i][xx]; // x의 가운데 열을 부 대각선으로
        imArr[xx][i] = arr[n - 1 - i][i]; // x의 부 대각선을 가운데 행으로
        imArr[i][i] = arr[xx][i]; // x의 가운데 행을 x의 주 대각선으로
      }
      arr = JSON.parse(JSON.stringify(imArr));
    }
  }
  if (d < 0) {
    for (let c = 0; c < Math.abs(d) / 45; c++) {
      for (let i = 0; i < n; i++) {
        const xx = Math.ceil(n / 2) - 1;
        imArr[i][i] = arr[i][xx]; // x의 대각선을 중앙으로
        imArr[i][xx] = arr[i][n - 1 - i]; // x의 가운데 열을 부 대각선으로
        imArr[n - 1 - i][i] = arr[xx][i]; // x의 부 대각선을 가운데 행으로
        imArr[xx][i] = arr[i][i]; // x의 가운데 행을 x의 주 대각선으로
      }
      arr = JSON.parse(JSON.stringify(imArr));
    }
  }
  arr.forEach((e) => console.log(e.join(" ")));
};
for (let i = 0; i < T; i++) {
  const n = map[move1][0];
  const d = map[move1][1];
  let arr = map.slice(move2, move2 + n);
  let imArr = JSON.parse(JSON.stringify(arr));
  turnArr(n, d, arr, imArr);
  move1 += n + 1;
  move2 += n + 1;
}
