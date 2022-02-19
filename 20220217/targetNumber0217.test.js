/*
이해
n개의 음이 아닌 정수들이 있습니다. 이 정수들을 바꾸지않고 적절히 더하거나
빼서 타겟 넘버를 만들려고 합니다.
사용할 수 있는 숫자가 담긴 배열 numbers,타겟 넘버 target이 매개변수로 주어진다.


구해야하는 것
배열 처음부터 차례대로 더하거나 빼는 경우를 모두 구하고 결과값이 target인
모든 배열의 개수를 구해야한다.

계획
- 재귀함수는 재귀가 멈추는 조건을 구해야한다. numbers의 길이가 depth랑 같으면 종료된다.
- 하나는 -1 하나는 +1해주는 재귀함수 두개를 생성해준다.
- 재귀가 호출될때마다 depth를 +1증가 시켜주고, 깊이가 5와 같고 연산의 합이 target이면 개수를 +1시켜준다
- 마지막에 count를 리턴한다.

아쉬운점
DFS문제라 테스트 하나로 끝난 것 같다. 아니면 내가 TDD를 못한걸수도
*/
const targetNumber = (numbers, target) => {
  let count = 0;
  let sum = 0;
  const dfs = (numbers, depth, sum) => {
    if (numbers.length === depth) {
      if (sum === target) {
        count++;
      }
      return;
    }
    dfs(numbers, depth + 1, sum - numbers[depth]);
    dfs(numbers, depth + 1, sum + numbers[depth]);
  };
  dfs(numbers, 0, sum);
  return count;
};

test("targetNumber", () => {
  expect(targetNumber([1, 1, 1, 1, 1], 3)).toBe(5);
  expect(targetNumber([4, 1, 2, 1], 2)).toBe(2);
});
