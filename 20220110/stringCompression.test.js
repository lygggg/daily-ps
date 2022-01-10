const stringCompression = (words) => {
  const result = [];
  words = words.split("");
  let word = [words[0]];
  for (let i = 0; i < words.length; i++) {
    let count = 0;
    for (let j = i; j < words.length; j++) {
      if (words[j] === word[0]) {
        count += 1;
      }

      if (words[j] !== word[0] || j === words.length - 1) {
        result.push(words[i]);
        if (count > 1) {
          result.push(count);
        }
        i += count - 1;
        word = words[j];

        break;
      }
    }
  }

  console.log(result.join());
  return result.join("");
};

test("stringCompresstion", () => {
  expect(stringCompression("KKHSSSSSSSE")).toBe("K2HS7E");
  expect(stringCompression("KKKKKKKKKKKKHHHSEEEE")).toBe("K12H3SE4");
});
