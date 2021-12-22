/*
이해
기능 개발을 하려는데 각 기능의 개발속도는 모두 다르다
뒤에 있는 기능이 앞에 있느 기능보다 먼저 개발 될 수있고,
이때 뒤에 있는 기능은 앞에 있는 기능이 배포될 때
함께 배포된다. 먼저 배포되어야 하는 순서대로 작업의
진도가 적인 정수 배열 progresses와 각 작업의 개발 속도가
적힌 정수 배열 speeds가 주어질때 각 배포 될때마다 몇개의 기능이
배포 되는지를 return하도록 함수를 작성해라

구해야하는 것
progresses에 담겨있는 배열이 sepeeds에 있는 개발속도에
따라 개발이 끝나는 날이 같은 프로그램의 개수를
배열에 넣어라. 만약 progresses에서 자기보다 앞에있는
원소가 끝나지 않으면 그 원소도 끝낼수없다.

계획
progresses배열에서 speeds배열에 원소를 
하나씩 더하면서 첫번째 원소가 100이 넘으면 
그 뒤 100이 넘는 원소들의 갯수까지 더해서 배열에 넣는다.
*/

const functionDevelop = (progresses, speeds) => {
  const result = [];
  while (progresses.length > 0) {
    let count = 0;
    while (progresses[0] >= 100) {
      count++;
      progresses.shift();
      speeds.shift();
    }
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
    }
    if (count > 0) {
      result.push(count);
    }
  }
  return result;
};

test("functionDevelop", () => {
  expect(functionDevelop([93, 30, 55], [1, 30, 5])).toEqual([2, 1]);
});
