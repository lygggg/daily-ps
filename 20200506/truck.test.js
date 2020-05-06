/*
이해
모든 트럭이 다리를 건너려면 최소 몇초가 걸리는지 알아내야한다.
트럭은 1초에 1만큼 움직인다.
다리 길이는 bridge_length이고
다리는 무게는 weight까지 견딘다.

트럭은 다리의 무게까지 건널수있다.

계획

트럭무게가 담긴 배열의 길이가 0이될때까지, 이미 다리에 올라간
트럭의 무게가 다 없어질때까지 while문을 돌린다.
트럭은 다리 무게가 올라갈 트럭의 무게보다 낮으면 넣는다.
while문을 돌리면서 계속 count를 증가시킨다. 리턴한다.
 
*/
const truck = (blength, bweight, tweight) => {
  let bridge = new Array(blength).fill(0).map((e) => (e = 0));
  let count = 0;
  while (tweight.length >= 0 && bridge.every((e) => e !== 0) == false) {
    console.log(tweight.length,'길이');
    if (bridge.reduce((a, b) => a + b, 0) < bweight) {
      console.log(tweight[0]);
      // if(tweight[0]){
      let startWeight = tweight.shift();
      if(startWeight) {
        startWeight = 0;
      }
      bridge.unshift(startWeight);
      bridge.pop();
      console.log(bridge,'브릿지');
      // }
    //   console.log(bridge,'fsdfsd');
    //   console.log(bridge.length, bridge.every((e) => e == 0));
    }

    if (bridge.reduce((a, b) => a + b, 0) > bweight) {
      bridge.pop();
      bridge.unshift(0);
    }

    count++;
  }

  return count;
};

test("truck", () => {
  expect(truck(2, 10, [7])).toBe(3);
  expect(truck(3, 10, [7])).toBe(4);
  // expect(truck(2,10,[7,4,5,6])).toBe(8);
});

// while(tweight.length >= 0) {
//     if(bridge.reduce((a,b)=> a+b,0) < bweight){
//        const runTruck = tweight.shift();
//        console.log(runTruck);
//         bridge.unshift(runTruck);
//         bridge.pop();
//         console.log(bridge);
//     }
//     count++;
