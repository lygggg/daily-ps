/*
이해

문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수
s가 a234면 False 1234면 true를 리턴한다.

계획

s의길이가 4또는 6이 아니면 false리턴
s가 전부 숫자가 아니면 false 리턴 아니면트루
*/

const stringPile = (s) => {
    if((s.split("").map((e) => Number(e)).includes(NaN))) {
        return false;
    }
  if (s.length === 4 || s.length === 6){
    return true;
  }
  return false;
}

test("stringPile", () => {
  expect(stringPile("a234")).toBe(false);
  expect(stringPile('1e22')).toBe(false);
  expect(stringPile('1234')).toBe(true);
});
