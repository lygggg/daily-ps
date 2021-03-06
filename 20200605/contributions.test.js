/*
이해
각 기능은 진도가 100%일 때 서비스에 반영할 수 있다.
기능의 개발속도는 모두 다르기 때문에 뒤에 있는 기능이 앞에있는 기능보다 먼저 개발될 수 있다.
이때 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 같이 배포된다.
먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열 progresses와 각 작업의 개발 속도가
적힌 정수 배열 speeds가 주어질 때 각 배포마다 몇 개의 기능이 배포되는지를 리턴해라.

구해야하는 것
각 배포마다 몇개의 기능이 배포되는지를 리턴하라.

계획
while문으로 progresses의 배열의 길이가 0일때까지 돌고
for문으로 progresses 의 맞는 위치에 있는 speeds의 값을 더해주고 만약
progresses의 첫번째 배열 값이 100을 넘을경우 count++
후 progress, speeds를 shift(); 를 반복한다.
만약 progress의 첫번째 값이 100을 넘지않는경우 break로 빠져나온다. 
*/

const contributions = (progresses, speeds) => {
  const arr = [];
  while (progresses.length !== 0) {
    let count = 0;g
    
    while(progresses[0]>=100) {
        count++;
        progresses.shift();
        speeds.shift();
    }

    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
    }

    if (count >= 1) {
      arr.push(count);
      console.log(arr, count);
    }
  }
  console.log(arr);
  return arr;
};

test("contributions", () => {
//   expect(contributions([93, 30, 55], [1, 30, 5])).toEqual([2, 1]);
  expect(contributions([40, 93, 30, 55, 60, 65], [60, 1, 30, 5 , 10, 7])).toEqual([1,2,3]);
});
