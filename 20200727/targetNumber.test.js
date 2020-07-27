/*
n개의 음이 아닌 정수가 있다. 이 수를 적절히 더하거나 빼서 타겟 넘버를 만들려고 합니다.
1,1,1,1,1 를 숫자 3으로 만들려면 다섯가지 방법을 쓸 수 있다.

사용할 수 있는 숫자가 담긴 배열 numbers, 타겟넘버 target이 매개변수로 주어질 때 숫자를 적절히 더하고 빼서
타겟 넘버를 만드는 방법의 수를 리턴하는 함수를 작성하라.

구해야 하는 것
더하고 빼서 타겟 넘버를 만드는 방법의 수를 리턴해라.

계획
배열 첫번째부터 순환하면서 더하거나 빼는 작업을 재귀로 작성해서 만약 numbers의 값들을 다 계산한 후에
값이 3이면 카운트를 추가해서 리턴한다.

재귀
가장 먼저 끝낼 조건을 찾는다. 끝낼 조건은 number의 복사된 배열이 길이가 0일때 카운트 값이
target과 같을경우 
*/

const targetNumber = (numbers, target) => {
    let arr = [];
    computation(numbers, target,arr,0);
    return arr.length;
}

const computation = (numbers, target, arr, sum) => {
    if(numbers.length == 0){
        if(sum === target) {
            arr.push(sum);
            return;
        }
        return;
    }
        const numbers1 = numbers.slice();
        const firstNumber = numbers1.shift();
        computation(numbers1, target,arr,sum+firstNumber);
        computation(numbers1, target,arr,sum-firstNumber);

}

test('targetNumber', () => {
    expect(targetNumber([1,1,1,1,1], 3)).toBe(5);
})