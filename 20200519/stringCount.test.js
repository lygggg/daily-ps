/*
이해

- 대문자와 소문자가 섞여있는 문자열 s가 주어진다.
- s에 'p'의 개수와  'y'의 개수를 비교해 같으면  true,
다르면 False를 return 해라
-  p y 모두 하나도 없는 경우는 true를 리턴한다.
- 개수를 비교할 때 대문자 소문자 비교 x

구해야 하는것

s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 

계획

배열 s를 forEach로 탐색하면서 p, P가 나올때마다 카운트를 세주고
y, Y도 나올때마다 카운트를 세준다. 카운트가 같으면 true리턴
다르면 false 리턴 하나도없으면 true 리턴

*/

const stringCount = (s) => {
  let countP = 0;
  let countY = 0;
  s.split("").forEach((e) => {
    if (e === "P" || e === "p") {
      countP += 1;
    }
    if (e === "Y" || e === "y") {
      countY += 1;
    }
  });
  return countP === countY ? true : false;
};

test("stringCount", () => {
  expect(stringCount("pPoooyY")).toBe(true);
});
