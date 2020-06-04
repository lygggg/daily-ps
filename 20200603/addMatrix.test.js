/*
이해
2개의 행렬 arr1, arr2를 입력받아. 행렬의 덧셈의 결과를 반환하는 함수를 작성하시오.

구해야 하는 것
arr1, arr2두 행렬의 합을 반환한 배열

계획
이중 for문 돌려서 해당 인덱스의 위치가 맞는 값끼리 더해서 반환한다.
*/

const addMatrix = (arr1, arr2) => {
    const arr = [];
    for(let x = 0; x<arr1.length; x++) {
        arr[x] = [];
    }
    for(let i = 0; i<arr1.length; i++) {
        for(let e = 0; e<arr2[i].length; e++) {
            console.log(arr1[i][e], arr2[i][e], i, e)
            arr[i][e] = arr1[i][e] + arr2[i][e];
        }
    }
    return arr;
}

test('addMatrix', () => {
    expect(addMatrix([[1,2], [2,3]], [[3,4],[5,6]])).toEqual([[4,6],[7,9]])
    expect(addMatrix([[1],[2]], [[3],[4]])).toEqual([[4],[6]])
})