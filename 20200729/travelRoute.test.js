/*
이해
주어진 항공권을 모두 이용하여 여행경로를 짜려고 합니다. 항상 "ICN" 공항에서 출발합니다.
항공권 정보가 담긴 2차원 배열 tickets가 매개변수로 주어질 때, 방문하는 공항 경로를
배열에 담아 리턴하도록 솔루션 함수를 작성하시오.

구해야 하는 것
배열을 생성한다. 티켓을 for문을 돌면서 재귀함수를 작성하고, 재귀함수에서 만약 쌓인 배열의 길이가
tickets길이+1이라면 여행 경로를 배열에 넣는다. 그후 배열에 쌓인 여행경로를 sort한다.
*/

const travelRoute = (tickets) => {
    const routeHistories = [];
    dfs(tickets.length, tickets, "ICN", routeHistories, ["ICN"]);
    routeHistories.sort()
    return routeHistories[0];
}

const dfs = (ticketLength, tickets, targetRoute, routeHistories, routeHistory) => {
    if(tickets.length===1) {
        routeHistory.push(tickets[0][1]);
    }
    if(routeHistory.length === ticketLength+1){
        routeHistories.push(routeHistory);
    }
   const foundRoutes = tickets.filter(e=> e[0] === targetRoute);
   if(foundRoutes.length > 0){
   for(let i = 0; i<foundRoutes.length; i++) {
       dfs(ticketLength, tickets.filter(e=> e!==foundRoutes[i]), foundRoutes[i][1], routeHistories, [...routeHistory,foundRoutes[i][1]])
   }
}
}

test('travelRoute', () => {
    // expect(travelRoute([["ICN","JFK"], ["HND","IAD"],["JFK","HND"]])).toEqual(["ICN","JFK","HND","IAD"]);
    expect(travelRoute([["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL","SFO"]])).toEqual(["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"])
})