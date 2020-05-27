/*
이해
n값을 뒤집어 각 자리 숫자를 원소로 자기느 배열형태로 리턴해라.

구해야 하는것
n이 12345면 [5,4,3,2,1] 을 리턴해라.

계획
n을 배열로 만들고 리버스
*/

const reveseNumbertoArr = (n) => {
    return String(n).split('').map(e=> Number(e)).reverse();
}

test('reverseNumbertoArr', () => {
    expect(reveseNumbertoArr(12345)).toEqual([5,4,3,2,1]);
})