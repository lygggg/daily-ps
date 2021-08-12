/*
이해
2차원 배열이 있다. i행 i열의 값은 i번 학생이 평가한 자신의 점수다.
i행 j열의 값은 i번 학생이 평가한 j번 학생의 과제점수다.
자신이 평가한 내 점수가 내점수들중에 가장 높거나 낮으면 
버리고 평균을 구한다. 평균을 구하고 학점에따라 나열한다.

구해야하는것
학생들의 평균에대한 학점을 문자열로 나열한다.

계획
학생 자신을 평가한 점수가 최고값인지,최저값인지 구한다
만약 최저값이거나 최고값이면 빼고 평균을 구한다.
평균을 구하고난후 학점에따라 나열한다.
배열의 첫번재꺼 하나씩

후기
풀긴 풀었지만 화나는 문제였다. 조건이 너무 많다. 그래도 풀어서 다행이다

*/
const mutualEvaluation = (scores) => {
    let result = [];
    let arr = [];
    for(let i=0; i<scores.length; i++) {
        for(let j =0; j<scores.length; j++){
            arr.push(scores[j][i]);
        }
        if(!(arr[i]>=Math.max(...arr)||arr[i]<=Math.min(...arr))){
            result.push(arr.reduce((p,c) => p+c ,0)/ arr.length)
            arr = [];
        }
        if(arr[i]>=Math.max(...arr)){
           if(arr.filter(e => arr[i] === e).length>1){
               result.push(arr.reduce((p,c) => p+c ,0)/ arr.length)
               arr = [];
               continue;
           };
           arr.splice(i,1);
               result.push(arr.reduce((p,c) => p+c ,0)/ arr.length)
               arr = [];
        }

        if(arr[i]<=Math.min(...arr)){
            if(arr.filter(e => arr[i] === e).length>1){
                result.push(arr.reduce((p,c) => p+c ,0)/ arr.length)
                arr = [];
                continue;
            };
            arr.splice(i,1);
               result.push(arr.reduce((p,c) => p+c ,0)/ arr.length)
               arr = [];
        }
        
    }
   const gradle = result.map(e=> {
        if(e >= 90){
            return "A"
        }
        if(e >= 80 && e < 90){
            return "B"
        }
        if(e >= 70 && e < 80){
            return "C"
        }
        if(e >= 50 && e < 70){
            return "D"
        }
        if(e < 50){
            return "F"
        }
    })
    return gradle.join('');
}

test('mutualEvaluation', () => {
    expect(mutualEvaluation([[100,90,98,88,65],[50,45,99,85,77],[47,88,95,80,67],[61,57,100,80,65],[24,90,94,75,65]])).toBe("FBABD");
    expect(mutualEvaluation([[50,90],[50,87]])).toBe("DA");
    expect(mutualEvaluation([[70,49,90],[68,50,38],[73,31,100]])).toBe("CFD");
})