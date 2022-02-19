/*
이해 
1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...
1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answer가 주어졌을 때,
가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 해야한다

계획
수포자들의 반복되는 숫자를 배열에 담고 반복문으로 한번씩 흝어서 맞춘 문제의 개수를 배열에 담고,
가장 맞춘 개수가 같은 인덱스랑 값이 같은 인덱스들 모두를 +1해서 리턴한다.
*/

const mockTest0219 = (answers) => {
  const result = Array(3).fill(0);
  const first = [1, 2, 3, 4, 5];
  const two = [2, 1, 2, 3, 2, 4, 2, 5];
  const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  answers.forEach((e, i) => {
    if (first[i % first.length] === e) {
      result[0] += 1;
    }
    if (two[i % two.length] === e) {
      result[1] += 1;
    }
    if (three[i % three.length] === e) {
      result[2] += 1;
    }
  });
  return getSameMaxValueArr(result);
};

const getSameMaxValueArr = (result) => {
  const arr = [];
  const max = Math.max(...result);
  result.filter((e, i) => {
    if (max === e) {
      arr.push(i + 1);
    }
  });
  return arr;
};

test("mockTest0219", () => {
  expect(mockTest0219([1, 2, 3, 4, 5])).toEqual([1]);
  expect(mockTest0219([1, 3, 2, 4, 2])).toEqual([1, 2, 3]);
});

test("getSameMaxValueArr", () => {
  expect(getSameMaxValueArr([5, 0, 0])).toEqual([1]);
});
