const timeToMin = (time) => {
  let words = time.split(":");
  return Number(words[0]) * 60 + Number(words[1]);
};

const parkingFeeCalculation = (fees, records) => {
  // 배열로 수정 및 차량 번호로 정렬
  records = records.map((v) => v.split(" ")).sort((a, b) => a[1] - b[1]);
  // 유일한 차량번호 배열 생성
  const uniqueCars = [...new Set(records.map((v) => v[1]))];

  // 차량번호별 입출차 배열 생성 (입출차 수가 홀수면 뒤에 23:59 push)
  const result = uniqueCars.map((v) => {
    const arr = [];
    for (let i = 0; i < records.length; i++) {
      if (v === records[i][1]) {
        arr.push(records[i]);
      }
    }
    if (arr.length % 2 === 1) {
      return [...arr, ["23:59", v, "OUT"]];
    } else {
      return arr;
    }
  });
  console.log(result);

  // [총 시간(minute)] answer배열 초기화
  const answer = result.map((v) => {
    let minute = 0;
    for (let i = 0; i < v.length; i += 2) {
      const time = timeToMin(v[i + 1][0]) - timeToMin(v[i][0]);
      minute += time;
    }

    return minute;
  });
  console.log(answer);
  // 차량 번호별 정렬 후 금액 계산 후 return

  return answer.map((v) => {
    if (v > fees[0]) {
      return fees[1] + Math.ceil((v - fees[0]) / fees[2]) * fees[3];
    } else {
      return fees[1];
    }
  });
};

test("parkingFeeCalculation", () => {
  expect(
    parkingFeeCalculation(
      [180, 5000, 10, 600],
      [
        "05:34 5961 IN",
        "06:00 0000 IN",
        "06:34 0000 OUT",
        "07:59 5961 OUT",
        "07:59 0148 IN",
        "18:59 0000 IN",
        "19:09 0148 OUT",
        "22:59 5961 IN",
        "23:00 5961 OUT",
      ]
    )
  ).toEqual([14600, 34400, 5000]);
});
