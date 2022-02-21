/*
이해
숫자 문자열과 영단어
네오와 프로도가 숫자놀이를 하고 있습니다. 네오가 프로도에게
숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면 프로도는
원래 숫자를 찾는 게임입니다.

다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.
- 1478 -> one4seveneight
- 234567 -> 23four5six7
- 10203 -> 1zerotwozero3

계획
결과 배열과 임시 배열을 하나 생성하고 s배열을 첫번쨰부터 지나가면서
숫자면 그냥 결과배열에 넣고 아니면 임시배열에 넣는다.
넣으면서 만약 임시배열 값이 changeArr값에 있으면 value값에 맞는
key 값을 결과배열에 넣고 임시배열을 초기화한다.
*/
const numberStringWords = (s) => {
  const changeArr = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
  };
  const result = [];
  let tmp = [];
  s.split("").forEach((e, i) => {
    if (!isNaN(e)) {
      result.push(e);
      return;
    }
    tmp.push(e);

    const number = Object.keys(changeArr).find(
      (key) => changeArr[key] === tmp.join("")
    );

    if (number) {
      result.push(number);
      tmp = [];
    }
  });
  return Number(result.join(""));
};

test("numberStringWords", () => {
  expect(numberStringWords("one4seveneight")).toBe(1478);
});
