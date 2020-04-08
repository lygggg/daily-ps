// - arr에서 10진수를 2진수로 변환한다. arr[i].toString(2)
// - ['01001' , '10100',....] 안에 있는 string 값을 배열로 다시 만든다
// -지도 1 
//     [   
//         [0, 1, 0, 0, 1],
//         [1, 0, 1, 0, 0],
//         [1, 1, 1, 0, 0].
//         [1, 0, 0, 1, 0],
//         [0, 1, 0, 1, 1]
//     ]
// 지도 2
//     [
//         [1, 1, 1, 1, 0],
//         [0, 0, 0, 0, 1],
//         [1, 0, 1, 0, 1],
//         [1, 0, 0, 0, 1],
//         [1, 1, 1, 0, 0]
//     ]


// - 지도 두 개를 더한다.
// - [ [1, 2, 1, 1, 1],
//     [1, 0, 1, 0, 1],
//     [2, 1, 2, 0, 1],
//     [2, 0, 0, 1, 1],
//     [1, 2, 1, 1, 1]
//     ...
//   ]

//  [3,  '', 0, 1, 1],
//   arr[i] = 2  arr[i-1] =undefined

// - 샵과 공백으로 바꿀때 새로운 배열에 넣는데 현재 위치가 공백이면 arr[i] 
// - 더해서 0보다 크면 #으로 출력, 0이면 공백으로 출력.


const secretMap = (n, arr1, arr2) => {


    const binaryStringArray1 = decimalToBinary(arr1, n);
    const binaryStringArray2 = decimalToBinary(arr2, n);
    const map1 = binaryStringArray1.map(splitToNumbers)
    const map2 = binaryStringArray2.map(splitToNumbers)
    const combinedMap = sumArray(map1, map2);
    
    return numberToSharpAndEmpty(combinedMap).map(v => v.join(''));
}

const numberToSharpAndEmpty = (arr) => {    
    return arr.map((v1, i1) => {
        return v1.map((v2, i2) => {
            return (v2 === 0) ? ' ' : '#';  
        }
    )})
};


const sumArray = (arr1, arr2) => arr1.map((v1, i1) => v1.map((v2, i2) => v2 + arr2[i1][i2]));

const decimalToBinary = (array, n) => array.map(item => item.toString(2).padStart(n, '0'));

const splitToNumbers = (str) => str.split('').map(e => Number(e));

test('sumArray', () => {
    expect(sumArray([
        [0, 1, 0, 0, 1],
        [1, 0, 1, 0, 0],
        [1, 1, 1, 0, 0],
        [1, 0, 0, 1, 0],
        [0, 1, 0, 1, 0]
    ], [
        [1, 1, 1, 1, 0],
        [0, 0, 0, 0, 1],
        [1, 0, 1, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 1, 1, 0, 0]
    ]
    )).toEqual([[1, 2, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [2, 1, 2, 0, 1],
    [2, 0, 0, 1, 1],
    [1, 2, 1, 1, 0]])
})

test('stringToNumber', () => {
    expect(splitToNumbers('11100')).toEqual([1, 1, 1, 0, 0])
});

test('decimalToBinary', () => {
    expect(decimalToBinary([9, 20, 28, 18, 11], 5)).toEqual(['01001', '10100', '11100', '10010', '01011']);
})

test('secretMap', () => {
    expect(secretMap(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28])).toEqual(["#####", "# # #", "### #", "#  ##", "#####"]);
    // expect(secretMap(5, [9, 20, 28, 18, 11], [31, 1, 21, 17, 28])).toEqual(["#####","# # #", "### #", "# ##", "#####"]);
});

test('numberToSharpAndEmpty', ()=> {
    expect(numberToSharpAndEmpty([[1, 2, 1, 1, 1],
        [1, 0, 1, 0, 1],
        [2, 1, 2, 0, 1],
        [2, 0, 0, 1, 1],
        [1, 2, 1, 1, 1]])).toEqual([
            ['#', '#', '#', '#', '#'],
            ['#', ' ', '#', ' ', '#'],
            ['#', '#', '#', ' ', '#'],
            ['#', ' ', ' ', '#', '#'],
            ['#', '#', '#', '#', '#']
        ])

})