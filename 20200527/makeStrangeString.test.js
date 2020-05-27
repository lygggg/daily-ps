/*
이해
문자열 s는 한 개 이상의 단어로 구성되어있다.
각 단어는 하나 이상의 공백문자로 구분되어 있다.
각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수
를 완성해라.

구해야하는 것
s를 배열로 만들어서 공백별로 끊은후 홀수면 대문자 짝수면 소문자를 출력한다.
*/

const makeStrangeString = (s) => {
    let index = 0;
    
    return s.split('').map(e=> {
        if(e ===' '){
            index = 0;
            return ' ';
        }

        if(index % 2 === 0) {
            index+=1;
            return e.toUpperCase();
        }

        if(index % 2 === 1) {
            index+=1;
            return e.toLowerCase();
        }
    }).join('')
}

test('makeStrangeString', () => {
    expect(makeStrangeString('try hello world')).toBe('TrY HeLlO WoRlD');
})