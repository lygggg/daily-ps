/*
이해
1부터 입력받은 숫자 n사이에 있는 소수의 개수를 반환하는 함수를 작성해라

계획
에라토스테네스의 채를 이용해서
2를 제외한 2의 배수를 모두 지운다.
3을 제외한 3의 배수를 모두 지운다
5를 제외한 5의 배수를 모두 지운다
7을 제외한 7의 배수를 모두 지운다. 
*/

const findPrimeNumber = (n) => {
    const arr = new Array(n).fill().map((_,b) => b+=1);
    for(let i=2; i<=Math.floor(Math.sqrt(n)); i++) {
        if(arr[i-1]==false) {
            continue;
        }
        for(let e =i+i; e<=n; e+=i) {
                arr[e-1] = false;
        }
    }
    arr.shift();
    const answer = arr.filter(e=> e!==false)
    return answer.length;
}

test('findPrimeNumber', () => {
    expect(findPrimeNumber(10)).toBe(4)
    // expect(findPrimeNumber(5)).toBe(3)
})