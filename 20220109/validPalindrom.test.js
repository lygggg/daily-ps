const validPalindrom = (arr) => {
  const regex = /[^a-zA-z]/gi;
  const text = arr.replaceAll(regex, "");
  const leftText = [];
  const rightText = [];

  if (text.length % 2 == 0) {
    leftText.push(text.slice(0, Math.floor(text.length / 2)));
    rightText.push(
      text
        .slice(Math.floor(text.length / 2), text.length)
        .toLowerCase()
        .split("")
        .reverse()
        .join("")
    );
  }

  if ((JSON.stringify(leftText) === JSON.stringify(rightText)) === true) {
    return "YES";
  } else {
    return "NO";
  }
};

test("validPalindrom", () => {
  expect(validPalindrom("found7, time: study; Yduts; emit, 7Dnuof")).toBe(
    "YES"
  );
});
