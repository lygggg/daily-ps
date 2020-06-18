/*
# [문자열 압축](https://programmers.co.kr/learn/courses/30/lessons/60057)

이해

주어진 s문자열 을 압축해서 가장 짧은 문자열을 만들어라.

계획
이중 for문으로 카운트를 증가시키면서 만약 2개로 압축한다면 첫글자부터 하나씩 비교해서 압축한다.
그후 가장 짧은 문자열결과의 개수를 리턴한다.

2a2ba3c => 7

*/
const abstractWord = (s) => {
    const arr = s.split('');
    const countArr = [];
    // console.log(arr);
    for(let i =2; i<3; i++) {
        for(let j =0; j<arr.length; j++) {
            const testArr = [];
            const sliced = arr.slice(j,j+i);
            testArr.push(sliced);//a
            let count =1;
            for(let k = j+i; k<arr.length; k+= i) {
                const secondSliced = arr.slice(k,k+i);
                if(sliced[0] === secondSliced[0]) {
                    count += 1;
                } else {
                    j += count-1
                    break;
                }
            }
            console.log( count)

            if(count === 1) {
                countArr.push(...sliced);
            } else {
                countArr.push(count.toString().concat(sliced));
                continue;
            }
        }
    }
    console.log(countArr)
}

test('abstractWord', () => {
    // expect(abstractWord("aabbaccc")).toBe(7);
    expect(abstractWord("ababcdcdababcdcd")).toBe(9);
})

