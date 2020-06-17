/*
이해
progresses는 현재 작업진도

speeds는 작업의 개발 속도
 배열의 첫번째 값이 완료가 되어야 그 뒤에 값이 배포될수있다.
 각 배포마다 몇개의 기능이 배포되는지를 리턴해라.

구해야하는 것

각 배포마다 몇개의 기능이 배포되는지 리턴

계획

while문으로 progresses의 길이가 0이될때까지 돌면서
for문으로 progresses의 길이만큼 돌면서  speeds와 더한다.
만약 첫번째 값이 100와 같거나 크면 count값을 +1하고 뺀다


*/

const contributions = (progresses, speeds) => {
    const arr = [];
    while(progresses.length !== 0) {
        let count = 0;
        while(progresses[0]>=100) {
            count+=1;
            progresses.shift();
            speeds.shift();
        }
        for(let i =0; i<progresses.length; i++) {
            progresses[i] = progresses[i] + speeds[i];
        }
        if(count>0) {
            arr.push(count);
        }
    }
    return arr;
}
test('contributions', () => {
    expect(contributions([93, 30, 55], [1, 30, 5])).toEqual([2, 1]);
} )