/*
이해

124 나라에서는 10진법이 아닌 자신들만의 규칙으로 수를 표현
124 나라는 자연수만 존재한다.
모든 수를 표현할 때 1,2,4만 사용한다.

구해야하는 것

계획

회고
기봉: 3진수로 바꿔서 풀이 안된다고 했는데 풀었다 뿌듯하다. 
영규: 너무 어렵다 ㅠㅠ


*/
const NumberWorld = (n) => {
    let arr = [];   
    const three = n.toString(3)
    let threeArr = three.split('');
    while(threeArr.length!==0){
    if(threeArr[threeArr.length-1] === '0') {
        arr.push(4);
        threeArr.pop();
        threeArr = threeArr.join('');
        threeArr = (parseInt(threeArr,3)-1).toString(3).split('');
    }else if(threeArr[threeArr.length-1] === '1') {
        arr.push(1);
        threeArr.pop();
    }else if(threeArr[threeArr.length-1] === '2') {
        arr.push(2);
        threeArr.pop();
    }

    if(threeArr.length ==1 && threeArr[0] === '0'){
        break;
    }
}
    return Number(arr.reverse().join(''));
}

test('NumberWorld', () => {
    // expect(NumberWorld(1)).toBe(1)
    // expect(NumberWorld(2)).toBe(2)
    expect(NumberWorld(9)).toBe(24)
    // expect(NumberWorld(4)).toBe(11)
    // expect(NumberWorld(9)).toBe(24)
})
                                                 
