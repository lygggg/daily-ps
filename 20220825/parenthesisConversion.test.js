const parenthesisConversion = (p) => {
  if (p === "") {
    return "";
  }
  let count = 0;
  let bool = false;
  let txt = "";

  for (let i = 0; i < p.length; i++) {
    if (p[i] === "(") count += 1;
    else if (p[i] === ")") count -= 1;
    if (count < 0) {
      bool = true;
    }
    if (count === 0) {
      const u = p.slice(0, i + 1);
      const v = p.slice(i + 1, p.length);
      if (bool) {
        txt += "(";
        txt += parenthesisConversion(v);
        txt += ")";
        for (let j = 1; j < i; j++) {
          if (p[j] === ")") txt += "(";
          if (p[j] === "(") txt += ")";
        }
        return txt;
      } else {
        txt += u;
        txt += parenthesisConversion(v);
        return txt;
      }
    }
  }
};

test("parenthesisConversion", () => {
  expect(parenthesisConversion("()))((()")).toEqual("()(())()");
});
