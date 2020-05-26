/*
이해
문자열 s를 숫자로 변환한 결과를 반환하는 함수를 완성하시오

구해야 하는것
'1234'이면 1234반환 -'1234'이면 -1234 반환

계획
맵돌려서 리플레이스로 "제거
*/

const changeStringtoNumber = (s) => {
    return (Number(s.split('').map(i=> {
        if(i=== '-') {
            return '-'
        }
        if(i=== '+') {
            return '+'
        }
        return Number(i);
        }
    ).join('')))
} 

test('changeStringtoNumber', () => {
    expect(changeStringtoNumber("1234")).toBe(1234);
    expect(changeStringtoNumber("-1234")).toBe(-1234);
})