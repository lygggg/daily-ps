/*
이해
2명의 서로가 생각한 숫자를 맞추는 게임이다.
1~9까지 3자리 임의의 숫자를 정한뒤 서로에게
3자리 숫자를 불러 결과를 확인한다.
숫자는 맞지만 위치가 틀렸을때는 볼
숫자와 위치가 모두 맞을때는 스트라이크
숫자와 위치가 모두 틀렸을 때는 아웃
주어진 값의 첫번째 값은 질문한 3자리수
두번째 값은 스크라이크의 수
세번째 값은 볼의 수
배열끼리 비교해서 자리수가 같고 

계획
111부터 999까지의 자연수를 가진 배열을 만든다.
주어진 배열을 순환해서 [123,1,1] 123을 모든경우의수 
배열이랑 비교해서 스트라이크, 볼의갯수가 맞는지 확인하고
틀리면 삭제한다.
*/

const baseball = (baseball) => {
  let AllBaseball = new Array(1000)
    .fill(0)
    .map((e, i) => e + i)
    .filter((n) => n.toString().includes(0) === false)
    .filter((n) => n > 110)
    .filter((n) => new Set(n.toString().split("")).size === 3);

  for (let y = 0; y < baseball.length; y += 1) {
    AllBaseball = AllBaseball.filter(v => {
        if (
            checkBaseball(v, baseball[y][0])[0] === baseball[y][1] &&
            checkBaseball(v, baseball[y][0])[1] === baseball[y][2]
        ) {
            return true;
        }
        return false;
    })

    // for (let i = 0; i < AllBaseball.length; i += 1) {
    //   if (
        // checkBaseball(AllBaseball[i], baseball[y][0])[0] === baseball[y][1] ||
        // checkBaseball(AllBaseball[i], baseball[y][0])[1] === baseball[y][2]
    //   ) {
    //     AllBaseball.splice(AllBaseball.indexOf(AllBaseball[i]), 1);
    //   }
    // }
  }

  return AllBaseball.length;
};

const checkBaseball = (allBaseball, baseBall) => {
  let score = [0, 0];

  const arr1 = allBaseball.toString().split("");
  const arr2 = baseBall.toString().split("");
  for (let i = 0; i < 3; i++) {
    if (arr1[i] === arr2[i]) {
      score[0] += 1;
    } else if (arr2.includes(arr1[i])) {
      score[1] += 1;
    }
  }
  return score;
};

test("baseball", () => {
  expect(
    baseball([
      [123, 1, 1],
      [356, 1, 0],
      [327, 2, 0],
      [489, 0, 1],
    ])
  ).toBe(2);
});

test("checkBaseball", () => {
  expect(checkBaseball(123, 111)).toEqual([1, 0]);
  expect(checkBaseball(123, 223)).toEqual([2, 0]);
});