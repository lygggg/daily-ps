/*
이해
철수는 그의 바둑이들을 데리고 시장에 가려고 한다. 그런데 그의 트럭은  C킬로그램 넘게 태울수가 없다.
철수는 C를 넘지 않으면서 그의 바둑이들을 가장 무겁게 태우고 싶다.
N마리의 바둑이와 각 바둑이의 무게 W가 주어지면, 철수가 트럭에 가장 태울수 있는 가장 무거운 무게를 구하는 프로그램을 작성하시오.

구해야하는 것
철수가 트럭에 태울 수 있는 가장 무거운 무게

계획
흔한 DFS문제다. 같이 태울수 있는 모든 무게를 구해야한다. 갔던것을 체크하는 check라는 배열을 만들고 함수를 두개 만들고
왼쪽으로 가면 check[depth]에 1을 추가하고 오른쪽으로 가면 0을 추가한다.
1. 배열의 합이 트럭c보다 크거나 같으면 멈춘다
2. 깊이의 끝을 가면 멈춘다.
*/

const truck = (weight, arr) => {
  const check = Array(arr.length).fill(0);
  DFS(weight, 0, arr, check, (sumArr = []));
  return Math.max(...sumArr.filter((e) => e < weight));
};

const DFS = (weight, depth, arr, check, sumArr) => {
  if (depth > arr.length) {
    const filterArr = arr.filter((e, i) => {
      if (check[i] === 1) {
        return e;
      }
    });
    if (filterArr.length < 1) {
      return;
    }
    sumArr.push(filterArr.reduce((f, l) => f + l));
    return;
  }

  check[depth] = 1;
  DFS(weight, depth + 1, arr, check, sumArr);
  check[depth] = 0;
  DFS(weight, depth + 1, arr, check, sumArr);
};

test("truck", () => {
  expect(truck(259, [81, 58, 42, 33, 61])).toBe(242);
});
