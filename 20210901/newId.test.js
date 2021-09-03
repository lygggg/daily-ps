/*
프로그래머스 카카오 블라인드 신규 아이디 추천문제
이해
7단계의 순차적인 처리과정을 거치고 만약 규칙에 맞지않으면 새로운 아이디를 추천해준다.

구해야하는것
해당 조건을 거치고 난후의 아이디를 구해야한다.

계획
단계마다 필터를 사용해 고쳐나간후 정답을 리턴한다.

후기
정규식에 익숙하지 않은 상황에서 테스트코드를 작성해서 해결하려고하니
코드가 너무 길어져서 정규식을 따로 보고 풀었다.
*/
const newId = (new_id) => {
  const result = removeLastWord(doubleWord(removeWord(lowerCase(new_id))))
    .replace(/^$/g, "a")
    .substr(0, 15)
    .replace(/\.$/g, "")
    .replace(/^(.)$/, "$1$1$1")
    .replace(/^(.)(.)$/, "$1$2$2");

  return result;
};
const lowerCase = (id) => {
  return id
    .split()
    .map((i) => i.toLowerCase())
    .join();
};

const removeWord = (id) => {
  id = id.match(/[a-z0-9-_.]/g).join("");
  return id;
};

const doubleWord = (id) => {
  const result = id
    .split("")
    .filter((value, index) => value !== id.split("")[index + 1])
    .join("");
  return id.replace(/\.+/g, ".");
};

const removeLastWord = (id) => {
  let result = id.split("");
  if (result[0] == ".") {
    result.shift();
  }

  if (result[result.length - 1] == ".") {
    result.pop();
  }
  return result.join("");
};

test("lowerCase", () => {
  expect(lowerCase("...!@BaT#*..y.abcdefghijklm")).toBe(
    "...!@bat#*..y.abcdefghijklm"
  );
});

test("removeWord", () => {
  expect(removeWord("...!@bat#*..y.abcdefghijklm")).toBe(
    "...bat..y.abcdefghijklm"
  );
});

test("doubleWord", () => {
  expect(doubleWord("...bat..y.abcdefghijklm")).toBe(".bat.y.abcdefghijklm");
});

test("removeLastWord", () => {
  expect(removeLastWord(".bat.y.abcdefghijklm")).toBe("bat.y.abcdefghijklm");
});

test("newId", () => {
  expect(newId("...!@BaT#*..y.abcdefghijklm")).toBe("bat.y.abcdefghi");
});
