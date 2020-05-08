/*
이해
튜플은 중복된원소 가능
원소에 정해진 순서가있고 순서가 다르면
서로 다른 튜플
튜플의 원소 개수는 유한하다.

원소의 개수가 n개, 중복되는 원소가 없는 튜플이 주어진다

튜플이 {2, 1, 3, 4}면
{{2}, {2,1}, {2,1,3}, {2,1,3,4}}
로 표현한다.
원소의 순서가 바뀌어도 상관없다.
{{2}, {2, 1}, {2, 1, 3}, {2, 1, 3, 4}}
{{2, 1, 3, 4}, {2}, {2, 1, 3}, {2, 1}}
{{1, 2, 3}, {2, 1}, {1, 2, 4, 3}, {2}}

구해야 하는 값
특정 튜플을 표현하는 집합이 담긴 문자열 s가 매개변수로 주어질 때, s가 표현하는 튜플을 배열에 담아 return

계획
1. s의 객체를 가져와서  filter돌려서
길이가 가장 작은것부터 가져와서 뽑아낸후
배열에 넣는다.
2. 가져온 배열을 삭제후 그다음 작은것 가져와서
하나씩 결과값에 포함되어있는지 확인하고 푸쉬한다.

*/

const tuple = (s) => {
  let result = [];
  const arr = s.split("}").map((e) => e.replace(/{/gi, "").split(","));
  const arr1 = arr.map((i) => i.filter((e) => e != ""));
  const arr2 = arr1.filter((e) => {
    if (e.length > 0) {
      return e;
    }
  });
  arr2.sort(function (a, b) {
    return a.length > b.length ? 1 : -1;
  });

  arr2.forEach((e) => {
    e.forEach((i) => {
      if (!result.includes(i)) {
        result.push(i);
      }
    });
  });

  return result.map((e) => {
    return Number(e);
  });
};

test("tuple", () => {
  expect(tuple("{{2},{2,1},{2,1,3},{2,1,3,4}}")).toEqual([2, 1, 3, 4]);
  expect(tuple("{{20,111},{111}}")).toEqual([111, 20]);
});
