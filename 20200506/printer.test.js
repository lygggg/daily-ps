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
객체배열을 만든다.
내가 선택하려는 수가 그 배열의 맥스값이 아니라면 
그 해당 값을 shift해서 push로 뒤에 넣는다.
만약 내가 선택하려는 수가 최대값이면 뽑는다.
내가 뽑은값이 내가 원하는 location 값이면 반복문을 멈추고
count를 리턴한다. 

*/

const printer = (priorities, location) => {
  let count = 0;
  const obPriorities = priorities.map((e, i) => ({ index: i, value: e }));
  while(true) {
    if(obPriorities[0].value == Math.max.apply(null, priorities)) {
      count+=1;
      if(obPriorities[0].index === location){
        return count;
      }
      obPriorities.shift();
      priorities.shift();
    }
    if(priorities[0] !== Math.max.apply(null,priorities)) {
      const startN = obPriorities.shift();
      obPriorities.push(startN);
      const start = priorities.shift();
      priorities.push(start);
      
    }
  }
};

test("printer", () => {
  // expect(printer([2, 1, 3, 2], 2)).toBe(1);
  expect(printer([1, 1, 9, 1, 1, 1], 0)).toBe(5);
});
