const lottoGame = (lottos, win_nums) => {
  const rank = [6, 6, 5, 4, 3, 2, 1];
  let answer = [],
    ans = [],
    ans1 = [];

  lottos.map((x) => {
    let val = win_nums.find((y) => y == x);

    if (x == 0) ans1.push(x);
    if (val) {
      ans.push(val);
      ans1.push(val);
    }
  });
  answer.push(rank[ans1.length]);
  answer.push(rank[ans.length]);

  return answer;
};
