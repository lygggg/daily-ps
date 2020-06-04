/*
이해
1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수를 작성해라.

구해야 하는 것
1부터 n까지의 소수

계획
에라토스테네스의 채를 이용하여 2부터 n의 제곱근 반올림 까지 +1씩 증가하면서
2를 제외한 2의배수, 3을 제외한 3의배수, 5를 제외한 5의 배수를 false로 변경한다.
만약 첫번째 반복문에서 해당값이 false면 continu를 사용해서 다음 구문으로 넘긴다.
*/

const findPrimeNumber = (n) => {
  const arr = new Array(n).fill().map((_, a) => a + 1);
  for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
      if (arr[i - 1] === 0) {
      continue;
    }
    for (let e = i + i; e <= n; e += i) {
      arr[e - 1] = 0;
    }
  }
  arr.shift();
  const answer = arr.filter((e) => e !== 0);
  return answer.length;
};

test("findPrimeNumber", () => {
  expect(findPrimeNumber(10)).toBe(4);
  // expect(findPrimeNumber(5)).toBe(3)
});
