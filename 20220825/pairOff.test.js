const pairOff = (s) => {
  let sSplit = s.split("");
  const stack = [];

  for (let i = 0; i < sSplit.length; i++) {
    if (stack.length > 0) {
      if (stack[stack.length - 1] === sSplit[i]) {
        stack.pop();
      } else {
        stack.push(sSplit[i]);
      }
    } else {
      stack.push(sSplit[i]);
    }
  }

  if (stack.length > 0) {
    return 0;
  } else {
    return 1;
  }
};

test("pairOff", () => {
  expect(pairOff("baabaa")).toBe(1);
});
