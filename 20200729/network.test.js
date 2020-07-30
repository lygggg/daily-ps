/*
계획

computer의 첫번째 부터 for문을 돌려서[i][i] 값이 -1이 아니면 재귀함수 호출하고
호출이 되면 for문으로 차례대로 1씩 증가하면서 해당하는 배열의 값이 1이면 -1로 변환하고
재귀함수 호출한다.

*/

const network = (n, computers) => {
    let answer = 0;
    for(let i =0; i<computers.length; i++) {
        if(computers[i][i] !== -1) {
            answer += 1;
            dfs(computers, i, n);
        }
    }
    return answer;
}

const dfs = (computers, idx, n) => {
    for(let j = 0; j<n; j++) {
        if(computers[idx][j] === 1) {
            computers[idx][j] = computers[j][idx] = -1;
            dfs(computers, j, n)
        }
    }
}

test('network', () => {
    expect(network(3, [[1,1,0], [1,1,0],[0,0,1]])).toBe(2);
})