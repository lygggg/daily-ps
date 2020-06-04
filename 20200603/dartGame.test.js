/*
이해
다트게임은 다트판에 다트를 세 차례 던져 그 점수의 합계로 실력을 겨루는 게임이다.
1. 다트 게임은 총 3번의 기회가있다.
2. 각 기회마다 얻을 수 있는 점수는 0점에서 10점이다.
3. 점수와 함께 Single(S), Double(D), Triple(T)영역이 존재하고
각 영역 당첨시 점수에서 1제곱, 2제곱, 3제곱으로 계싼된다.
4. 옵션으로 스타상(*), 아차상(#)이 존재하며 스타상 당첨 시
해당 점수와 바로 전에 얻는 점수를 각각 2배로 만들고 아차상 당첨시 해당점수는 마이너스 된다.
5. 스타상은 첫번째 기회에서도 나올 수 있다. 이 경우 첫번째 스타상의 점수만 2배가 된다.
구해야 하는 것
6. 스타상효과는 아차상의 효과와 중첩 가능하다. 이경우 중첩된 아차상의 점수는 -2배가 된다.
7. 싱글, 더블, 트리플은 점수마다 하나씩 존재한다.
8. 스타상 아차상은 점수마다 둘중 하나만 존재 할수 있으며, 존재하지 않을 수도 있다.

계획
dartResult에서 1,2,3 회를 잘라서 배열에 넣는다.
배열하나하나 계산해서 배열의합 리턴
*/

const dartGame = (dartResult) => {
    const strings = dartResult.split(/\d/gi).filter(e=> e !== '')
    let numbers = dartResult.split(/[A-Z*#]/gi).filter(e=> e !== '').map(e=> Number(e))
    const arr = [];
    numbers = numbers.forEach((e,index) => {
        let operation = strings[index].split('');
        let singledoubletriple = operation[0];
        let sharpStar = operation[1];
        let answer = 0;
            if(singledoubletriple === 'S') {
                answer = e;
            }

            if(singledoubletriple === 'D') {
                answer = Math.pow(e,2);
            }
            
            if(singledoubletriple === 'T') {
                answer = Math.pow(e,3);
            }
            
            if(sharpStar === '*') {
                answer *= 2;
                arr[index-1] = arr[index-1]*2;
            }

            if(sharpStar === '#') {
                answer *= -1;
            }
            arr[index] = answer
    })
    return arr.reduce((a, b) => a+b)
}

test('dartGame', () => {
    expect(dartGame('1S2D*3T')).toBe(37);
})