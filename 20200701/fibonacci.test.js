/*
이해
피보나치 수열로 2이상의 n이 입력되었을 때, n번째 1234567으로 나눈 나머지를 리턴하는 함수를 작성해라.
구해야하는 것
피보나치수열 n번째 값을 1234567으로 나눈 나머지를 리턴해라.
계획
n이 2일때 0+1 =1 
3일때 1+1
4일때 2 +1

*/

const fibonacci = (n) => {
    let count = 2;
    let num = 0;
    let num1 = 0;
    let num2 = 1;
    while(count !== n) {
        num = num1 + num2;

        num1 = num2;
        num2 = num;
        count+=1;
    }
}

test('fibonacci', () => {
    expect(fibonacci(3)).toBe(2);
})