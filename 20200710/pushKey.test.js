/*
이해

왼손과 엄지손가락만을 이용해서 숫자만을 입력하고 한다.
맨처음 왼손 엄지손가락은 *, 오른손 엄지손가락은 # 키패드 위치에서 시작하며, 
계획
엄지손가락은 상하좌우 4가지 방향으로만 이동 할 수 있으며, 키패드 이동 한 칸은 거리로 1에 해당한다.
윈쪽 열의 3개의 숫자 1, 4 ,7을 입력할 때는 왼손 엄지 손가락으로 사용합니다.
오른쪽 열의 3개의 숫자 3,6,9는 오른손 엄지손가락
가운데 열의 4개의 숫자 2,5,8,0을 입력할 때는 두 엄지손가락의 현재 키패드의 위치에서 더 가까운 엄지손가락을 사용합니다.
만약 두 엄지 손가락의 거리가 같다면 오른손 잡이는 오른손 엄지, 왼손잡이는 왼손 엄지 손가락을 사용한다.

구해야 하는 것
배열에 왼손 엄지 손가락을 사용한 경우는 L 오른손을 사용한 경우는 R을 순서대로 이어붙인 문자열 형태로 리턴해라.

계획
for문을 돌려서 numbers의 길이만큼 돌고, 만약 숫자값이 1,4,7이면 L 푸쉬, 3,6,9는 R푸쉬
만약 가운데 열 2,5,8,0이면, 두 엄지 손가락 중에 더 가까운 엄지손가락을 사용한다.
만약 같으면 오른손 잡이는 오른손엄지 손가락, 왼손잡이는 왼손 엄지 손가락을 사용한다.
*/
function solution(numbers, hand) {
    let Rhand = 12;
    let Lhand = 10;
    const arr = [];
    
   numbers = numbers.map(e => {
        if(e===0) {
            e =  11;
        }
       return e
    })

    for(let i=0; i<numbers.length; i++) {
        if(numbers[i] === 1 || numbers[i]=== 4 || numbers[i]=== 7) {
            arr.push('L')
            Lhand = numbers[i];
        }
        
        if(numbers[i] === 3 || numbers[i]=== 6 || numbers[i]=== 9) {
            arr.push('R')
            Rhand = numbers[i];
        }
        if(numbers[i] === 2 || numbers[i]=== 5 || numbers[i]=== 8 || numbers[i] === 11) {

                if(getDistance(Rhand,numbers[i]) > getDistance(Lhand, numbers[i])) {
                    arr.push('L')
                    Lhand = numbers[i];
                }
            if(getDistance(Rhand,numbers[i]) < getDistance(Lhand, numbers[i])) {
                arr.push('R')
                    Rhand = numbers[i];
            }
            
            if(getDistance(Rhand,numbers[i]) === getDistance(Lhand, numbers[i])) {
                if(hand === 'right') {
                    arr.push('R');
                    Rhand = numbers[i];
                }
                else {
                    arr.push('L');
                    Lhand = numbers[i]
                }
            }
        }
    }
    return arr.join('')
}

const getDistance = (hand, number) =>{
    let count = 0;
    
    while(true) {
        
        if(hand === number) {
        return count;
    }
        
        count+=1;
        if(number-1 === hand || number+1 == hand) {
            return count;
        }
        if(hand > number) { // 7 5 9 5
            hand-=3;
        }
        else {
            if(hand < number) {
            hand+=3;
        }
        }
    }
}