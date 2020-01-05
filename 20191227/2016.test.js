/*
문제설명
2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT

입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 TUE를 반환하세요.

제한 조건
2016년은 윤년입니다.
2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)

계획
new Date 함수로 원하는 날짜를 구한다.
string으로 변환한다. 대문자로 변경한다.
*/
// const get2016 = (a,b) =>{
//     // const date = new Date(2016, (a-1), b);
//     // console.log(date);
//     // return date.toString().slice(0,3).toUpperCase();
//     // // slice(0,3).toUpperCase();

// }

// test('get2016', () => {
//     expect(get2016(5,24)).toBe('TUE')
// })
/*
점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다. 다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다. 학생들의 번호는 체격 순으로 매겨져 있어, 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다. 예를 들어, 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다. 체육복이 없으면 수업을 들을 수 없기 때문에 체육복을 적절히 빌려 최대한 많은 학생이 체육수업을 들어야 합니다.

전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때, 체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.

- 여벌의 옷을 가지고있는 사람은 숫자가 1차이나는사람에게 빌려줄수있다.
- n의 수 만큼 1부터 배열을 만든다.
- lost를 제외한다.
n = 5
lost = [2,4]
reserve = [1,3,5]
return
*/
const problem = (n,lost,reserve) => {
    const answer = 0;
    const haveNum = n-lost.length;

    for(let i = 0; i< lost.length; i++) { // 0 1  2번
        console.log(i);
        if(reserve.indexOf(lost[i]) !== -1) { // 
            console.log(lost[i]);
            reserve.splice(reserve.indexOf(lost[i]),1);
            lost.splice(i,1);
            haveNum++;
        }
    }

    
}

test('problem', () => {
    expect(problem(5,[2,4],[1,3,5])).toBe(5)
})
