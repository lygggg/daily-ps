const findWord = (words, word) => {
  let count = 0;
  for (let i of words.split("")) if (i === word) count += 1;
  return count;
};

test("findWord", () => {
  expect(findWord("COMPUTERPROGRAMMING", "R")).toBe(3);
});
