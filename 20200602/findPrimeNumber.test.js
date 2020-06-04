/*
이해
1부터 입력받은 숫자 n사이에 있는 소수의 개수를 반환하는 함수
소수는 1과 자기 자신만으로만 나누어지는 함수를 말한다.

계획
1부터 n까지 1과 자기자신만으로 나누어지는 수를 반환한다.
*/

const findMinority = (n) => {
    let arr = new Array(n).fill().map((_,i) => i+1);
    for(let i = 2; i<=Math.floor(Math.sqrt(n)); i++) {
        if(arr[i-1]===false) {
            continue;
        }
        for(let e = i+i; e<=n; e+=i) {
            arr[e-1] = false;
        }
    }
    const answer = arr.filter(e=> e!==false);
    answer.shift();
    return answer.length;
}

test('findMinority', () => {
    expect(findMinority(10)).toBe(4);
    // expect(findMinority(5)).toBe(3);
})