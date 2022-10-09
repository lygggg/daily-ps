const crossTruck = (bridge_length, weight, truck_weights) => {
  let count = 0;
  const truckArr = truck_weights.slice().reverse();
  let resentTruck = []; // 다리에 있는 트럭
  const clearTruck = []; // 건너간 트럭
  let sum = 0;
  while (clearTruck.length !== truck_weights.length) {
    resentTruck = resentTruck.map((e) => {
      e[1] -= 1;
      return e;
    });
    resentTruck = resentTruck.filter((e) => {
      if (e[1] !== 0) {
        return e;
      } else {
        sum -= e[0];
        clearTruck.push(e);
      }
    });
    if (
      sum + truckArr[truckArr.length - 1] <= weight &&
      resentTruck.length <= bridge_length
    ) {
      const popTruck = truckArr.pop();
      sum += popTruck;
      resentTruck.push([popTruck, bridge_length]);
    }
    count += 1;
  }
  return count;
};

test("crossTruck", () => {
  expect(crossTruck(2, 10, [7, 4, 5, 6])).toBe(8);
});
