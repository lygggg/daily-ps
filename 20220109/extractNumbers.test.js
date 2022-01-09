const extractNumbers = (words) => {
  const regex = /[^0-9]/gi;
  const numbers = words.replaceAll(regex, "").split("");
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] !== "0") {
      break;
    }
    if (numbers[i] == "0") {
      numbers[i] = "";
    }
  }

  return Number(numbers.join(""));
};

test("extrackNumbers", () => {
  expect(extractNumbers("g0en2T0s8eSoft")).toBe(208);
});
