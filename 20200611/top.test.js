/*
이해
N은 탑의 개수
발사한 신호는 신호를 보낸 탑보다 높은 탑에서만 수신한다.
한번 수신된 신호는 다른 탑으로 송신되지 않는다.
높이가 6,9,5,7,5인 다섯 탑이 왼쪽으로 동시에 레이저 신호를 발사하면
높이 4인 탑에서 발사한 신호는 높이가 7인 네번째가 수신하고, 높이가 7인 네번째는 높이가 9인 탑이 수신,
높이가 5인 세번째 탑의 신호는 높이가 9인 두번째 탑이 수신한다. 높이가 9인 두번째 탑과 높이가 6인
첫번째 탑이 보낸 신호는 어떤 탑에서도 수신할 수없다.

구해야 하는것
수신탑들의 높이가 담긴 배열

계획
새로운 배열을 만들고
heights 배열을 for문으로 왼쪽에서부터 순환하면서 해당하는 위치의 앞에 있는값들이
 현재의 값보다 큰수를 찾아서 그수의 위치를 배열에 넣는다.
*/

const top1 = (heights) => {
    const arr = [];
   const rvs = heights;
   for(let e = 0; e<rvs.length; e++) {
   for(let i = e; i>=0; i--) {
       if(rvs[e]<rvs[i]) {
           arr.push(i+1);
           break;
       }
       if(i===0) {
        arr.push(0);
    }
   }
}
while(arr.length !== heights.length) {
    arr.unshift(0);
}
return arr;
}

const top2 = (heights) => {
   return heights.map((v, i) => {
        while(i>0) {
            i--;
            if(heights[i]>v) {
                return i+1;
            }
        }
        return 0;
    })
}



test('top', () => {
    [top1, top2].forEach(rsn => {
        expect(rsn([6,9,5,7,4])).toEqual([0,0,2,2,4]);
    })
})