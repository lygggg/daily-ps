/*
이해
정수 x와 n을 입력받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해라.

계획
x부터 x씩 증가하는 배열을 n개의 길이만큼 만들자.
*/

const xIntervalNumber = (x, n) => {
    const arr = [];
    let count = x;
    for(let i = 0; i<n; i++) {
        arr.push(count);
        count+=x;
    }
    return arr;
}

test('xIntervalNumber', () => {
    expect(xIntervalNumber(2, 5)).toEqual([2, 4, 6, 8, 10]);
})