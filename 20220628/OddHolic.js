/*
수의 각 자리 숫자 중에서 홀수의 개수를 종이에 적는다
수가 한 자리이면 더 이상 아무것도 하지 못하고 종료한다.
수가 두자리이면 2개로 나눠서 합을 구하여 새로운 수로 생각한다.
수가 세 자리 이상이면 임의의 위치에서 끊어서 3개의 수로 분할하고, 3개를
더한 값을 새로운 수로 생각한다.
*/
const [input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = parseInt(input);
let min;
let max;

const OddHolic = (num, cnt) => {
  if (num <= 9) {
    if (min === undefined || min > cnt) {
      min = cnt;
    }
    if (max === undefined || max < cnt) {
      max = cnt;
    }
    return;
  }
  if (num <= 99) {
    const sum = Math.floor(num / 10) + (num % 10);
    OddHolic(sum, getOddCount(sum) + cnt);
  }
  const numArr = String(num).split("");
  for (let i = 0; i < numArr.length - 2; i++) {
    for (let j = i + 1; j < numArr.length - 1; j++) {
      const one = numArr.slice(0, i + 1);
      const two = numArr.slice(i + 1, j + 1);
      const three = numArr.slice(j + 1, numArr.length);
      const sum =
        parseInt(one.join("")) +
        parseInt(two.join("")) +
        parseInt(three.join(""));
      OddHolic(sum, getOddCount(sum) + cnt);
    }
  }
};
const getOddCount = (str) => {
  let count = 0;
  str = String(str)
    .split("")
    .map((e) => parseInt(e));
  for (let i = 0; i < str.length; i++) {
    if (str[i] % 2 === 1 && str[i] !== 0) {
      count += 1;
    }
  }
  return count;
};

OddHolic(N, getOddCount(N));
console.log(min, max);
