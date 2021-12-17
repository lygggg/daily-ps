/*
홀수 문제
이해
7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을
모두 골라 그합을 구하고, 고른 홀수들중 최소값을 찾는
프로그램을 작성하세요.

구해야하는것
7개의 자연수들중 홀수의 합과 고른 홀수들중 최소값을
찾아라.

계획
주어진 자연수들의 홀수를 체크하고, 작은수, 합을 구한다.

*/

const oddNumber = (oddArray) => {
  const arr = oddArray.filter((x) => x % 2 !== 0);
  const addArr = arr.reduce(function add(sum, cur) {
    return sum + cur;
  }, 0);
  return [addArr, Math.min.apply(null, arr)];
};

test("oddNumber", () => {
  expect(oddNumber([12, 77, 38, 41, 53, 92, 85])).toEqual([256, 41]);
});
