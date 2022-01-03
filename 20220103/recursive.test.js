const recursive = (number) => {
  let i = 0;
  conculate(number, i, (arr = []));
  console.log(arr);
  return arr;
};

const conculate = (number, i, arr) => {
  if (i === number) {
    return;
  }
  i += 1;
  arr.push(i);
  conculate(number, i, arr);
};

test("recursive", () => {
  expect(recursive(3)).toEqual([1, 2, 3]);
});
