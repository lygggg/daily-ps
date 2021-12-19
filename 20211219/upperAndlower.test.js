const upperAndlower = (word) => {
  let result = word.split("");
  for (let i = 0; i < result.length; i++) {
    if (result[i] === result[i].toLowerCase()) {
      result[i] = result[i].toUpperCase();
    } else {
      result[i] = result[i].toLowerCase();
    }
  }
  return result.join("");
};

test("upperAndlower", () => {
  expect(upperAndlower("StuDY")).toBe("sTUdy");
});
