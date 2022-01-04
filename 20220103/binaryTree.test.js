const binaryTree = (arr) => {
  let num = arr[0];
  conculate(arr, num, (result = []));
};

const conculate = (arr, num, result) => {
  if (num > arr.length) {
    return;
  } else {
    conculate(arr, num * 2, result);
    conculate(arr, num * 2 + 1, result);
    result.push(num);
  }
};

test("binaryTree", () => {
  expect(binaryTree([1, 2, 3, 4, 5, 6, 7])).toBe();
});
