/*
문제 설명
 계획
 - 문자열을 1밀면 맨뒤에 있는 수의 아스키코드 +1 한값이 1개 쌓인다.
 문자열을 배열로 만든다.
 문자열 맨뒤의 값을 구한다.
 맨뒤의 값의 아스키 코드를 구한후 +1해준값을 푸쉬해준다.
*/

/* 2번 풀이
function solution(s, n) {
    const re= s.replace(/(\s*)/g, "");
    const array = s.split("");
    let final = [];
    let a = [];
    const real = [];g
    array.map(e => {
        final.push(e.charCodeAt());
    });
   a = final.map(e=> {
      if(e !== 32 ){
          for(let i =0; i< n; i++){
              if(e==122 || e==123){
                  e-=26;
              }
              else if(e==91 || e==90){
                  e-=26;
              }
              e=e+1;
          }
          return e;
      }
       if(e == 32){
           return e;
       }
    })
   
    for(let i= 0; i<array.length; i++) {
       real.push(String.fromCharCode(a[i]));
    }
    return real.join("")
}
*/

/* 1번풀이
const sumDivisor = (s, n) => {
  const code;
   const answer =s.split('').map(a => {
        code = a.charCodeAt(0);
        if(code === 32){
            return ' ';
        }
        else if(code >= 65 && code <= 90) {
            if(code+n > 90) 
                return String.fromCodePoint(code+n-26);
            
            else 
                return String.fromCodePoint(code+n);
            }
            else if(code >= 97 && code <= 122) {
                if(code+n > 122)
                    return String.fromCharCode(code+n-26);
                else
                    return String.fromCharCode(code+n);
            } 
    }).join('');
    return answer;
}
*/