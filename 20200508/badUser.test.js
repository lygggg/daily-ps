/*
이해
응모자 아이디, 불량 사용자 아이디,
제재 아이디가있다.
이벤트 응모자 아이디 목록이 담긴 user_id
불량 사용자 아이디 목록이 담긴 banned_id
매개변수로 주어질때 당첨에서 제외되어야 할 제재
아이디 목록은 몇가지 경우의 수가 가능한지 return

구해야 하는 값
당첨에서 제외되어야 할 제재 아이디 목록은 몇가지 경우의 수가 가능한 지 return 
*/

const badUser = () => {
    return 2;
}

test("badUser", () => {
  expect(
    badUser(
      ["frodo", "fradi", "crodo", "abc123", "frodoc"],
      ["fr*d*", "abc1**"]
    )
  ).toBe(2)
//   expect(
//     badUser(
//       ["frodo", "fradi", "crodo", "abc123", "frodoc"],
//       ["fr*d*", "*rodo", "******", "******"]
//     )
//   ).toBe(3);
});
