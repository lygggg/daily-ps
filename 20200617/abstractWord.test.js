/*
# [문자열 압축](https://programmers.co.kr/learn/courses/30/lessons/60057)

이해

주어진 s문자열 을 압축해서 가장 짧은 문자열을 만들어라.

계획

일단 배열을 2개 만든다.
첫번째 배열은 임시로 압축한 문자열을 넣을배열
두번째 배열은 배열의 길이를 저장하는 배열
이중 for문으로 첫번째 부터 그 위치에서부터 압축길이 만큼 비교해서 같으면 중복된배열에 넣어주고
결과 배열에 중복된 배열을 계산하든 카운트를 증가시키든 야무지게 넣는다. for문의 증가수는 i+=중복된 배열의 길이다. 

2a2ba3c => 7

*/

const abstractWord = (s) => {
  const answer = [];
  for (let i = 1; i <= s.length; i += 1) {
    const result = [];
    let count = 0;
    let duplicate = s.slice(0, i);

    for (let j = 0; j <= s.length; j += i) {
      if (duplicate === s.slice(j, j + i)) {
        count += 1;
      } else {
          if(count>=2) {
            result.push(count.toString().concat(duplicate));
          }
          else {
            result.push(duplicate);
          }
        duplicate = s.slice(j, j + i);
        count = 1;
      }

      if (j + i > s.length) {
        result.push(s.slice(j, s.length));
      }

    }
    answer.push(result.join("").length);
  }
  return Math.min(...answer);
};

test("abstractWord", () => {
//   expect(abstractWord("abcabcabcabcdededededede")).toBe(14);
//   expect(abstractWord("ababcdcdababcdcd")).toBe(9);
//   expect(abstractWord("xababcdcdababcdcd")).toBe(17);
  expect(abstractWord("aaaaaaaaaaabb")).toBe(5);
});
