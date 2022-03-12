/*
이해
6종류(1원,5원,10원,50원,100원,500원)의 동전을 생산하는 공장이
있습니다. 특정 금액만큼 동전을 생산해달라는 의뢰가 들어왔을 때,
최소 비용으로 그 금액만큼 동전을 생산하고자 합니다.
만약 각 동전의 생산 단가가 위의 표와 같고, 의뢰받은 금액이 4578원이라면,
최소의 비용으로 4578원 어치의 동전을 생산하는 방법은 다음과 같습니다.
즉, 1원짜리 동전을 3개, 5원짜리 동전을 5개, 50원짜리 동전을 1개,
100원짜리 동전을 45개 생산하면 2308원이라는 최소 비용으로 4578어치의
동전을 생상할 수 있습니다. 2308원보다 적은비용으로 4578원 어치의 동전을
생상한 수 있는 방법은 없습니다.

계획
먼저 화폐단위 500원부터 시작해서 이익이 큰 동전들을 순서대로 배열에
넣는다. 그후 동전을 배열의 순서대로 해당 값을 나누면서 동전을 얼마나
사용하는지 계산하고 단가와 곱한 결과를 리턴
*/

const sk = (money, costs) => {
  const rankArr = [];
  const moneyArr = [1, 5, 10, 50, 100, 500];
  let result = 0;

  for (let i = 0; i < costs.length; i++) {
    rankArr.push({
      index: moneyArr[i],
      money: moneyArr[i] + (moneyArr[i] - costs[i]),
      cost: costs[i],
    });
  }

  rankArr.sort((a, b) => b.money - a.money);

  for (let i = 0; i < rankArr.length; i++) {
    result += Math.floor(money / rankArr[i].index) * rankArr[i].cost;
    money %= rankArr[i].index;
    if (money === 0) {
      break;
    }
  }
  return result;
};

test("sk", () => {
  expect(sk(4578, [1, 4, 99, 35, 50, 1000])).toBe(2308);
});
