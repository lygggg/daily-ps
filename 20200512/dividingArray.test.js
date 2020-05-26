/*
이해
주어진 배열 arr
나눠야하는 값 divisor

구해야하는 것
array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

계획
arr를 map으로  원소마다 divisor로 나누면서
나머지가 0이면 리턴 만약 리턴값이 비어있으면 -1
*/

const dividingArray = (arr,divisor) => {
    const answer = arr.map(e=> e % divisor === 0 ? e : '').filter(e=> e !== '').sort((a,b) => a - b);
   return answer.length !== 0 ? answer : [-1];
}

test('dividingArray', () => {
    expect(dividingArray([5,9,7,10], 5)).toEqual([5,10]);
    // expect(dividingArray([2,36,1,3], 1)).toEqual([1,2,3,36]);
})