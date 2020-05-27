/*
이해
자연수 N이 주어지면 N의 각 자리수를 합해서 리턴해라

계획
n을 배열로 만들어서 forEach 로 하나씩 더하면 끝
*/

const plusPlace = (n) => {
    let answer = 0;
    String(n).split('').forEach(e=> {
        answer += e/1;
    })
    return answer;
}

test('plusPlace', () => {
    expect(plusPlace(123)).toBe(6);
    expect(plusPlace(987)).toBe(24);
})