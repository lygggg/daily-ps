/*
이해

두개의 단어 begin, target과 단어의 집합 words가 있습니다.
아래의 규칙을 사용하여 begin에서 target으로 변환하는 가장 짧은 변환 과정을 찾으려고 한다.

1. 한번에 한 개의 알파벳만 바꿀 수 있다.
2. words에 있는 단어로만 변환할 수 있다.

최대 몇단계를 거쳐 begin에서 target으로 변환할 수 있는지를 리턴해라.

구해야 하는 것

begin에서 target으로 변환하는 가장 짧은 변환 과정을 찾으려고 합니다.

계획

일단
words에 인클루드로 target이 없으면 0리턴
begin 을 스플릿 하고 배열을 for문으로 한번씩 돌면서
해당 문자열을 스플릿 하고 for문으로 스플릿한 문자열의 길이만큼 돌면서 인덱스를 하나씩 지우면서
비교하고 트루면 배열에 넣는다. 또 한번더 반복 하고 배열에 target이 들어오면 길이 -1을 맨 위
배열에 저장한다.
*/

const wordConversion = (begin, target, words) => {
    const arr = [];
    const countArr = [];
    let beginArr = begin.split('');
    if(!words.includes(target)) {
        return 0;
    }
    for(let i =0; i<words.length; i++) {
        let wordArr = words[i].split('');
        for(let j = 0; j<wordArr.length; j++) {
            beginArr.splice(j,1);
            wordArr.splice(j,1);
            if(beginArr.join('') === wordArr.join('')) {
                arr.push(word[i]);
                beginArr = arr[i].split('');
                console.log(arr,beginArr,'das');
            }
            else {
                beginArr = begin.split('');
                wordArr = words[i].split('');
            }
            console.log(beginArr, wordArr);
            // words[i].splice(j)
        }
    }
    return 1;
}


test('wordConversion', () => {
    expect(wordConversion("hit", "cog", ["hot", 'dot', 'dog', 'lot', 'log', 'cog'])).toBe(4);
    // expect(wordConversion("hit", "cog", ["hot", 'dot', 'dog', 'lot','log'])).toBe(0);
})