const travelRoute = (tickets) => {
  const result = [];
  for (let i = 0; i < tickets.length; i++) {
    const isVisited = Array(tickets.length).fill(0);
    if (tickets[i][0] === "ICN") {
      isVisited[i] = true;
      BFS(tickets[i][1], isVisited, tickets, result);
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

const BFS = (ticket, isVisited, tickets, result) => {
  const stack = [];
  let resent;
  stack.push(new State(ticket, ["ICN", ticket], isVisited));
  while (stack.length !== 0) {
    const { ticket, arr, isVisited } = stack.pop();
    if (arr.length === tickets.length + 1) {
      result.push(arr);
    }
    for (let i = 0; i < tickets.length; i++) {
      if (isVisited[i]) {
        continue;
      }
      if (tickets[i][0] !== ticket) {
        continue;
      }
      if (resent === tickets[i].toString()) {
        continue;
      }
      isVisited[i] = true;
      const Visited = [...isVisited];
      arr.push(tickets[i][1]);
      const copyArr = [...arr];
      stack.push(new State(tickets[i][1], copyArr, Visited));
      resent = tickets[i].toString();
    }
  }
  return result;
};
test("travelRoute", () => {
  // expect(
  //   travelRoute([
  //     ["ICN", "A"],
  //     ["A", "B"],
  //     ["A", "C"],
  //     ["C", "A"],
  //     ["B", "D"],
  //   ])
  // ).toEqual(["ICN", "A", "C", "A", "B", "D"]);
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
