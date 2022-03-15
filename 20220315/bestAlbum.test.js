/*
이해
스트리밍 사이트에서 장르 별로 가장 많이 재생된 노래를 두 개씩 모아서
베스트 앨범을 출시하려고 합니다. 노래는 고유 번호로 구분하며, 노래를 수록하는 기준은
다음과 같습니다.

1. 속한 노래가 많이 재생된 장르를 먼저 수록합니다.
2. 장르 내에서 많이 재생된 노래를 먼저 수록합니다.
3. 장르 내에서 재생 횟수가 같은 노래중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.

노래의 장르를 나타내는 문자열 배열 genres와 노래별 재생 횟수를 나타내는 정수 배열
plays가 주어질 때, 베스트 앨범에 들어갈 노래의 고유 번호를 순서대로 return하세요

제한사항
genres[i]는 고유번호가 i인 노래의 장르입니다.
plays[i]는 고유번호가 i인 노래가 재생된 횟수입니다.
genres와 plays의 길이는 같으며, 이는 1 이상 10,000 이하입니다.
장르 종류는 100개 미만입니다.
장르에 속한 곡이 하나라면, 하나의 곡만 선택합니다.
모든 장르는 재생된 횟수가 다릅니다.

계획
먼저 genres배열을 돌면서 새로운 배열에 key value값으로 된 {genres :"장르", playSum: 합}을 계산후 넣습니다.
그후 새로운 배열에서 value가 가장 높은 key를 찾아서 기존 genres 배열에 있던 값들중에
가져온 key와 같은 index를 가진 값을들 찾아서 또 새로운 배열 {genres: "장르", plays: 값, index: index}에 저장하고
이 배열에서 play를 기준으로 우선순위를 정렬합니다. 만약 plays 값이 같다면 그 같은 값들의 index중 가장 낮은 것을 수록합니다.
이 과정을 반복합니다.
*/

const bestAlbum = (genres, plays) => {
  const sumArr = getSumAlbum(genres, plays);
  let sortArr = [];
  const result = [];

  sumArr.sort(function (a, b) {
    return b.playSum - a.playSum;
  });

  sumArr.forEach((e, i) => {
    genres.forEach((item, index) => {
      if (e.genres === item) {
        sortArr.push({ genres: e.genres, plays: plays[index], index: index });
      }
    });

    sortArr.sort(function (a, b) {
      if (a.plays === b.playSum) {
        return a.index - b.index;
      }
      return b.plays - a.plays;
    });

    sortArr.forEach((e, i) => {
      if (i < 2) {
        result.push(e.index);
      }
    });
    sortArr = [];
  });

  return result;
};

const getSumAlbum = (genres, plays) => {
  const sumHash = [];
  const dupArr = [...new Set(genres)];

  dupArr.forEach((e, i) => {
    let sum = 0;
    genres.forEach((item, index) => {
      if (e === item) {
        sum += plays[index];
      }
    });
    sumHash[i] = { genres: e, playSum: sum };
  });

  return sumHash;
};

test("bestAlbum", () => {
  expect(
    bestAlbum(
      ["classic", "pop", "classic", "classic", "pop"],
      [500, 600, 150, 800, 2500]
    )
  ).toEqual([4, 1, 3, 0]);
});

test("getSumAlbum", () => {
  expect(
    getSumAlbum(
      ["classic", "pop", "classic", "classic", "pop"],
      [500, 600, 150, 800, 2500]
    )
  ).toEqual([
    { genres: "classic", playSum: 1450 },
    { genres: "pop", playSum: 3100 },
  ]);
});
