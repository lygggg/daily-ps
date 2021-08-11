/*
이해
주어진 A배열을 K회수만큼 회전한다. 배열 맨끝에 있는수가 한번 회전할경우 첫번째로 간다.

구해야하는것
배열을 회전하고 난 후의 결과 배열을 구하는 것
 
계획
크기가 같은 0으로된 배열을 생성한다.
기존의 배열 첫번째부터 기존의 인덱스 +3값에 값을 넣는다.
만약 해당하는 인덱스 +3이 배열의 크기를 넘으면
해당하는값 인덱스+3 -배열의크기+1의 위치에 값을 넣는다.
그후 값을 반환한다.
*/

const arrayRotation = (A, K) => {
    if(A.length === 0) {
        return [];
    }
    for(let i = 0; i<K; i++) {
       const last = A.pop();
       A.unshift(last);
    }
    return A;
}

test('arrayRotation', () => {
    expect(arrayRotation([3, 8, 9, 7, 6], 3)).toEqual([9, 7, 6, 3, 8])
    expect(arrayRotation([], 1)).toEqual([])
    // expect(arrayRotation([-1,-2,-3,-4,-1,-5,-6], 3)).toEqual([-1, -5, -6, -1,-2, -3, -4])
})