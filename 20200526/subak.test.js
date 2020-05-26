/*
이해
길이가 n이고, "수박수박수박수" 같은 패턴을 유지하는 문자열을리턴하는
함수를 완성해라.
n이 4면 "수박수박", n이 3이면 "수박수"를 리턴

구해야 하는 것
n의 길이에 따라 수박수를 리턴

계획
1부터 n까지 반복문을 돌려서 홀수면 수 짝수면 박 출력
*/

const subak = (n) => {
    const arr = [];
    for(let i= 1; i<=n; i++) {
        if(i % 2 === 0) {
            arr.push('박')
        }
        
        if(i % 2 === 1) {
            arr.push('수')
        }
    }
    return arr.join('');
}

test('subak', () => {
    expect(subak(3)).toBe('수박수');
    expect(subak(4)).toBe('수박수박');
})