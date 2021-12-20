const longWord = (count, words) => {
  const arr = {};
  for (let i = 0; i < count; i++) {
    arr[words[i]] = words[i].length;
  }
  return Object.keys(arr).sort(function (a, b) {
    return arr[b] - arr[a];
  })[0];
};

test("longWord", () => {
  expect(longWord(5, ["teacher", "time", "student", "beautiful", "good"])).toBe(
    "beautiful"
  );
});
