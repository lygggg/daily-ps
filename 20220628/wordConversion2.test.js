/*
1. begin,words split 해서 정렬
2. 체크 어레이를 만들어주고,words에서 begin이랑 단어가 하나 다른것을
찾아서 체크해주고 해당 단어로 변환, 계속해서 BFS로 탐색
3. 만약 단어가 target과 같으면 카운트 리턴  
*/

const wordCheck = (word, orderWord) => {
  let count = 0;
  const set = new Set();
  const splitWord = word.split("");
  const splitOrderWord = orderWord.split("");
  for (let i = 0; i < splitWord.length; i++) {
    if (splitWord[i] === splitOrderWord[i]) {
      count += 1;
    }
  }
  if (count === splitWord.length - 1) {
    return true;
  } else {
    false;
  }
};

const wordConversion = (begin, target, words) => {
  for (let i = 0; i < words.length; i++) {
    const isVisited = Array(words.length).fill(0);
    if (wordCheck(begin, words[i])) {
      isVisited[i] = true;
      return BFS(words[i], words, isVisited, target);
    }
  }
};

class State {
  constructor(word, count) {
    this.word = word;
    this.count = count;
  }
}

function BFS(word, words, isVisited, target) {
  // 완전 탐색 자료구조 - DFS(Stack), BFS(Queue)
  // 앞으로 탐색해야할 상태를 담고 있음
  const queue = new Queue();
  // 초기 상태 삽입
  queue.push(new State(word, 1));
  // 문제에서 주어진 크기에 따라 방문 검사 배열 정의
  // State가 포함하는 변수의 개수에 따라 차원의 수가 결정됨

  // 탐색할 상태가 남아있는 동안 계속 검사
  while (!queue.isEmpty()) {
    // 현재 방문할 상태
    const { word, count } = queue.pop();
    // state에 대한 처리
    if (word === target) {
      return count;
    }
    for (let i = 0; i < words.length; i++) {
      if (!wordCheck(word, words[i])) {
        continue;
      }
      if (isVisited[i]) {
        continue;
      }

      // 방문 처리
      // 완전 탐색 자료구조에 넣어줬다.
      isVisited[i] = true;
      queue.push(new State(words[i], count + 1));
    }
  }
  return 0;
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

test("wordConversion", () => {
  expect(wordConversion("aab", "aba", ["abb", "aba"])).toBe(2);
});
