/*
길이가 같은 두개의 큐가 주어집니다. 하나의 큐를 골라 원소를
추출하고, 추출된 원소를 다른 큐에 집어넣는 작업을
통해 각 큐의 원소 합이 같도록 만들려고 합니다. 이떄 필요한
작업의 최소 횟수를 구하고자 합니다. 한번의 pop과
한번의 insert를 합쳐서 작업을 1회 수행한것으로 간주합니다.
큐는 먼저 집어넣은 원소가 먼저 나오는 구조입니다.
이문제에서는 큐를 배열로 표현하며, 원소가 배열 앞쪽에
있을수록 먼저 집어넣는 원소임을 의미합니다. 즉 pop을
하면 배열의 첫 번째 원소가 추출되며, insert를 하면
배열의 끝에 원소가 추가됩니다.
*/

const twoArr = (arr1, arr2) => {
  let asum = arr1.reduce((a, b) => a + b);
  let bsum = arr2.reduce((a, b) => a + b);
  console.log(asum, bsum);
  let count = 0;
  let start1 = 0;
  let start2 = 0;
  while (asum !== bsum) {
    if (asum > bsum) {
      asum -= arr1[start1];
      bsum += arr1[start1];
      count += 1;
      start1 += 1;
    }
    if (asum < bsum) {
      bsum -= arr2[start2];
      asum += arr2[start2];
      count += 1;
      start2 += 1;
    }
  }
  return count;
};

test("twoArr", () => {
  expect(twoArr([3, 2, 7, 2], [4, 6, 5, 1])).toBe(2);
});
