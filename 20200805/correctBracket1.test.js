/*
이해
괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻 입니다.
'(', ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 리턴하고,
올바르지 않은 괄호이면 false를 리턴하는 함수를 작성해라.

구해야하는 것
s가 올바르게 괄호로 끝나는지 여부를 확인해서 리턴해라.

계획
s를 split으로 배열로 만든후에 for문을 돌려서 배열의 첫번째부터 시작해서 값이 '('이고 다음 값들이 ')'면 해당하는 값들을 지우는 작업을
반복하고 만약 다음 해당하는 값이 '('이 없으면 false를 리턴한다.
*/

const correctBracket = (s) => {
    const sArray = s.split('');
    if(sArray[0] === ')') {
            return false;
        }
    for(let i = 0; i < sArray.length; i++) {
        if(sArray[i] === '(') {
        for(let j = i+1; j < sArray.length; j++) {
            if(sArray[j] === ')') {
                sArray[j] = 0;
                sArray[i] = 0;
                break;
            }
        }
    }
}
if(sArray.filter(e=>e!==0).length >0) {
    return false;
}
return true;
}

test('correctBracket', () => {
    expect(correctBracket('(()(')).toBe(false);
})