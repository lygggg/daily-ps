/*
이해

주어진 항공권을 모두 이용하여 여행경로를 짜려고 한다.
항상 ICN공항에서 출발한다.
항공 정보가 당김 2차원 배열 tickets가 매개변수로 주어진다.

구해야하는 것
방문하는 공항 경로를 배열에 담아 return해라.

계획
 tickets배열을 for문으로 돌면서 만약 배열안의 첫번째가 ICN이면 배열에서 제거하고,
 재귀를 만들어서 ICN의 두번째 문자열을 매개변수로 받고, 그 가져온 매개변수가 for문을
 통해 돌린 2번째 값과 같으면 arr에 해당 배열의 위치값을 적고 

*/

const tracvelRoute = (tickets) => {
    const finalArr = [];
    const arr = [];
    recursive(tickets,'ICN', arr, finalArr);
    // console.log(finalArr);
    return arr;
}

const recursive = (tickets, nextWord, arr, finalArr) => {
    // console.log(arr);
    if(tickets.length===0) {
        arr.push(nextWord);
        console.log(arr);
        finalArr.push(arr);
        return;
    }

    // for(let i =0; i<tickets.length; i++) {
    //     if(tickets[i][0] === nextWord) {
    //         arr1.push(tickets[i]);        
    //     }
    // }

    // arr1.sort(function(a,b) {
    //     return a[1] < b[1] ? -1:1;
    // })
    // console.log(tickets);
    for(let i =0; i<tickets.length; i++) {
        // console.log(tickets[i][0], nextWord)
            if(tickets[i][0] === nextWord) {
                const copy = arr.slice();
                copy.push(nextWord);
                // console.log(nextWord);
                const tickets1= tickets.slice();
                tickets1.splice(tickets.indexOf(tickets[i]),1);
                recursive(tickets1, tickets[i][1], copy,finalArr);
            }
        
    }
    // console.log()
}

test('travelRoute', () => {
    // expect(tracvelRoute([['ICN', 'A'], ['ICN', 'B'], ['B', 'ICN']])).toEqual(['ICN', 'B', 'ICN', 'A']);
    // expect(tracvelRoute([['ICN', 'JFK'], ['HND', 'IAD'], ['JFK', 'HND']])).toEqual(['ICN', 'JFK', 'HND', 'IAD']);
    expect(tracvelRoute([['ICN', 'SFO'], ['ICN', 'ATL'], ['SFO', 'ATL'], ['ATL', 'ICN'], ['ATL','SFO']])).toEqual(["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"]);
})