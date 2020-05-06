/*
이해 
인쇄 대기목록의 가장 앞에 있는 문서 j를 꺼냅니다.
나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 있으면 J를 대기목록의 가장 마지막에
아니면 J를 인쇄한다.
A,B,C,D  2132 라면 CDAB다.
내가 선택한 문서가 몇번째로 인쇄 되는지 알고 싶다.
중요 순서도가 담긴 배열 prioritles와 대기목록의 위치 location이 주어진다.
내가 요청한 문서가 몇번째로 인쇄되는지 리턴해라

계획
처음부터 카운트를 세고 앞에서부터 차례대로 빼서 남은 배열과 비교한다.
자신보다 큰 수가 있으면 카운트를 세고 뒤로 넣는다
반복하다가 location 의 위치가 되면 그 카운트를 반환한다.
*/

const printer = (priorities, location) => {
  const startN = priorities[0];
  let count = 0;
  const obPriorities = priorities.map((e, i) => ({ index: i, prioriti: e }));
  while(true) {
    
  }
  // priorities.map((e, index) => {
  //   count++;

    // obPriorities.map((i) => {
    //   if (e < i) {
    //     const shiftNumber = priorities.shift();
    //     console.log(shiftNumber);
    //     priorities.push(shiftNumber);
    //   }
    //   if (index === i.index) {
    //     console.log("시발");
    //   }
    // });
  // });

  console.log(obPriorities);
};

test("printer", () => {
  expect(printer([2, 1, 3, 2], 2)).toBe(1);
  expect(printer([1, 1, 9, 1, 1, 1], 0)).toBe(5);
});
