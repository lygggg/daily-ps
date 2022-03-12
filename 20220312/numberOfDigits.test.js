/*
자릿수의 합
N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고, 그 합이 최대인 자연수를 출력하는 프로그램을 작성하세요. 자릿수의 합이
 같은 경우 원래 숫자가 큰 숫자를 답으로 합니다. 만약 235와 1234가 동시에 답이 될 수 있다면 1234를 답으로 출력해야 합니다.

계획
배열을 확인하면서 자릿수를 다 더한값과 index를 배열에 넣고, 가장 큰 값을 구한후 만약 같은값이 있다면 같은값들의 기존 배열에 있는 값들중 큰 값을
리턴한다.
*/

const numberOfDigits = (N, arr) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push({
      index: i,
      number: String(arr[i])
        .split("")
        .reduce(function add(sum, curr) {
          return sum + Number(curr);
        }, 0),
      arrNumber: arr[i],
    });
  }

  result.sort((a, b) => b.number - a.number);
  const maxArr = result.filter((e, i) => e.number === result[0].number);
  maxArr.sort((a, b) => b.arrNumber - a.arrNumber);
  return maxArr[0].arrNumber;
};

test("numberOfDigits", () => {
  expect(numberOfDigits(7, [128, 460, 603, 40, 521, 137, 123])).toBe(137);
});
