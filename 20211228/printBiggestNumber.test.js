/*
이해
배열에서 자신의 바로 앞 수보다 큰수만 출력하는 프로그램

구해야하는것
자신의 바로 앞수보다 큰수만 출력된 배열

계획
filter나 map으로 자기 앞수가 비어있거나
 자신보다 큰수만 출력
*/

const printBiggestNumber = (numbers) => {
  return numbers.filter((e, i) => {
    if (!numbers[i - 1] || numbers[i - 1] < e) {
      return e;
    }
  });
};

test("printBiggestNumber", () => {
  expect(printBiggestNumber([7, 3, 9, 5, 6, 12])).toEqual([7, 9, 6, 12]);
});
