const maximaizeFormula = (expression) => {
  const result = [];
  const mathExp = ["*", "+", "-"];
  let priorityArr = Permutation(mathExp, 3);
  for (const priority of priorityArr) {
    const expressionArr = expression.split(/(\D)/);
    for (const formula of priority) {
      while (expressionArr.includes(formula)) {
        const index = expressionArr.indexOf(formula);
        expressionArr.splice(
          index - 1,
          3,
          eval(expressionArr.slice(index - 1, index + 2).join(""))
        );
      }
    }
    result.push(Math.abs(expressionArr[0]));
  }
  return Math.max(...result);
};

function Permutation(arr, r) {
  const result = [];
  if (r === 1) return arr.map((num) => [num]);
  arr.forEach((fixed, index, org) => {
    const rest = [...org.slice(0, index), ...org.slice(index + 1)];
    const permutation = Permutation(rest, r - 1);
    const attached = permutation.map((numbers) => [fixed, ...numbers]);
    result.push(...attached);
  });
  return result;
}

test("maximaizeFormula", () => {
  expect(maximaizeFormula("100-200*300-500+20")).toBe(60420);
});
