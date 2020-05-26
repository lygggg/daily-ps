/*
이해

배열 arr는 각 원소 0부터 9까지 이루어져있다.
이때 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고
제거한다.
제거하고 남은 수들을 반환할때 원소의 순서는 유지

구하는 것

배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수

계획

맵 돌려서 임의의값 하나 정해준다음
맵을 돌면서 임의의값이 현재 값과 다르면 현재값을
그 임의의 값에 넣어주고 현재값이 임의의값과 다른게 나올 경우만
출력해준다.
*/
const notEqualNumber = (arr) => {
    let firstNumber = '';
    return arr.map(e=> {
        if(firstNumber !== e) {
            firstNumber = e;
            return e;
        }
        else{
            return '';
        }
    }).filter(e=> e !== '')
}

test('notEqualNumber', () => {
    expect(notEqualNumber([1,1,3,3,0,1,1])).toEqual([1,3,0,1])
    expect(notEqualNumber([4,4,4,3,3])).toEqual([4,3])

})