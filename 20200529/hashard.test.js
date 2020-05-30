/*
이해
양의 정수 x가 하샤드 수이면 x의 자릿수의 합으로 x가 나누어져야 합니다.
예를 들어 18의 자릿수 합은 1+8=9이고 18은 9로 나누어 떨어지므로 18은 하샤드 수 입니다.
자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하시오

계획
arr를 배열로 만들어서 더하고 10이랑 나눈다. 나누어 떨어지면true 아니면 false
*/

const hashard = (arr) => {
   return arr % String(arr).split('').reduce((a, b) => Number(a) + Number(b)) === 0 ? true : false;
}

test('hashard', () => {
    expect(hashard(10)).toBe(true);
})