const travelRoute = (tickets) => {
  const result = [];
  for (let i = 0; i < tickets.length; i++) {
    if (tickets[i][0] === "ICN") {
      const arr = DFS(tickets[i][1], tickets, result, i);
    }
  }
  return result.sort()[0];
};

class State {
  constructor(ticket, arr, isVisited) {
    this.ticket = ticket;
    this.arr = arr;
    this.isVisited = isVisited;
  }
}

const DFS = (ticket, tickets, result, index) => {
  const stack = [];
  const arr = ["ICN", ticket];
  const isVisited = new Array(tickets.length).fill(0);
  isVisited[index] = true;
  stack.push(new State(ticket, arr, isVisited));

  // 탐색할 상태가 남아있는 동안 계속 검사
  while (stack.length !== 0) {
    let resent;
    const { ticket, arr, isVisited } = stack.pop();
    if (arr.length === tickets.length + 1) {
      result.push(arr);
    }

    for (let i = 0; i < tickets.length; i++) {
      const nextState = tickets[i];
      if (ticket !== nextState[0]) {
        continue;
      }
      if (isVisited[i]) {
        continue;
      }
      if (resent === nextState.toString()) {
        continue;
      }
      const copyArr = [...arr];
      const copyIsVisited = [...isVisited];
      copyArr.push(nextState[1]);
      copyIsVisited[i] = true;
      stack.push(new State(nextState[1], copyArr, copyIsVisited));
      resent = nextState.toString();
    }
  }
  return result;
};
test("travelRoute", () => {
  expect(
    travelRoute([
      ["ICN", "A"],
      ["A", "B"],
      ["A", "C"],
      ["C", "A"],
      ["B", "D"],
    ])
  ).toEqual(["ICN", "A", "C", "A", "B", "D"]);
  expect(
    travelRoute([
      ["ICN", "SFO"],
      ["ICN", "ATL"],
      ["SFO", "ATL"],
      ["ATL", "ICN"],
      ["ATL", "SFO"],
    ])
  ).toEqual(["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"]);
});
