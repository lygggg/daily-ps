/*
이해
네트워크란 컴퓨터 상호간에 정보를 교환할 수 있도록 연결된 형탤르 의미한다. 예를 들어, 컴퓨터 A와 컴퓨터 B가 직접적으로 연결되어 있고,
컴퓨터 B와 컴퓨터 C가 직접적으로 연결되어 있을 때 컴퓨터 A와 컴퓨터 C도 간접적으로 연결되어 정보를 교환할 수 있다. 따라서 컴퓨터 A,B,C는 모두
같은 네트워크 상에 있다고 할 수 있다.
즉 이중배열에서 i j가 1이면 그 네트워크가 연결되어있다고 볼수있다.

구해야하는 것
컴퓨터의 개수 n, 연결에 대한 정보가 배열 computers에 매개변수로 주어질 때, 네트워크의 개수를 return하도록 solution 함수를 작성하시오.

계획
computer의 첫번째 부터 for문을 돌려서[i][i] 값이 -1이 아니면 재귀함수 호출하고
호출이 되면 for문으로 차례대로 1씩 증가하면서 해당하는 배열의 값이 1이면 -1로 변환하고
재귀함수 호출한다.

후기
정말 어렵다.. 3레벨 dfs문제라 그런지 나에겐 난이도가있는 문제인 것 같다. 아직 dfs에 익숙하지 않아서 그런것같다. 다른 쉬운 문제들을
더 풀어보고 도전해봐야겠다.
*/

const network = (n, computers) => {
  let answer = 0;
  for (let i = 0; i < computers.length; i++) {
    if (computers[i][i] !== -1) {
      answer += 1;
      conculate(computers, i, n);
    }
  }
  return answer;
};
const conculate = (computers, idx, n) => {
  for (let j = 0; j < n; j++) {
    if (computers[idx][j] === 1) {
      computers[idx][j] = computers[j][idx] = -1;
      conculate(computers, j, n);
    }
  }
};

test("network", () => {
  expect(
    network(3, [
      [1, 1, 0],
      [1, 1, 0],
      [0, 0, 1],
    ])
  ).toBe(2);
});
