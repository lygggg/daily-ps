/*
이해
어떤 정수들이 있고 이 정수들의 절댓값을 차례대로 담은 정수 배열
 absolutes와 이 정수들의 부호를 차롇로 담은 불리언 배열 signs이
  매개변수로 주어진다. 실제 정수들의 합을 구하여 return하라.
여기서 signs 배열의 값이 true면 양수, false면 음수다.

구해야하는것
실제 정수들의 합

계획
배열을 하나씩 지나가면서 true면 그냥 더하고 false 면 음수로 변경해주고
합해준다.
*/
const umyangPlus = (absolutes, signs) => {
    return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
}

test('umyangPlus', () => {
    expect(umyangPlus([4,7,12],[true,false,true])).toBe(9)
})

