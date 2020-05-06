/*
이해
0또는 양의 정수가 주어졌을때 정수를 이어 붙여 만들 수 있는 가장 큰수 를 알아내주세요
주어진 정수가 [6,10,2]면 가장 큰 수는 6210입니다.
0또는 양의정수가 담긴 배열 numbers가 주어질 때 순서를 재 배치하여
만들 수 있는 가장 큰 수를 문자열로 바꾸어 리턴

계획
컴페어 함수로 
앞자리 뒷자리를 비교해서 높은수를 앞으로 +

*/
const lagestNumber = (numbers) => {
    numbers.sort(function(a,b) {
        return a+''+b > a+''+b? -1 : 1;
    })
    return numbers.toString();
}

const sortTrue = (numbers) => {
    numbers.sort(function(a,b) {
        return  a+''+b > b+''+a ? -1: 1;
    })
    return numbers;
}


test('lagestNumber', () => {
    expect(lagestNumber([6,10,2])).toBe('6210');
    expect(lagestNumber([3,30,34,5,9])).toBe('9534330');
})

test.only('sortTrue', () => {
    expect(sortTrue([30,3])).toEqual([3,30]);
    expect(sortTrue([30,3,34])).toEqual([34,3,30]);

})