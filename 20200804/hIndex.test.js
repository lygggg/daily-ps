/*
H=index는 과학자의 생산성과 영향력을 나타내는 지표다.
어느 과학자의 H-index를 나타내는 값인 h를 구하려고 한다.
H-index는 다음과 같이 구한다. 어떤 과학자가 발표한 논문 n편 중,
h번 이상 인용된 논문이 h편 이상이고 나머지 논물이 h번 이하 인용
되었다면 h의 최댓값이 이과학자의  H-/Index입니다.
어떤 과학자가 발표한 논문의 인용 횟수를 담은 citations가 매개변수로 주어질때,
이 과학자의 H-Index를 리턴해라.

구해야하는 것
과학자의 H-Index를 리턴해라.

계획
배열을 생성하고, citations를 for문 돌면서 1부터 10000까지 돌리면서 i보다 큰수의 갯수가 i 이상이고, i보다 작은 갯수를 구해서 남은 나머지 논문이 
h번 이하 인용된 수중 h값이 최대값인 것 을 구한다.
*/

const hIndex = (citations) => {
    const arr = [];
    for(let i =0; i<=10000; i++) {
        const moreIndex = citations.filter(e => i <= e);
        const lessIndex = citations.filter(e => i >= e);
        if(moreIndex.length === 0) {
            break;
        }
        if(moreIndex.length >= i && lessIndex.length <= i) {
            arr.push(i);
        }
    }
    if(arr.length === 0) {
        return 0;
    }
    return Math.max(...arr);
}

test('hIndex', () => {
    expect(hIndex([3,0,6,1,5])).toBe(3);
})