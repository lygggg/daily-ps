const sameCapital = (word) => {
  return word
    .split("")
    .map((e) => e.toUpperCase())
    .join("");
};

test("sameCapital", () => {
  expect(sameCapital("ItisTimeToStudy")).toBe("ITISTIMETOSTUDY");
});
