/*
계획

begin으로 잡고 있는 단어를 한 단계 변화시킬 수 있는 단어를 words에서 찾는다.
찾으면, 그 단어를 begin으로 바꾸고, 다시 words에서 그 단어를 한 단계 변화시
킬 수 있는 단어를 또 찾는다. 그래서 재귀를 돌린다.

*/

const wordConversion = (begin, target, words) => {
    const arr = [];
    recursive(begin, target, words, 0, arr);
    console.log(arr);
    
}

const recursive = (begin, target, words, count, arr) => {
    if(begin == target) {
        arr.push(count);
    }

    for(let i = 0; i < words.length; i++) {
        if(isMatch(begin, words[i]) === true) {
            begin = words[i];
            console.log(begin)
            words.shift();
            recursive(begin, target, words, count+1, arr);       
        }
        if(i == words.length) {
            return 0;
        }    
    }
}

const isMatch = (source, destination) => {
    let count = 0;

    for(let j = 0; j<source.length; j++) {
        if (source[j] === destination[j]) {
            count += 1;
        }
    }

    if (count === source.length - 1) {
        return true;
    }

    return false
}

test('isMatch', () => {
    expect(isMatch("dog", "cog")).toBe(true);
    expect(isMatch("dog", "cok")).toBe(false);
});

test('wordConversion', () => {
    expect(wordConversion('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']	)).toBe(4);
})