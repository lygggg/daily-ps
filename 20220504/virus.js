/*
이해
신종 바이러스인 웜 바이러스는 네트워크를 통해 전파된다. 한 컴퓨터가 웜 바이러스에 걸리면
그 컴퓨터와 네트워크 상에서 연결되어 있는 모든 컴퓨터는 웜 바이러스에 걸리게 된다.
예를 들어 7대의 컴퓨터가 <그림 1>과 같이 네트워크 상에서 연결되어 있다고 하자.
1번 컴퓨터가 웜바이러스에 걸리면 웜 바이러스는 2번과 5번 컴퓨터를 거쳐 3번과 6번
컴퓨터까지 전파되어 2,3,5,6 네 대의 컴퓨터는 웜 바이러스에 걸리게 된다.
하지만 4번과 7번 컴퓨터는 1번 컴퓨터와 네트워크상에서 연결되어 있지 않기 때문에 영향을 받지 않는다.

어느 날 1번 컴퓨터가 웜 바이러스에 걸렸다. 컴퓨터의 수와 네트워크 상에서 서로 연결되어 있는
정보가 주어질 때, 1번 컴퓨터를 통해 웜 바이러스에 걸리게 되는 컴퓨터의 수를 출력하세요.
*/
class Queue {
  offset_ = 0;
  container_ = [];

  push(value) {
    this.container_.push(value);
  }

  pop() {
    return this.container_[this.offset_++];
  }

  isEmpty() {
    return this.container_.length === this.offset_;
  }
}

const [Ns, Ms, ...rows] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = parseInt(Ns);
const M = parseInt(Ms);

const map = Array.from(new Array(N), () => []);
rows
  .map((row) => row.split(" ").map((e) => parseInt(e) - 1))
  .forEach(([u, v]) => {
    map[u].push(v);
    map[v].push(u);
  });

console.log(map);

let count = 0;
const que = new Queue();

que.push(0);

const isVisited = new Array(M).fill(false);
isVisited[0] = true;

while (!que.isEmpty()) {
  const state = que.pop();
  count += 1;
  for (const next of map[state]) {
    if (isVisited[next]) {
      continue;
    }
    isVisited[next] = true;
    que.push(next);
  }
}

console.log(count - 1);
