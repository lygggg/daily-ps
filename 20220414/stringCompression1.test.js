/*
이해
데이터 처리 전문가가 되고 싶은 어피치는 문자열을 압축하는 방법에 대해
공부를 하고 있습니다. 최근에대량의 데이터를 처리하기 위한 간단한 비손실 압축 방법에 대해 공부를 하고 있는데,
문자열에서 같은 값이 연속해서 나타나는 것을 그 문자의 개수와
반복되는 값으로 표현하여 더 짧은 문자열로 줄여서 표현하는
알고리즘을 공부하고 있습니다. 간단한 예로 "aabbaccc"인 경우 "2a2ba3c"와 같이 표현할 수 있는데,
이러한 방식은 반복되는 문자가 적은 경우 압축률이 낮다는 단점이 있습니다.
예를 들면, "abcabcdede"와 같은 문자열은 전혀 압축되지 않습니다.
어피치는 이러한 단점을 해결하기 위해 문자열을 1개 이상의 단위로 잘라서 압축하여
더 짧은 문자열로 표현할 수 있는지 방법을 찾아보려고 합니다.

예를들어, "ababcdcdababcdcd"의 경우 문자를 1개 단위로 자르면 전혀 압축되지 않지만, 2개 단위로
잘라서 압축한다면 "2ab2cd2ab2cd"로 표현할 수 있습니다. 다른 방법으로는
8개 단위로 잘라서 압축한다면 "2ababcdcd"로 표현할 수 있으며, 이때가 가장 짧게 압축하여 
표현할 수 있는 방법입니다.

다른 예로, "abcabcdede"와 같은 경우, 문자를 2개 단위로 잘라서 압축하면 "abcabc2de"가 되지만,
3개 단위로 자른다면 "2abcdede"가 되어 3개 단위가 가장 짧은
압축 방법이 됩니다. 이때 3개 단위로 자르고 마지막에 남는 문자열은 그대로 붙여주면 됩니다.

압축할 문자열 s가 매개변수로 주어질 때, 위에 설명한 방법으로 1개 이상 단위로 문자열을 잘라 표현한 문자열중 가장 짧은
것의 길이를 리턴하시오.

계획
1부터 s의 length까지 문자열 갯수를 압축해야한다. 이중 for문을 돌면서 최근값을
0부터 i까지로 잡고 만약 중복되는 값이 있으면 count+1을 해주고 중복되지 않으면 count가 2이상일 경우
count + 최근값을결과 문자열에 합치고 카운트가 2이상이 아닐경우 그냥 최근값을 합치고 최근 값을 새로 변경해준다. 
그후 결과 array에 순서대로 쌓는다. 마지막으로 가장 길이가 짧은 문자열을 리턴한다.
*/

const stringCompression1 = (s) => {
  const resultArr = [];
  for (let i = 1; i <= s.length; i++) {
    let duplicate = s.slice(0, i);
    let count = 0;
    let result = [];
    for (let j = 0; j <= s.length; j += i) {
      if (duplicate === s.slice(j, j + i)) {
        count += 1;
      } else {
        if (count >= 2) {
          result.push(count + duplicate);
        } else {
          result.push(duplicate);
        }
        duplicate = s.slice(j, j + i);
        count = 1;
      }
      if (j + i > s.length) {
        result.push(s.slice(j, s.length));
      }
    }
    resultArr.push(result.join("").length);
    result = [];
  }
  return Math.min(...resultArr);
};

test("stringCompression", () => {
  expect(stringCompression1("aabbaccc")).toBe(7);
});
