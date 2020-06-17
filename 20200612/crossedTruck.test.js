/*
이해

bridge_length 는 다리길이
weight는 다리 최대 무게
truck_weights는 트럭의 무게

트럭이 다리를 지나가요.
다리는 무게 한도가 있다. 
그래서 다리 위에있는 트럭들의 총 무게는 다리의 무게 한도를 초과 할 수 없다.
다리위로 올라가는 트럭은 하나씩이다. 하나 올라갈때 마다 1초씩 지나간다. 
다리에 길이가 있는데 트럭의 속도는 1초 마다 1거리를 간다.

모든 트럭이 다리를 지나갔을때의 경과 시간을 반환.

구해야하는 것
모든 트럭이 다리를 건너는 시간

계획

1. 다리 배열을 만든다. 
2. 트럭의 무게를 다리배열에 하나를 넣고 time++
3. 다리 배열에 트럭 무게를 넣을때 다리 길이 도 넣는다.
    a. 시간이 지날때 마다 위에 있는 다리 길이를 -시간 해준다.
    b. 시간이 0 이면 빼준다.
4. 현재 다리에 있는 트럭의 전체합 + 곧 들어올 트럭의 무게 보다 다리의 무게가 크면 한칸 이동한다
아닐경우 트럭이 들어오고 한칸 이동한다.
5. 트럭 웨이트와 다리배열의 길이가 둘다 0이면 카운트 리턴

      /1,2 / 
 0초         7,4,5,6]
 1초      7  4,5,6] 
 2초    7     4,5,6]
 3초 7    4   5,6
 4초 7  4 5   6
 5초74  5     6
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 
회고:
기봉: 와 저번에 못 풀었던거 풀어서 너무 좋다. 엄청 오래 걸릴줄 알았는데 금방 풀어서 기분 좋았다. 짝 프로그래밍으로 해서 그런지 조금 더 쉽게 풀었던것 같다 
영규: 트럭이 어려운 문제인줄 알았다.. 그놈을 만나기 전까지..

*/

const crossedTruck = (bridge_length, weight, truck_weights) => {
  let bridgeArr = [];
  let time = 0;
  while (truck_weights[0] || bridgeArr[0]) {

    bridgeArr = bridgeArr.map((x) => {
      x[1] -= 1;
      return x;
    });
    bridgeArr = bridgeArr.filter((x) => x[1] !== 0);
    time += 1;
    let totalWeightOnBridge = bridgeArr.reduce((acc, cur) => acc + cur[0], 0);
    if (totalWeightOnBridge + truck_weights[0] <= weight) {
        bridgeArr.push([truck_weights.shift(), bridge_length]);
    }
  }
  return time;
};

test("crossedTruck", () => {
  expect(crossedTruck(2, 10, [7, 4, 5, 6])).toBe(8);
  expect(crossedTruck(100, 100, [10])).toBe(101);
  expect(crossedTruck(100, 100, [10,10,10,10,10,10,10,10,10,10])).toBe(110);
});
