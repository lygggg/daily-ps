/*
이해

컴퓨터 A와 B가 연결되어 있고, 컴퓨터 B와 컴퓨터C가
 직접적으로 연결되어 있을때 컴퓨터 A와 컴퓨터 C도 간접적으로 연결되어
 정보를 교환할 수 있습니다. 따라서 ABC 컴퓨터는 같은 네트워크상에 있다.
컴퓨터의 개수 n, 연결에 대한 정보가 담긴 2차원 배열 computers가
매개변수로 주어질 때, 네트워크의 개수를 리턴해라.

구해야하는 것

네트워크의 개수

계획
computers의 이차원 배열을 순환하면서, 만약 



*/

const network = (n, computers) => {
    let answer = 0;
    const len = computers.length;
    for(let i =0; i<len; i++) {
        if(computers[i][i] !== -1) {
            answer+=1;
            dfs(computers, i, n);
        }
    }
    return answer;
}

const dfs = (computers, idx, n) => {
    for(let j = 0; j<n; j++) {
        if(computers[idx][j]===1 && computers[idx][j] !== -1) {
            computers[idx][j] = computers[j][idx] = -1;
            console.log(idx,j);
            dfs(computers, j, n);
        }
    }
}

test('network', () => {
    expect(network(3, [[1,1,0], [1,1,0],[0,0,1]])).toBe(2);
    // expect(network(3, [[1,1,0], [1,1,1],[0,1,1]])).toBe(1);
})