/*
이해
앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 회문 문자열이라고 한다.
문자열이 입력되면 해당 문자열이 회문 문자열이면 YES, 회문 문자열이 아니면 NO를 출력한다.

구해야하는것
회문 문자열인지 확인하고 결과를 출력한다.

계획
문자열을 반으로 잘라서 거꾸로 뒤집은후 같으면 YES아니면 NO출력
*/

const associationString = (string) => {
  string = string.toLowerCase();
  if (
    [...string].splice(0, Math.floor(string.length / 2)).join() ===
    [...string]
      .splice(Math.floor(string.length / 2), Math.floor(string.length / 2))
      .reverse()
      .join()
  ) {
    return "YES";
  }

  return "NO";
};

test("associationString", () => {
  expect(associationString("gooG")).toBe("YES");
});
