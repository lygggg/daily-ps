const printMiddle = (word) => {
  if (word.length % 2 === 1) {
    return word[parseInt(word.length / 2)];
  } else {
    return [word[word.length / 2 - 1], word[word.length / 2]].join("");
  }
};

test("printMiddle", () => {
  expect(printMiddle("study")).toBe("u");
  expect(printMiddle("good")).toBe("oo");
  expect(printMiddle("studydd")).toBe("d");
  expect(printMiddle("styutred")).toBe("ut");
});
