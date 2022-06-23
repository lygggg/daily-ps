/*
남학생은 스위치 번호가 자기가 받은 수의 배수이면 그 스위치의 상태를 바꾼다.
즉, 스위치가 켜져 있으면 끄고, 꺼져 있으면 켠다.

여학생은 자기가 받은 수와 같은 번호가 붙은 스위치를 중심으로 좌우가 대칭이면서
가장 많은 스위치를 포한하는 구간을 찾아서 그구간의 스위치 상태를 모두 바꾼ㄷ.

*/
const [스위치개수, arr, 학생수, ...rows] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const sArr = arr.split(" ").map((e) => parseInt(e));
const map = rows.map((e) => e.split(" ").map((i) => parseInt(i)));
const result = [...sArr];

map.forEach((e) => {
  if (e[0] === 1) {
    let i = e[1];
    while (i <= sArr.length) {
      if (result[i - 1] === 1) {
        result[i - 1] = 0;
      } else {
        result[i - 1] = 1;
      }
      i += e[1];
    }
  }
  if (e[0] === 2) {
    let i = e[1] - 1;
    let leftN = i - 1;
    let rightN = i + 1;
    let n;
    let m;
    while (true) {
      if (result[leftN] === result[rightN]) {
        n = leftN;
        m = rightN;
      } else {
        break;
      }
      leftN -= 1;
      rightN += 1;
      if (leftN < 0) {
        break;
      }
      if (rightN >= sArr.length) {
        break;
      }
    }
    if (n !== undefined) {
      for (let i = n; i <= m; i++) {
        if (result[i] === 1) {
          result[i] = 0;
        } else {
          result[i] = 1;
        }
      }
    } else {
      if (result[i] === 1) {
        result[i] = 0;
      } else {
        result[i] = 1;
      }
    }
  }
});

for (let i = 0; i < result.length; i += 20) {
  const arr = result.slice(i, i + 20);
  console.log(arr.join(" "));
}
