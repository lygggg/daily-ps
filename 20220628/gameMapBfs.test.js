const dx = [0, 0, -1, 1]; // 상 하 좌 우
const dy = [-1, 1, 0, 0];

class State {
  constructor(x, y, count) {
    this.x = x;
    this.y = y;
    this.count = count;
  }
}

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

const gameMapBfs = (maps) => {
  let result;
  // 완전 탐색 자료구조 - DFS(queue), BFS(Queue)
  // 앞으로 탐색해야할 상태를 담고 있음
  const queue = new Queue();
  // 초기 상태 삽입
  queue.push(new State(0, 0, 1));
  // 문제에서 주어진 크기에 따라 방문 검사 배열 정의
  // State가 포함하는 변수의 개수에 따라 차원의 수가 결정됨
  const isVisited = Array.from(Array(maps.length), () =>
    Array(maps[0].length).fill(0)
  );
  isVisited[0][0] = true;

  // 탐색할 상태가 남아있는 동안 계속 검사
  while (!queue.isEmpty()) {
    // 현재 방문할 상태
    const { x, y, count } = queue.pop();

    //state에 대한 처리
    if (y === maps.length - 1 && x === maps[0].length - 1) {
      return count;
    }
    for (let i = 0; i < 4; i++) {
      const nx = dx[i] + x;
      const ny = dy[i] + y;
      if (!nx < 0 || ny < 0 || ny >= maps.length || nx >= maps[0].length) {
        continue;
      }
      if (!maps[ny][nx]) {
        continue;
      }
      if (isVisited[ny][nx]) {
        continue;
      }

      // 방문 처리
      // 완전 탐색 자료구조에 넣어줬다.
      isVisited[ny][nx] = true;
      queue.push(new State(nx, ny, count + 1));
    }
  }
  if (!result) {
    return -1;
  }
};

test("gameMapBfs", () => {
  expect(
    gameMapBfs([
      [1, 0, 1, 1, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 1, 1, 1],
      [1, 1, 1, 0, 0],
      [0, 0, 0, 0, 1],
    ])
  ).toBe(-1);
});
