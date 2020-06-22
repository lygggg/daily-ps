/*
이해

스파이는 매일매일 옷이 바껴야한다.
스파이가 가진 의상들이 담긴 2차원 배열 clothes가 주어질 때 서로 다른 옷의 조합의 수를 리턴해라
스파이가 가진 의상의 수는 1개이상 30개 이하다.
스파이는 하루 최소 한 개의 의상을 입니다.

구해야하는 것

최대 입을 수 있는 의상 조합의 수

계획

*/

const camouflage = (clothes) => {
  var closet = clothes.reduce((a, c) => {
    a[c[1]] = a[c[1]] ? a[c[1]] + 1 : 1;
    return a;
  }, {});

  let result = 1;
  Object.values(closet).forEach((e) => (result *= e + 1));
  return result - 1;
};

test("camouflage", () => {
  expect(
    camouflage([
      ["yellow_hat", "headgear"],
      ["blue_sunglasses", "eyewear"],
      ["green_turban", "headgear"],
    ])
  ).toBe(5);
});
