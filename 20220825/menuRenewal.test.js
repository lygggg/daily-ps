const menuRenewal = (orders, course) => {
  const splitOrders = orders.map((e) => e.split("").sort());
  const map = new Map();

  for (const splitOrder of splitOrders) {
    for (const count of course) {
      if (splitOrder.length < count) continue;
      const combinationArr = combination(splitOrder, count);
      combinationArr.forEach((e) => {
        const word = e.join("");
        map.has(word) ? map.set(word, map.get(word) + 1) : map.set(word, 1);
      });
    }
  }

  const result = [];
  course.forEach((e) => {
    const maxMenu = [...map]
      .filter(([menu, index]) => {
        if (index < 2) return;
        if (menu.length === e) return [menu, index];
      })
      .sort((a, b) => b[1] - a[1]);
    maxMenu.forEach((e) => e[1] === maxMenu[0][1] && result.push(e[0]));
  });
  return result.sort();
};

function combination(arr, num) {
  const res = [];
  if (num === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const rest = arr.slice(idx + 1);
    const combinations = combination(rest, num - 1);
    const attach = combinations.map((combination) => [v, ...combination]);
    res.push(...attach);
  });
  return res;
}

test("menuRenewal", () => {
  expect(
    menuRenewal(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2, 3, 5])
  ).toEqual(["ACD", "AD", "ADE", "CD", "XYZ"]);
});
