/*
이해
피보나치 수열로 2이상의 n이 입력되었을 때, n번째 1234567으로 나눈 나머지를 리턴하는 함수를 작성해라.
구해야하는 것
피보나치수열 n번째 값을 1234567으로 나눈 나머지를 리턴해라.
계획
n이 2일때 0+1 =1 
3일때 1+1
4일때 2 +1

1, 1, 2, 3, 5, 8, 13, ...
f(n) = f()
3 = f(n-1)+f(n-2)
*/

const fibonacci = (n) => {
    let A = 0;
    let B = 1;
    let C = A+B;

    for(let i =0; i<n-2; i++){
    A = B;
    B = C;

    C = (A+B)%1234567;
    }
    return C;
}

test('fibonacci', () => {
    expect(fibonacci(3)).toBe(2);
    expect(fibonacci(5)).toBe(5);
})