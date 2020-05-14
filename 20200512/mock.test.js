/*
이해
수포자 삼인방은 모의고사에 수학 문제를
전부 찍으려고 한다.
수포자는 1번 문제부터 마지막 문제까지 다음과같이 찍는다

1번 문제부터 마지막 문제까지
정답이 순서대로 들은 배열 answers가 주어졌을때, 가장
많은 문젤르 맞힌 사람이 누구인지 배열에 담아 return하시오


구해야하는것
가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

계획
1. 1번 2번 3번 수포자가 찍는 방식을 배열에 저장한다.
2. answers의 길이 % 5 위치를 수포자들 배열이랑 비교해서
몇문제 맞추는지 저장하고
3. 맞힌 문제들의 맥스값을 구해서 맥스값과 같은 값을 가진 배열을리턴
*/

const mock = (answers) => {
    const student1 = [1,2,3,4,5]
    const student2 = [2,1,2,3,2,4,2,5]
    const student3 = [3,3,1,1,2,2,4,4,5,5]
    let answer = [0,0,0];
    answers.forEach((e,i)=>{
        if(e === student1[i%student1.length]){
            answer[0] += 1;
        }
        if(e === student2[i%student2.length]){
            answer[1] += 1;
        }
        if(e === student3[i%student3.length]){
            answer[2] += 1;
        }
    })

    let max = Math.max(...answer);
    return answer.map((e,i) => {
        if(e === max) {
            return i+1;
        }
        if(e !== max) {
            return '';
        }
    }).filter( e=> e !== '');
}

test('mock', () => {
    expect(mock([1,2,3,4,5])).toEqual([1]);
    expect(mock([1,3,2,4,2])).toEqual([1,2,3]);
})