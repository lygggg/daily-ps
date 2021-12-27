/*
이해
문자열에서 중복된 문자를 제거해서 출력
구해야하는것
문자열에서 중복된 값이 제거된 문자열
계획

*/
const removeDuplicateText = (word) => {
  return word
    .split("")
    .filter((e, i) => {
      return word.indexOf(e) === i;
    })
    .join("");
};

test("removeDuplicateText", () => {
  expect(removeDuplicateText("ksekkset")).toBe("kset");
});
