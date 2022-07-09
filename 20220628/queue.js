const [input, ...rows] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = parseInt(input);
const map = rows.map((e) => e.split(" "));
const result = [];
const queue = {
  arr: [],
  offset: 0,
  push(value) {
    this.arr.push(value);
  },
  pop() {
    if (!this.empty()) {
      return this.arr[this.offset++];
    }
    return;
  },
  check() {
    return this.arr[this.offset];
  },
  size() {
    return this.arr.length - this.offset;
  },
  front() {
    return this.arr[this.offset];
  },
  back() {
    if (this.empty()) {
      return;
    }
    return this.arr[this.arr.length - 1];
  },
  empty() {
    return this.arr.length === this.offset;
  },
};

for (let i = 0; i < N; i++) {
  if (map[i][0] === "push") {
    queue.push(map[i][1]);
  }
  if (map[i][0] === "pop") {
    if (queue.check()) {
      result.push(queue.pop());
    } else {
      result.push(-1);
    }
  }
  if (map[i][0] === "size") {
    result.push(queue.size());
  }
  if (map[i][0] === "empty") {
    if (queue.empty()) {
      result.push(1);
    } else {
      result.push(0);
    }
  }
  if (map[i][0] === "front") {
    if (queue.front()) {
      result.push(queue.front());
    } else {
      result.push(-1);
    }
  }
  if (map[i][0] === "back") {
    if (queue.back()) {
      result.push(queue.back());
    } else {
      result.push(-1);
    }
  }
}
console.log(result.join("\n"));
