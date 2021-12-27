const removeDuplicateWord = (words) => {
  return words.filter((e, i) => {
    return words.indexOf(e) === i;
  });
};

test("removeDuplicateWord", () => {
  expect(
    removeDuplicateWord(["good", "time", "good", "time", "student"])
  ).toEqual(["good", "time", "student"]);
});
