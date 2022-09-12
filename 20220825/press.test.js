/*
i부터 계속 단어를 추가해나가면서 last+next가 없으면 last넣고 푸쉬후
리턴한다.
*/
const press = (msg) => {
  const map = new Map();
  const result = [];
  for (let i = 0; i < 26; i++) {
    map.set(String.fromCharCode(65 + i), i + 1);
  }
  for (let i = 0; i < msg.length; i++) {
    let count = i + 1;
    let word = msg[i];
    while (count < msg.length) {
      if (map.has(word + msg[count])) {
        word += msg[count];
      } else {
        map.set(word + msg[count], map.size + 1);
        break;
      }
      count += 1;
    }
    if (word) {
      i += word.length - 1;
      if (map.has(word)) {
        result.push(map.get(word));
      }
    }
  }
  return result;
};

test("press", () => {
  expect(press("ABABABABABABABAB")).toEqual([1, 2, 27, 29, 28, 31, 30]);
});
