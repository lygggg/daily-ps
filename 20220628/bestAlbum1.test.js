/*
1. 속한 노래가 많이 재생된 장르를 먼저 수록
2. 장르 내에서 많이 재생된 노래를 먼저 수록
3. 장르 내에서 재생 횟수가 같은 노래중에서는
*/
const bestAlbum = (genres, plays) => {
  const map = new Map();
  const result = [];
  for (let i = 0; i < genres.length; i++) {
    if (!map.has(genres[i])) {
      map.set(genres[i], plays[i]);
    } else {
      map.set(genres[i], map.get(genres[i]) + plays[i]);
    }
  }
  const sortArr = [...map].sort((a, b) => b[1] - a[1]);
  const sortMap = new Map(sortArr);
  sortMap.forEach((value, key) => {
    const arr = new Map();
    genres.forEach((e, i) => {
      if (key === e) {
        arr.set(i, plays[i]);
      }
    });
    const sortResentArr = [...arr].sort((a, b) => {
      if (a[1] === b[1]) {
        return a[0] - b[0];
      } else {
        return b[1] - a[1];
      }
    });
    for (let i = 0; i < 2; i++) {
      if (sortResentArr[i]) {
        result.push(sortResentArr[i][0]);
      }
    }
  });
  return result;
};

test("bestAlbum", () => {
  expect(
    bestAlbum(
      ["classic", "pop", "classic", "classic", "pop"],
      [500, 600, 150, 800, 2500]
    )
  ).toEqual([4, 1, 3, 0]);
});
