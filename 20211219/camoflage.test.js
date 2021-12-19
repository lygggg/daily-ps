/*
이해
스파이들은 매일 다른 옷을 조합해 자신을 위장한다.
스파이들은 매일 같은 옷을 입을수없다.
스타이가 가진 의상들이 담긴 2차원 배열이 주어질 때
서로 다른 옷 조합의 수를 리턴해라

구해야하는 것
스파이가 옷을 입을 수 있는 조합의 배열수

계획
처음 담을 배열을 만든다.
처음에 한가지씩 모든 종류의 옷을 가진 배열을 만든다.
clothes을 이중포문을 돌면서 만약 해당하는 옷종류가
없으면 map.set로 배열에 넣는다. 그후 개수 리턴


*/

const camoflage = (clothes) => {
  let answer = 1;
  const map = new Map();
  for (let i = 0; i < clothes.length; i++) {
    if (!map.get(clothes[i][1])) {
      map.set(clothes[i][1], 1);
    } else {
      map.set(clothes[i][1], map.get(clothes[i][1]) + 1);
    }
  }
  for (let i of map) {
    answer *= i[1] + 1;
  }
  return answer - 1;
};

test("camoflage", () => {
  expect(
    camoflage([
      ["yellowhat", "headgear"],
      ["bluesunglasses", "eyewear"],
      ["green_turban", "headgear"],
    ])
  ).toBe(5);
});
