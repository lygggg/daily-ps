/*
이해
컴퓨터 A와 B가 연겨되어 있고, 컴퓨터B와 C가 연결되어 있을때 A와 C도 연결되어있어 정보를 교환 할 수 있다.
따라서 A,B,C는 모두 같은 네트워크에 있다고 할 수 있습니다. 

구해야하는 것
네트워크의 수

계획
false데이터를 가진 n길이의 acess배열을 만든다.
0부터 n까지 for문으로 순회하면서 만약 acess[i]가 false면 DFS함수를 호출한다.
호출했으면 acess[i]를 true로 바꾸고, 또 for문으로 0부터 n까지 호출하면서 acess[i]가 false고 computers[index][i] 자리가 1이면 
DFS함수를 호출한다.
*/
const network1 = (n, computers) => {
  let count = 0;
  const acess = Array(n).fill(false);
  const DFS = (index) => {
    acess[index] = true;
    for (let i = 0; i < n; i++) {
      if (acess[i] === false && computers[index][i] === 1) {
        DFS(i);
      }
    }
  };

  for (let i = 0; i < n; i++) {
    if (acess[i] === false) {
      count++;
      DFS(i);
    }
  }
  return count;
};
test("network1", () => {
  expect(
    network1(3, [
      [1, 1, 0],
      [1, 1, 0],
      [0, 0, 1],
    ])
  ).toBe(2);
});
