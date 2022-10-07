const dictionaryOfVowels1 = (word) => {
  const obj = {
    A: 0,
    E: 1,
    I: 2,
    O: 3,
    U: 4,
  };
  const plus = [781, 156, 31, 6, 1];
  return word
    .split("")
    .reduce((acc, ch, idx) => obj[ch] * plus[idx] + acc + 1, 0);
};

const dictionaryOfVowels2 = (word) => {
  const result = [];
  const str = "";
  for (let i = 1; i <= 5; i++) dfs(str, i, result);
  return result.sort().indexOf(word) + 1;
};

const dfs = (word, length, result) => {
  const vowels = [..."AEIOU"];
  if (length === word.length) {
    result.push(word);
    return;
  }
  vowels.forEach((vowel) => {
    dfs(word + vowel, length, result);
  });
};
test("dictionaryOfVowels", () => {
  expect(dictionaryOfVowels1("AAAAE")).toBe(6);
  expect(dictionaryOfVowels2("AAAAE")).toBe(6);
});

/*
1,6,31,156,781
*/
