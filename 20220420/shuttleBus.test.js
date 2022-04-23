/*
이해
카카오에서는 무료 셔틀버스를 운행하기 떄문에 판교역에서 편하게
사무실로 올 수 있다. 카카오의 직원은 서로를 "크루"라고 부르는데,
아침마다 많은 크루들이 이 셔틀을 이용하여 출근한다.
이 문제에서는 편의를 위해 셔틀은 다음과 같은 규칙으로 운행한다고 가정하자.

- 셔틀은 09:00부터 총 n회 t분 간격으로 역에 도착하며, 하나의 셔틀에는 최대 m명의 승객이
탈 수 있다.
- 셔틀은 도착했을 때 도착한 순간에 대기열에 선 크루까지 포함해서 대기 순서대로 태우고 바로 출발한다.
예를들어 09:00에 도착한 셔틀은 자리가 있다면 09:00에 줄을 선 크루도 탈 수 있다.

일찍 나와서 셔틀을 기다리는 것이 귀찮았던 콘은, 일주일간의 집요한 관찰 끝에 어떤 크루가
몇시에 셔틀 대기열에 도착하는지 알아냈다. 콘이 셔틀을 타고 사무실로 갈 수 있는
도착시간 중 제일 늦은 시각을 구하여라.
단, 콘은 게으르기 때문에 같은 시각에 도착한 크루중
대기역에서 제일 뒤에 선다. 또한, 모든 크루는 잠을 자야하므로 23:59에 집에 돌아간다. 따라서 어떤 크루도
다음날 셔틀을 타는 일은 없다.

계획
먼저 timetable 분으로 바꾸고 우선순위 정렬한다. 그리고 for문을 n만큼 돌린다.
시간은 t만큼 증가하고 만약 n이 마지막이면 콘을 무조건 태워야한다.
회차마다 카운트가 m만큼 주어지고, 만약 셔틀 도착시간보다 일찍 도착한 
timetable을 순서대로 m만큼 빼야한다.
timetable에 있는 시간을 하나씩 뺄때마다 카운트 m을 -해주고 0이되면 continue
만약 n이 마지막 회차면 m이 1이상일때까지만 채우고 남아있는 timetable
중에 해당 시간에 탈수있는 값중에 가장 큰값 -1분을 리턴한다.
만약 남아있는 timetable중에 탈수있는 값이 없다면 마지막 셔틀시간을 리턴한다.
*/

const shuttleBus = (n, t, m, timetable) => {
  let time = 540;
  const timeArr = timetable.map((e) => {
    const arrSplit = e.split(":");
    return Number(arrSplit[0]) * 60 + Number(arrSplit[1]);
  });
  timeArr.sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    let isRide = false;
    let count = m;
    const minArr = [];

    if (i === n - 1) {
      for (let j = 0; j < timeArr.length; j++) {
        if (timeArr[j] <= time && count > 1 && timeArr[j] !== false) {
          timeArr[j] = false;
          count -= 1;
        }
      }
    }
    for (let j = 0; j < timeArr.length; j++) {
      if (count === 0) {
        break;
      }
      if (count === 1 && n - 1 === i) {
        continue;
      }
      if (timeArr[j] <= time && timeArr[j] !== false) {
        timeArr[j] = false;
        count -= 1;
      }
    }
    if (i === n - 1) {
      for (let c = 0; c < timeArr.length; c++) {
        if (timeArr[c] <= time && timeArr[c] !== false) {
          minArr.push(timeArr[c]);
          isRide = true;
        }
      }
      for (let j = 0; j < timeArr.length; j++) {
        if (count === 1 && isRide === true) {
          let time = Math.min(...minArr) - 1;
          let hour = Math.floor(time / 60);
          let minute = time % 60;
          if (String(hour).length === 1) {
            hour = "0" + hour;
          }
          if (String(minute).length === 1) {
            minute = "0" + minute;
          }
          return `${hour}:${minute}`;
        }
      }
    }
    if (i === n - 1) {
      let hour = Math.floor(time / 60);
      let minute = time % 60;
      if (String(hour).length === 1) {
        hour = "0" + hour;
      }
      if (String(minute).length === 1) {
        minute = "0" + minute;
      }
      return `${hour}:${minute}`;
    }
    time += t;
  }
};

test("shuttleBus", () => {
  expect(shuttleBus(1, 1, 2, ["10:10", "01:05", "03:00"])).toBe("02:59");
});
