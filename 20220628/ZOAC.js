const [input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const arr = input.split("");
const answer = [];
const checkArr = Array(arr.length).fill(false);
const recursive = (left, right) => {
  if (left === right) return;
  let result = "";
  const minStr = arr.slice(left, right).sort()[0];
  const minIdx = arr.slice(left, right).indexOf(minStr) + left;
  checkArr[minIdx] = true;

  for (let i = 0; i < arr.length; i++) {
    if (checkArr[i]) result += arr[i];
  }
  console.log(result);
  answer.push(result);
  recursive(minIdx + 1, right);
  recursive(left, minIdx);
};

recursive(0, arr.length);
