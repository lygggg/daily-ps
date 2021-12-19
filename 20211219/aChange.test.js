const aChange = (word) => {
  let result = word.split("");
  for (let i = 0; i < word.length; i++) {
    if (word[i] === "A") {
      result[i] = "#";
    }
  }
  return result.join("");
};

test("aChange", () => {
  expect(aChange("BANANA")).toBe("B#N#N#");
});
