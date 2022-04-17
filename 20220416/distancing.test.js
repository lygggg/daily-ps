/*
이해
개발자를 희망하는 죠르디가 카카오에 면접을 보러 왔습니다.
코로나 바이러스 감염 예방을 위해 응시자들은 거리를 둬서 대기를 해야하는데 개발 직군 면접인 만큼
아래와 같은 규칙으로 대기실에 거리를 두고 앉도록 안내하고 있습니다.

1. 대기실은 5개이며, 각 대기실은 5x5 크기입니다.
2. 거리두기를 위하여 응시자들 끼리는 맨해튼 거리가 2이하로 앉지 말아주세요
3. 단 응시자가 앉아있는 자리 사이가 파티션으로 막혀 있을 경우에는 허용합니다.

- 자리 사이에 파티션이 존재한다면 맨해튼 거리가 2여도 거리두기를 지킨 것입니다.
- 위 그림처럼 파티션을 사이에 두고 앉은 경우도 거리두기를 지킨 것입니다.
- 자리 사이가 맨해튼 거리 2이고 사이에 빈 테이블이 있는 경우는 거리두기를 지키지 않는 것입니다.
- 응시자가 앉아있는 자리 (P)를 의미합니다.
- 빈 테이블(0)을 의미합니다.
- 파티션(X)을 의미합니다.

5개의 대기실을 본 죠르디는 각 대기실에서 응시자들이 거리두기를 잘 지키고 있는지 알고 싶어졌습니다.
자리에 앉아있는 응시자들의 정보와 대기실 구조를 대기실별로 담은 2차원 문자열 배열 places가 매개변수로 주어집니다.
각 대기실별로 거리두기를 지키고 있으면 1을, 한명이라도 지키지 않고 있으면 0을 배열에 담아 return하도록
solutiom 함수를 완성해주세요.

계획
places 배열을 하나씩 가져와서 split으로 나누고 반복문을 실행하는데,
배열을 확인하면서 만약 P면 해당 위치의
위,위 오른쪽, 위 왼쪽, 위위 
아래, 아래 오른쪽, 아래 왼쪽, 아래아래
왼쪽, 왼왼쪽
오른쪽 오른오른쪽 을 확인하고
만약 위,아래,왼쪽,오른쪽이 P면 1을 푸쉬하고 continue
만약 위위,아래아래,왼왼,오른오른쪽이면 그 사이에 있는 것이 X가 아니라면 0푸쉬 continue
만약 위 오른쪽이 P면 처음 자리의 위, 오른쪽이 X가 아니면 0푸쉬 continue
만약 위 왼쪽이 P면 처음 자리의 위, 왼쪽이 X가 아니면 0푸쉬 continue
만약 아래 오른쪽이 P면 처음 자리의 아래, 오른쪽이 X가 아니면 0푸쉬 continue
만약 아래 왼쪽이 P면 처음 자리의 아래, 왼쪽이 X가 아니면 0푸쉬 continue
맨밑에 1푸쉬
*/

const distancing = (places) => {
  const result = [];
  outerFor: for (let len = 0; len < places.length; len++) {
    const splitArr = [];
    splitArr.push(["O", "O", "O", "O", "O"]);
    splitArr.push(["O", "O", "O", "O", "O"]);
    places[len].forEach((e) => {
      splitArr.push(["0", "O", ...e.split(""), "0", "0"]);
    });
    splitArr.push(["0", "0", "0", "0", "0"]);
    splitArr.push(["0", "0", "0", "0", "0"]);

    for (let i = 2; i < 7; i++) {
      for (let j = 2; j < 7; j++) {
        if (splitArr[i][j] === "P") {
          if (
            splitArr[i - 1][j] === "P" ||
            splitArr[i + 1][j] === "P" ||
            splitArr[i][j - 1] === "P" ||
            splitArr[i][j + 1] === "P"
          ) {
            result.push(0);
            continue outerFor;
          }

          if (splitArr[i - 2][j] === "P") {
            if (splitArr[i - 1][j] !== "X") {
              result.push(0);
              continue outerFor;
            }
          }
          if (splitArr[i + 2][j] === "P") {
            if (splitArr[i + 1][j] !== "X") {
              result.push(0);
              continue outerFor;
            }
          }
          if (splitArr[i][j - 2] === "P") {
            if (splitArr[i][j - 1] !== "X") {
              result.push(0);
              continue outerFor;
            }
          }
          if (splitArr[i][j + 2] === "P") {
            if (splitArr[i][j + 1] !== "X") {
              result.push(0);
              continue outerFor;
            }
          }
          if (splitArr[i - 1][j + 1] === "P") {
            if (splitArr[i - 1][j] !== "X" || splitArr[i][j + 1] !== "X") {
              result.push(0);
              continue outerFor;
            }
          }
          if (splitArr[i - 1][j - 1] === "P") {
            if (splitArr[i - 1][j] !== "X" || splitArr[i][j - 1] !== "X") {
              result.push(0);
              continue outerFor;
            }
          }
          if (splitArr[i + 1][j + 1] === "P") {
            if (splitArr[i + 1][j] !== "X" || splitArr[i][j + 1] !== "X") {
              result.push(0);
              continue outerFor;
            }
          }
          if (splitArr[i + 1][j - 1] === "P") {
            if (splitArr[i + 1][j] !== "X" || splitArr[i][j - 1] !== "X") {
              result.push(0);
              continue outerFor;
            }
          }
        }
      }
    }
    result.push(1);
  }
  return result;
};

test("distancing", () => {
  expect(distancing([["OOPOO", "OPOOO", "OOOOO", "OOOOO", "OOOOO"]])).toEqual([
    0,
  ]);
});
