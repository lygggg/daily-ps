/*
이해

문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해 주세요.
s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작다.

계획

split으로 나누고 아스키코드로 변경후 내림차순후에 다시 문자로 바꾸고 조인
*/

const stringSort = (s) => {
    return s.split('').map(e=> e.charCodeAt()).sort((a,b)=> b-a).map(i=> String.fromCharCode(i)).join('');
}

test('stringSort', () => {
    expect(stringSort('Zbcdefg')).toBe('gfedcbZ')
})
