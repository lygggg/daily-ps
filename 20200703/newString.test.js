/*
1번 수포자가 찍는 방식 [1,2,3,4,5]
2번 수포자가 찍는 방식 [2,1,2,3,2,4,2,5]
3번 수포자가 찍는 방식 [3,3,1,1,2,2,4,4,5,5]
답은 answers = [1,2,3,4,5]
1번 2번 3번 배열과 answers배열을 비교해서 데이터가 일치하면 count를 올리고
count가 가장 높은사람을 return한다

엣지케이스
- 1등이 다수면 그 다수를 리턴한다.

*/

const mockTest = (answers) => {
    let count1;

    const student1 = [1,2,3,4,5];
    const student2 = [2,1,2,3,2,4,2,5];
    const student3 = [3,3,1,1,2,2,4,4,5,5];
    for( let i=0; i>answers.length; i++){
        for(let f=0; i>student1.length; f++){
           if(answers[i] == student1[i]) {
               count1 +=1;
           }
        }
    }
    console.log(count1);
    
    return [1];
}

test('mockTest', () => {
    expect(mockTest([1,2,3,4,5])).toEqual([1]);
})