/*
이해
난쟁이가 일곱명이여야 하는데 아홉마리의 난쟁이가 찾아왔다.
하지만 난쟁이의 키 합이 100이 넘지않는다.
아홉난쟁이의 키는 모두 다르다.
진짜 난쟁이들을 찾아서 리턴해라.

구해야하는 것
7마리의 합이 100이 넘지않는 난쟁이들의 집합

계획
이중포문 돌려서 모든 값 - 두개의 합 == 100이면 그 두개값 빼고 리턴
*/

const sevenDwarfs = (Dwarfs) => {
  const noobDwarfs = [];
  const dwarfsSum = Dwarfs.reduce((e, cur) => e + cur);
  for (let i = 0; i < Dwarfs.length; i++) {
    for (let j = i + 1; j < Dwarfs.length; j++) {
      //   console.log(Dwarfs[i], Dwarfs[j], dwarfsSum);
      if (dwarfsSum - (Dwarfs[i] + Dwarfs[j]) == 100) {
        noobDwarfs.push(Dwarfs[i], Dwarfs[j]);
      }
      break;
    }
  }
  for (let i = 0; i < Dwarfs.length; i++) {
    if (Dwarfs[i] === noobDwarfs[0]) {
      Dwarfs.splice(i, 1);
    }
    if (Dwarfs[i] === noobDwarfs[1]) {
      Dwarfs.splice(i, 1);
    }
  }
  return Dwarfs;
};

test("sevenDwarfs", () => {
  expect(sevenDwarfs([20, 7, 23, 19, 10, 15, 25, 8, 13])).toEqual([
    20, 7, 23, 19, 10, 8, 13,
  ]);
});
