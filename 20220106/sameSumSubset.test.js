/*
이해
N개의 원소로 구성된 자연수 집합이 주어지면, 이집합을 두개의 부분집합으로 나누었을 때 두 부분집합의 원소의 합이 서로 같은경우가
존재하면 YES를 출력하고 아니면 NO를 출력한다.
둘로 나뉘는 두 부분집합은 서로소 집합이며, 두 부분집합을 합하면 입력으로 주어진 원래 집합이 되어야 한다.
예를들어 {1, 3, 5, 6, 7, 10}이 입력되면 {1, 3, 5, 7} = {6 ,10} 으로 두 부분집합의 합이 16으로 같은 경우가 존재하는 것을 알수있다.

구해야하는 것
한 집합을 두 집합으로 나뉘어 그 합이 같도록 해야하고 만약 다 확인해도 다르면 NO를 출력한다.

계획
부분함수와 비슷하게 끝나는 조건은 깊이가 n의 길이와 같을 떄 이고,
check라는 배열을 만들어 왼쪽으로 갈 때는 1 오른쪽으로 갈 때는 0을 체크하도록 한다.
깊이가 n의 길이가 같을때 check와 n배열을 비교하며 값을 구하고 그 값을 가진 배열의 합을 구한다.
그리고 n배열의 합 - 구해온 값 = 구해온 값이면 배열에 "YES"를 담고 리턴한다.

*/

const sameSumSubset = (n) => {
  const sum = n.reduce((a, c) => a + c);
  const check = Array(n).fill(0);
  DFS(n, sum, 0, check, (result = []));
  return result[0];
};

const DFS = (n, sum, depth, check, result) => {
  if (result.length < 1) {
    if (depth === n.length) {
      const filterArr = n.filter((e, i) => {
        if (check[i] === 1) {
          return e;
        }
      });
      if (filterArr.length == 0) {
        return;
      }
      const arrSum = filterArr.reduce((a, c) => a + c);
      if (sum - arrSum === arrSum) {
        result.push("YES");
        return;
      }
      return;
    }
    check[depth] = 1;
    DFS(n, sum, depth + 1, check, result);
    check[depth] = 0;
    DFS(n, sum, depth + 1, check, result);
  }
};

test("sameSumSubset", () => {
  expect(sameSumSubset([1, 3, 5, 6, 7, 10])).toBe("YES");
});

/*
후기 부분함수와 비슷하지만 푸는 방법을 모르면 어려운 문제다. 접근하는 방법만 어려울뿐 푸는 방법은 부분 함수 문제와 같았다.
*/
