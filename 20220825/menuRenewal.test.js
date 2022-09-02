/*
주의사항
1. 코스요리 메뉴는 최소 2가지 이상의 단품메뉴
2. 최소 2명 이상의 손님으로부터 주문된 단품메뉴
*/

const menuRenewal = (orders, course) => {
  const splitOrders = orders.map((e) => e.split("").sort());
  const map = new Map();
  const result = [];
  for (let i = 0; i < splitOrders.length; i++) {
    for (let j = 0; j < course.length; j++) {
      if (splitOrders[i].length < course[j]) {
        continue;
      }
      const combinationArr = combination(splitOrders[i], course[j]);
      combinationArr.forEach((e) => {
        const word = e.join("");
        if (map.has(word)) {
          map.set(word, map.get(word) + 1);
        } else {
          map.set(word, 1);
        }
      });
    }
  }

  const mapArr = [...map];
  course.forEach((e) => {
    const maxMenu = mapArr
      .filter(([menu, index]) => {
        if (index < 2) {
          return;
        }
        if (menu.length === e) {
          return [menu, index];
        }
      })
      .sort((a, b) => b[1] - a[1]);

    maxMenu.forEach((e) => {
      if (e[1] === maxMenu[0][1]) {
        result.push(e[0]);
      }
    });
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
