/*
이해
- 엄지손가락은 상하좌우 4가지 방향으로만 이동할 수 있다.
- 왼쪽 열의 3개의 숫자 1,4,7 을 입력할 때는 왼손 엄지손가락 사용
- 오른쪽 열의 3개 숫자 3,6,9를 입력할 때는 오른손 엄지 손가락 사용
- 가운데 열의 4개의 숫자 2,5,8,0을 입력할 때는 두 엄지손가락의
- 현재 키패드의 위치에서 더 가까운 엄지손가락 사용
- 만약 두 엄지손가락의 거리가 같다면 오른손 잡이는 오른손 엄지
- 왼손 잡이는 왼손 엄지 사용

주어지는것
순서대로 누를 번호가 담긴 배열 numbers
왼손 잡이인지 오른손 잡이인지를 나타내는 문자열 hand가 매개변수로 주어진다.


구해야 하는값
각 번호를 누른 엄지손가락이 왼손인 지 오른손인 지를 나타내는 연속된 문자열 형태
로 리턴해라.

계획
일단 numbers 배열을 순환하면서 1,4,7이 나오면 L을 출력, 
3,6,9가 나오면 R을 출력
임의의 배열에 오른손, 왼손이 눌렀던 마지막 번호들을 배열에 넣어둔다.
만약 2,5,8,0이 나오면 마지막으로 눌렀던 손 배열
에서 둘중에 거리가 가까운것(둘다 빼서 양수로 바꾼후 더 작은값인 손)
만약에 거리가 같으면 사용자의 hand출력

*/
const kakao1 = (numbers, hand) => {
    let recentR = [];
    let recentL = [];
    let result = [];
    hand=== 'right' ? hand = 'R' : hand = 'L'
    numbers.forEach(i => {
        if(i===1 || i===4 || i===7) {
            recentL.pop();
            result.push('L');
            console.log(i)
            recentL.push(i)
        }

        if(i === 3 || i === 6 || i === 9) {
            recentR.pop();
            result.push('R');
            recentR.push(i)
        }
        
        if(i === 2 || i === 5 || i === 8 || i === 0) {
            const R = recentR[0] - i;
            const L = recentL[0] - i;
            
            if(Math.abs(recentR[0]-i) < Math.abs(recentL[0]-i)){
                console.log(recentL[0], recentR[0], result, 'dasdsa')
                recentR.pop();
                result.push('R')
                recentR.push(i)
            }

            if(Math.abs(recentR[0]-i) > Math.abs(recentL[0]-i)){
                console.log(recentR[0], recentL[0], i, 'sad')
                if(Math.abs(recentR-i)%3 ===0 || Math.abs(recentL-i)%3 ===0 ){
                    console.log('fsddas', recentR[0], recentL[0], i)
                // if(hand == 'L') {
                //     recentL.pop();
                // result.push('L')
                // recentL.push(i)
                // }   
                // else if(hand == 'R') {
                //     recentR.pop();
                // result.push('R')
                // recentL.push(i)
                // }
                }
                
                recentL.pop();
                result.push('L')
                recentL.push(i)
                
            }
            
            if(Math.abs(recentR[0]-1) === Math.abs(recentL[0]-1)){
                result.push(hand)
            }
        }

    })
    console.log(result);
    return result.join('')
}

test("kakao1", () => {
   expect(kakao1([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5],"right")).toBe("LRLLLRLLRRL"
   )
//    expect(kakao1([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2],"left")).toBe("LRLLRRLLLRR"
//    )
  });
  