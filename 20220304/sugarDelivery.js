/*
이해
상근이는 요즘 설탕공장에서 설탕을 배달하고 있다. 상근이는 사탕가게에 설탕을
정확하게 N킬로그램을 배달해야 한다. 설탕공장에서 만드는 설탕은 봉지에 담겨져있다.
봉지는 3킬로그램 봉지와 5킬로그램 봉지가 있다.
상근이는 귀찮기 때문에, 최대한 적은 봉지를 들고 가려고 한다. 예를 들어, 18킬로그램 설탕을
배달해야 할 때, 3킬로그램 봉지 6개를 가져가도 되지만, 5킬로그램 3개와 3킬로그램 1개를
배달하면, 더 적은 개수의 봉지를 배달할 수 있다. 상근이가 설탕을 정확하게 N킬로그램
배달해야 할 때, 봉지 몇 개를 가져가면 되는지를 그 수를 구하는 프로그램을 작성하세요.

계획
3와 5로 나눠보고, 
*/

const readline = require("readline");

const solution = (input) => {
  let count = 0;
  while (input > 0) {
    if (input % 5 === 0) {
      input -= 5;
      count += 1;
      continue;
    }
    if (input % 3 === 0) {
      input -= 3;
      count += 1;
      continue;
    }
    if (input > 5) {
      input -= 5;
      count += 1;
      continue;
    } else {
      count = -1;
      break;
    }
  }

  console.log(count);
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input;
rl.on("line", function (line) {
  input = line;
  rl.close();
}).on("close", function () {
  solution(input);
  process.exit();
});
