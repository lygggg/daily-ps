/*
이해
자연수 N이 주어지면 1부터 N까지의 원소를 갖는 집합의 부분집합을 
모두 출력하는 프로그램을 작성하시오.

계획
1. 왼쪽 오른쪽으로 뻗어나가는 함수를 두 개를 만들어야 한다.
2. dfs 함수는 depth가 n과 같으면 리턴해준다.
3. 지나갔던 숫자를 체크해 줄 배열을 생성해 준다.
4. 배열에 진입할 때 check[depth]에 1을 체크해 주고 빠져나올 때 check[depth] 0을 체크해 준다.
5. depth가 n과 같을 때 체크 배열에 1로 되어있는 index 값을 새로운 배열에 넣어준다.
6. 마지막에 result 배열을 리턴.

아쉬운 점
그냥 문제를 풀었다..
*/

const subest = (n) => {
  const arr = Array(n).fill(0);
  const check = [...arr];
  const result = [];
  const dfs = (n, depth) => {
    const arr = [];
    if (depth === n) {
      for (let i = 0; i < n; i++) {
        if (check[i] === 1) {
          arr.push(i + 1);
        }
      }
      result.push(arr);
      return;
    }
    check[depth] = 1;
    dfs(n, depth + 1, check);
    check[depth] = 0;
    dfs(n, depth + 1, check);
  };
  dfs(n, 0);
  result.pop();
  return result;
};

test("subset", () => {
  expect(subest(3)).toEqual([[1, 2, 3], [1, 2], [1, 3], [1], [2, 3], [2], [3]]);
});
