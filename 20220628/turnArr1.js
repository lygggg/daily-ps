const [input, ...rows] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");
const inputs = input.split(" ").map((e) => parseInt(e));
const N = inputs[0];
const M = inputs[1];
const R = inputs[2];
let map = rows.map((e) => e.split(" ").map((i) => parseInt(i)));
// min(N,M)/2
const turnArr = () => {
  const count = Math.min(N, M) / 2;
  let checkArr = Array.from(Array(N), () => Array(M).fill(0));
  for (let cnt = 0; cnt < count; cnt++) {
    let n_max = N - cnt - 1;
    let m_max = M - cnt - 1;
    for (let i = cnt; i < m_max; i++) {
      checkArr[cnt][i] = map[cnt][i + 1];
    }
    for (let i = n_max; i > cnt; i--) {
      checkArr[i][cnt] = map[i - 1][cnt];
    }
    for (let i = m_max; i > cnt; i--) {
      checkArr[n_max][i] = map[n_max][i - 1];
    }
    for (let i = cnt; i < n_max; i++) {
      checkArr[i][m_max] = map[i + 1][m_max];
    }
  }
  map = checkArr;
};
for (let i = 0; i < R; i++) {
  turnArr();
}
map.forEach((e) => console.log(e.join(" ")));
