const readline = require("readline");

const solution = (input) => {
  let dp = new Array(input).fill(0);
  dp[0] = 1;
  dp[1] = 2;
  for (let i = 2; i < input; i++) {
    dp[i] = dp[i - 2] + dp[i - 1];
  }
  console.log(dp[input - 1]);
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
