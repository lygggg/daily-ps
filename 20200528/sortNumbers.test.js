/*
이해
n을 매개변수로 받아서 n을 내림차순으로 정렬하시오.

계획
n을 배열에 넣고 내림차순후 조인
*/

const sortNumbers = (n) => {
    return +String(n).split('').sort((a, b) => b-a).join('');
}

test('sortNumbers', () => {
    expect(sortNumbers(118372)).toBe(873211);
})