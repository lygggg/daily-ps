/*
나만의 카카오 성격 유형 검사지를 만들려고 합니다.
성격 유형 검사는 다음과 같은 4개 지표로 성격 유형을 구분합니다. 성격은 각 지표에서
두 유형중 하나로 결정됩니다.
1번 지표 라이언형(R), 튜브형(T)
2번 지표 콘형(C), 프로도형(F)
3번 지표 제이지형(J), 무지형(M)
4번 지표 어피치형(A), 네오형(N)
4개의 지표가 있으므로 성격 유형은 총 16가지가 나올 수 있습니다. 예를들어
RFMN이나 TCMA와 같은 성격 유형이 있습니다.
검사지에는 총 n개의 질문이 있ㄱ고, 각 질문에는 아래와 같은 7개의 선택지가
있습니다.
매우 비동의
비동의
약간 비동의
모르겠음
약간 동의
동의
매우 동의
각 질문은 1가지 지표로 성격 유형 점수를 판단합ㄴ디ㅏ.
예를 들어, 어떤 한 질문에서 4번 지표로 아래 표처럼 점수를 매길 수 있습니다.

계획
가장먼저 choices와 성격유형점수를 {1 :3}으로 정리한다.
survey와 choices를 차례대로 훑으면서 new set를 만들어놓고
만약 survey가 R,T면 첫번째 배열
C,F면 두번째 배열
J,M이면 세번째 배열
A,N이면 네번째 배열에 해당 아이디를 점수만큼 더한다.
저장해놓은 배열을 우선순위 정렬하고 만약 같으면 알바펫순서로 정렬한다.

 */

const kakao1 = (survey, choices) => {
  const score = { 1: 3, 2: 2, 3: 1, 4: 0, 5: 1, 6: 2, 7: 3 };
  const resultArr = [
    { R: 0, T: 0 },
    { C: 0, F: 0 },
    { J: 0, M: 0 },
    { A: 0, N: 0 },
  ];
  let result = [];
  for (let i = 0; i < survey.length; i++) {
    if (survey[i][0] === "R") {
      if (choices[i] > 3) {
        resultArr[0]["T"] += score[choices[i]];
      } else {
        resultArr[0]["R"] += score[choices[i]];
      }
    }
    if (survey[i][0] === "T") {
      if (choices[i] > 3) {
        resultArr[0]["R"] += score[choices[i]];
      } else {
        resultArr[0]["T"] += score[choices[i]];
      }
    }
    if (survey[i][0] === "C") {
      if (choices[i] > 3) {
        resultArr[1]["F"] += score[choices[i]];
      } else {
        resultArr[1]["C"] += score[choices[i]];
      }
    }
    if (survey[i][0] === "F") {
      if (choices[i] > 3) {
        resultArr[1]["C"] += score[choices[i]];
      } else {
        resultArr[1]["F"] += score[choices[i]];
      }
    }
    if (survey[i][0] === "J") {
      if (choices[i] > 3) {
        resultArr[2]["M"] += score[choices[i]];
      } else {
        resultArr[2]["J"] += score[choices[i]];
      }
    }
    if (survey[i][0] === "M") {
      if (choices[i] > 3) {
        resultArr[2]["J"] += score[choices[i]];
      } else {
        resultArr[2]["M"] += score[choices[i]];
      }
    }
    if (survey[i][0] === "A") {
      if (choices[i] > 3) {
        resultArr[3]["N"] += score[choices[i]];
      } else {
        resultArr[3]["A"] += score[choices[i]];
      }
    }
    if (survey[i][0] === "N") {
      if (choices[i] > 3) {
        resultArr[3]["A"] += score[choices[i]];
      } else {
        resultArr[3]["N"] += score[choices[i]];
      }
    }
  }
  resultArr.forEach((e) => {
    const ordered = {};
    Object.keys(e)
      .sort()
      .forEach(function (key) {
        ordered[key] = e[key];
      });
    result.push(
      Object.entries(ordered).sort(([, v1], [, v2]) => {
        return v2 - v1;
      })[0][0]
    );
  });
  return result.join("");
};

test("kakao1", () => {
  expect(kakao1(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5])).toBe("TCMA");
});
