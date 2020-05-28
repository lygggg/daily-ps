/*
이해
주어진수에 1이 될때까지 다음 작업을 반복하면 모든 수를 1로 만들수있다는 추측이다.
작업은 다음과 같다.
1. 입력된 수가 짝수라면 2로 나눈다.
2. 입력된 수가 홀수라면 3을 곱하고 1을 더한다.
3. 결과로 나온 수에 작업을 1이 될떄까지 반복한다.
계획
반복문으로 카운트 세면서 위 연산을 해주고 카운트가 500이 넘어가면 그냥 -1리턴
*/
const collatz = (num) => {
    let count = 0;
    return collatz1(num,count);
}

const collatz1 = (answer, count) => {
    if(count >= 500) {
        return -1;
    }
    if(answer == 1) {
        return count;
    }
    if(answer % 2 === 0) {
        count++;
       return collatz1(answer/2, count);
    }

    if(answer % 2 === 1) {
        count++;
       return collatz1(answer*3+1, count);
    }
}

test('collatz', () => {
    expect(collatz(6)).toBe(8);
    expect(collatz(16)).toBe(4);
})

