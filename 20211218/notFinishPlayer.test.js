/*
이해
수많은 마라토너들이 참여했다. 한명의 선수를 제외하곤
모든 선수가 마라톤을 완주했다. 참여한 선수들의
이름이 담긴 배열participant와 완주한 선수들의 이름이
담긴 배열 completion이 주어질때, 완주하지 못한 
선수의 이름을 return해라. 

제한사항 
마라톤에 참여한 선수는 1명~100000명이다.
참가자 이름은 1개이상 20개 이하의 알파벳 소문자
동명이인 있을 수 있다.

구해야하는 것
완주하지 못한 선수의 이름

계획
completiong배열을 돌면서 particiapnt와 
비교하면서 해당 원소제거후 마지막 남은 원소 리턴
*/

const notFinishPlayer = (participant, completion) => {
  //   let player = {};
  //   for (let i = 0; i < participant.length; i++) {
  //     if (!player[participant[i]]) {
  //       player[participant[i]] = 1;
  //     } else {
  //       player[participant[i]] += 1;
  //     }
  //     if (!player[completion[i]]) {
  //       player[completion[i]] = -1;
  //     } else {
  //       player[completion[i]] -= 1;
  //     }
  //   }
  //   return Object.keys(player).find((key) => player[key] == 1);

  const map = new Map();

  for (let i = 0; i < participant.length; i++) {
    let a = participant[i];
    let b = completion[i];

    map.set(a, (map.get(a) || 0) + 1);
    map.set(b, (map.get(b) || 0) - 1);
  }
  for (let [k, v] of map) {
    if (v > 0) return k;
  }
};

test("notFinishPlayer", () => {
  expect(notFinishPlayer(["leo", "kiki", "eden"], ["eden", "kiki"])).toBe(
    "leo"
  );
});
