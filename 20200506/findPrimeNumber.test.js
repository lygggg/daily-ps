/*
이해
- numbers은 한자리 숫자가 적힌 종이를 합친 문자열
- numbers라는 문자열로 만들 수 있는 소수가
몇개인지 답을 리턴해야한다.

계획
- numbers 배열을 하나하나 나눈다.
- 나눈 배열을 1부터 배열의 길이까지 합쳐서 소수면 카운트
를 센다.
- 처음에 찍은수가 0이면 패스한다
- 

*/

const findPrimeNumber = (numbers) => {
    const dNumber = devideNumber(numbers)
    console.log(dNumber)
}

const devideNumber = (numbers) => {
    console.log(numbers);
    return numbers.split('');
}

test.only('devideNumber', () => {
    expect(devideNumber('17')).toEqual(['1','7']);
})

test('findPrimeNumber', () => {
    expect(findPrimeNumber('17')).toBe(3);
    expect(findPrimeNumber('011')).toBe(2);
})