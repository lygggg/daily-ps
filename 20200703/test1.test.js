/*
기본 내장된 Hash나 set 라이브러리를 사용하지 않고, 배열
만으로 집합 set을 구현합니다.
세부적인 동작으로 다음과 같은 함수를 구현해야 합니다.
sum Base Set에 other set 원소들을 더해서 합집합을 리턴합니다.
이미 같은 값이 있으면 추가하지 않는다.
complement 베이스에서 원소들을 빼서 차집합을 리턴한다.
보통 값이 포함되어 있지 않으면 Base set원소를 그대로 리턴한다.
intersect Base Set와 other set 값과 비교해서, 두 집합에
모두 있는 원소들만 리턴한다.

구해야 하는 것
A, B로 생성한 Set원소개수, Sum 결과 집합 원소 개수,
complement 결과 집합 원소 개수
intersect 결과 집합 원소 개수
*/
const test1 = (arrayA, arrayB) => {
    const arr = [];
    arr[0] = divideArr(arrayA).length;
    arr[1] = divideArr(arrayB).length;
    arr[2] = sumArr(arrayA,arrayB).length;
    arr[3] = complementArr(arrayA, arrayB).length;
    arr[4] = intersectArr(arrayA, arrayB).length;
    return arr;
}

const divideArr = (arr) => {
    return arr.reduce((acc,curr) => acc.includes(curr) ? acc : [...acc,curr],[]);
}

const sumArr = (arr1, arr2) => {
    arr3 = divideArr(arr1.concat(arr2));
    return arr3;
}

const complementArr = (arr1, arr2) => {
    arr1 = divideArr(arr1);
    arr2 = divideArr(arr2);
    return arr1.filter(e=> !arr2.includes(e));
}

const intersectArr = (arr1, arr2) => {
    return divideArr(arr1.filter(e => arr2.includes(e)));
}

test('intersectArr', () => {
    expect(intersectArr([1,2,3,2], [1, 3])).toEqual([1,3])
})

test('complementArr', () => {
    expect(complementArr([1,2,3,2], [1, 3])).toEqual([2]);
})
test('sumArr', () => {
    expect(sumArr([1,2,3,2], [1,4])).toEqual([1,2,3,4])
})
test('test1', () => {
    expect(test1([1,2,3,2,1], [1,3])).toEqual([3,2,3,1,2]);
})

test('divideArr', () => {
    expect(divideArr([1,2,3,2])).toEqual([1,2,3]);
})

