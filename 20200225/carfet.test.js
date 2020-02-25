/*
이해
브라운+레드는 리턴배열의 곱
정사각형일 경우 레드 +2 가 가로세로길이다.
계획
브라운레드의 합에서 제곱근을 구해서 딱 맞아 떨어질때 정사각형이므로 바로 리턴한다.
아닐경우 브라운 레드의 합을 구해서 약수를 구하고 정렬한다. 맨앞 가로의 길이가 레드+2일경우를 구해서 리턴한다.
*/

const carfet = (brown, red) => {
    console.log(Math.ceil(Math.sqrt(brown + red)), Math.sqrt(brown + red))
    if (Math.sqrt(brown + red) === Math.ceil(Math.sqrt(brown + red))){
        console.log(brown, red)
        return ifSquare(brown + red)
    }
}

const ifSquare = (AddBrownRed) => {
    console.log(AddBrownRed)
    console.log(Math.sqrt(AddBrownRed));
    return [Math.sqrt(AddBrownRed), Math.sqrt(AddBrownRed)];
}



test('carfet', () => {
    expect(carfet(8, 1)).toEqual([3, 3]);
})

test('ifSquare', () => {
    expect(ifSquare(9)).toEqual([3, 3]);
})
