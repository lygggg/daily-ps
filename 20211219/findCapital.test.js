const findCapital = (word) => {
  let count = 0;
  for (let i of word.split("")) if (i !== i.toLowerCase()) count += 1;
  return count;
};

test("findCapital", () => {
  expect(findCapital("KoreaTimeGood")).toBe(3);
});
