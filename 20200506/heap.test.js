/*
이해
배열에는 I 숫자가 들어가면 큐에 주어진 숫자를 삽입
D 1은 큐에서 최댓값을 삭제
D -1은 큐에서 최솟값을 삭제
배열에서 다 연산한후 큐가 비어있으면 [0,0]출력
값이 있으면 그 수들중 [최댓값, 최솟값] 리턴

계획
주어진 배열에서 하나씩 빼서 I를 포함하고 있으면
I를 제외한 나머지 배열값을 원래 있던 큐에 삽입한다.
D 1를 포함하고 있으면 최댓값을 삭제한다.
D -1를 포함하고 있으면 최솟값을 삭제한다.
*/
const doublePriorityQueue = (operations) => {
    let que = [];
    while(operations.length !==0){
    let startValue = operations.shift();
    if(startValue.split(' ').includes('I')) {
        que.push(Number(startValue.replace(/I /, '')));
    }

    if(startValue.split(' ').includes('D')) {

        startValue.replace('I', '');
        const re = startValue.replace(/D /, '');

        if(re == 1) {
        const index = que.findIndex( e => e === Math.max(...que));
        que.splice(index, 1);
        }

        if(re == -1) {
            const index = que.findIndex( e => e === Math.min(...que));
        que.splice(index, 1);
        }

    }
}
    if(que.length===0) {
        return [0, 0];
    }
    return [Math.max(...que),Math.min(...que)];
}

test('doublePriorityQueue', () => {
    expect(doublePriorityQueue(['I 16', 'D 1', 'D -1'])).toEqual([0, 0])
    expect(doublePriorityQueue(['I 7', 'I 5', 'I -5', 'D -1'])).toEqual([7, 5])
    expect(doublePriorityQueue(	["I -45", "I 653", "D 1", "I -642", "I 45", "I 97", "D 1", "D -1", "I 333"])).toEqual([333, -45])
})