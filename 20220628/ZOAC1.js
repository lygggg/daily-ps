const [input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const arr = input.split("");
const answer = [];
const checkArr = Array(arr.length).fill(false);

const recursive = (l, r) => {
  if (l === r) return;
  const min = arr.slice(l, r).sort()[0];
  const minIndex = arr.slice(l, r).indexOf(min) + l;
  checkArr[minIndex] = true;
  for (let i = 0; i < arr.length; i++) {
    if (checkArr[i]) {
      answer[i] = arr[i];
    }
  }
  console.log(answer.join(""));
  recursive(minIndex + 1, r);
  recursive(l, minIndex);
};

recursive(0, arr.length);
