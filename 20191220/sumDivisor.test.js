/*
문제 설명
정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.
n	return
12	28
5	6

계획
- n의 약수를 구한다.
n의 약수를 구할때마다 더해준다.
약수의 합을 리턴한다.
*/
const sumDivisor = (n) => {
    const array = [1, 2, 3, 4, 5];
    const test = array.map(num => num * 3);
    console.log(test);
}

test('sumDivisor',() => {
    expect(sumDivisor(12)).toBe(28);
    expect(sumDivisor(5)).toBe(6);
})

