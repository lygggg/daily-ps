/*
재귀함수 연습문제
팩토리얼
*/

// function factorial(n) {
//     let result = 1;
//     i=2;
//     for(let i = n;i >= 1; i--) {
//         result *= i;
//     }
//     return result;
// }

function factorial(n) {
    if(n === 1){
        return 1;
    }
    return n * factorial(n-1);
}

test('factorial', () => {
    expect(factorial(5)).toBe(10); // 5 * 4 * 3 * 2 * 1
})