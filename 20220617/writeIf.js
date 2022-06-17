const [n, m, ...rows] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = parseInt(n.split(" ")[0]);
const arr = m
  .split(" ")
  .map((e) => parseInt(e))
  .sort((a, b) => a - b);
const map = rows.map((e) => e.split(" ").map((e) => parseInt(e)));

const leftLine = (line) => {
  start = 0;
  end = N - 1;
  while (start <= end) {
    const mid = Math.ceil((start + end) / 2);
    if (arr[mid] === line[1]) {
      return mid;
    }
    if (arr[mid] > line[1]) {
      end = mid - 1;
    } else if (arr[mid] < line[1]) {
      start = mid + 1;
    }
  }
  return end;
};

const rightLine = (line) => {
  let start = 0;
  let end = N;
  while (start <= end) {
    const mid = Math.ceil((start + end) / 2);
    if (arr[mid] === line[0]) {
      return mid;
    }
    if (arr[mid] >= line[0]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return start;
};
for (line of map) {
  const left = leftLine(line);
  const right = rightLine(line);
  console.log(left - right + 1);
}
