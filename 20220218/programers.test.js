const programers = (k, m, names, amounts) => {
  const resultArr = [];
  let resent = 0;
  let count = 1;

  names.forEach((e, i) => {
    if (resent === e.toLowerCase()) {
      count += 1;
    } else {
      count = 1;
    }
    resent = e.toLowerCase();
    if (count >= k || amounts[i] >= m) {
      resultArr.push(names[i]);
    }
  });
  return resultArr.length;
};

test("programers", () => {
  expect(
    programers(
      3,
      50000,
      [
        "msLEE",
        "jsKim",
        "jsKIM",
        "jskiM",
        "jskim",
        "John",
        "john",
        "John",
        "msLEE",
        "msLEE",
        "jsKIM",
        "roy",
      ],
      [
        950, 52524, 1400, 6055, 10000, 4512, 512, 52000, 9000, 49000, 1400,
        50000,
      ]
    )
  ).toBe(5);
  expect(
    programers(
      2,
      3451,
      ["abcd", "aBCd", "jsKIM", "rrr", "rrr"],
      [950, 1000, 1400, 4000, 10000]
    )
  ).toBe(3);
});
