/*
이해

어떤 숫자에서 k개의 수를 제거했을 때 얻을 수있는 가장 큰 숫자를 구하려 한다.
예를들어 숫자 1924에서 수 두 개를 제거하면 [19, 12, 14, 92, 94] 를 만들 수 있다.
이 중 가장 큰 숫자는 94입니다.

구해야하는 것

어떤 숫자에서 k개의 수를 제거했을 때 얻을 수있는 가장 큰 숫자.

계획

number 배열을 스피릿으로 배열로 만든후,
첫번째 부터 돌면서 K번 만큼 만약 자신의 보다 index~-k 값이 더 크면 지운다.
지우면서 k의 값을 점점 감소한다.
*/

const makeLargeNumber = (number, k) => {
    let arr = number.split('');
    for(let i= 0; i < arr.length; i++) {
        for(let j = 0; j < k; j++) {
            if(!arr[j+i+1]){
                arr[j+i] = 0;
            }
            if(arr[i] < arr[j+i+1]) {
                arr[i] = 0;
                k-=1;
                break;
            }
        }
    }
    return arr.filter(e=> e!==0).join('');
}

test('makeLargeNumber', () => {
    expect(makeLargeNumber("1231234",3)).toBe("3234");
})