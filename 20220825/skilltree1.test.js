const skilltree = (skill, skill_trees) => {
  const check = skill.split("");
  let result = 0;
  for (word of skill_trees) {
    const set = new Set();
    let bool = true;
    for (e of word.split("")) {
      const index = check.indexOf(e);
      set.add(e);
      if (index !== -1) {
        const checkSlice = check.slice(0, index);
        checkSlice.forEach((e) => {
          if (!set.has(e)) {
            bool = false;
          }
        });
      }
    }
    if (bool) {
      result += 1;
    }
  }
  return result;
};

test("skilltree", () => {
  expect(skilltree("CBD", ["BACDE", "CBADF", "AECB", "BDA"])).toBe(2);
});
