/*
이해 양의 정수 
N내의 이진 간격은 N의 이진표현에서 양쪽 끝에 있는 0으로 둘러싸인 연속0의 최대 시퀸스이다.

구해야하는것
해당 숫자의 이진수표현에서 1과1 사이에 있는 0의 개수가 가장 많은 것의 개수를 구해야한다.

계획
일단 제일 먼저 숫자를 이진수로 바꾸고, 배열을 하나 만든다. forEach로 0부터 갯수를 시작해서 카운트를 증가시킨다.
 만약 해당하는 값이 1이면 카운트를 종료하고 배열에 카운트를 넣는다.
*/

const binaryGap = (N) => {
    const binaryArr = [];
    let count = 0;
    const arr = N.toString(2).split('');
    arr.forEach(e=> {
        if(e==0) {
            count+=1;
        }

        if(e==1) {
            binaryArr.push(count);
            count = 0;
        }
    })
    return Math.max.apply(null,binaryArr)
}

test('binaryGap', () => {
    expect(binaryGap(9)).toBe(2);
})