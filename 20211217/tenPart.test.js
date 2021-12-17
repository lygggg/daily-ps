/*
이해
서울시는 6월 1일부터 교통 혼잡을 막기 위해
자동차 10부제를 시행한다. 자동차 10부제는 자동차 번호의 
일의 자리 숫자와 날짜의 일의 자리 숫자가 일치하면 해당 자동차의
운행을 금지하는것. 자동차 번호 일의자리 숫자가 7이면
7,17,27일에 운행하지 못한다. 첫줄에는 날짜의 일의 자리 숫자가
주어지고, 두번째 줄에는 7대의 자동차 번호의 끝 두자리 숫자가
주어진다. 3,[25,23,11,47,53,17,33]

구해야하는것
주어진 날짜와 자동차 일의 자리 숫자를 보고 10부제를 위반하는
차량의 대수를 출력

계획
주어진 날짜의 1의 자리수를 구하고, 배열을 돌면서
요소들의 1자리수를 확인 만약 주어진 날짜의 1의 자리수랑 같으면
카운트 증가후 결과값 리턴
*/

const tenPart = (day, carArray) => {
  const dayOne = String(day).split("");
  console.log(dayOne[dayOne.length - 1]);

  const result = carArray.filter((e) => e % 10 == dayOne[dayOne.length - 1]);
  return result.length;
};

test("tenPart", () => {
  expect(tenPart(3, [25, 23, 11, 47, 53, 17, 33])).toBe(3);
  expect(tenPart(0, [12, 20, 54, 30, 87, 91, 30])).toBe(3);
});
