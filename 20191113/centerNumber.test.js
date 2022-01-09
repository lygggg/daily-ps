function centernumber(input) {
  return input.substr(
    Math.ceil(input.length / 2) - 1,
    input.length % 2 === 0 ? 2 : 1
  );
}

test("centernumber", () => {
  expect(centernumber("asdf")).toBe("sd");
  expect(centernumber("asdfg")).toBe("d");
});
