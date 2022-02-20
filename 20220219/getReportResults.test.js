/*
이해 
신입사원 무지는 게시판 불량 이용자를 신고하고 처리 결과를
메일로 발송하는 시스템을 개발하려 합니다. 무지가 개발하려는
시스템은 다음과 같습니다.

- 각 유저는 한 번에 한 명의 유저를 신고할 수 있습니다.
- 신고 횟수에 제한은 없습니다. 서로 다른 유저를 계속해서 신고할 수 있습니다.
- 한 유저를 여러번 신고할 수도 있지만, 동일한 유저에 대한 신고 횟수는 1회로 처리됩니다.
- k번 이상 신고된 유저는 게시판 이용이 정지되며, 해당 유저를 신고한 모든 유저에게 정지 사실을 메일로 발송합니다.
- 유저가 신고한 모든 내용을 취합하여 마지막에 한꺼번에 게시판 이용 정지를 시키면서 정지 메일을 발송합니다.
*/

const getReportResults = (id_list, report, k) => {
  const result = Array(id_list.length).fill(0);
  const count = Array(id_list.length).fill(0);
  const idArr = Array.from(Array(id_list.length), () => new Array(0));
  const splitArr = report.map((e) => e.split(" "));
  splitArr.forEach((e, i) => {
    id_list.forEach((id, index) => {
      if (e[1] === id) {
        idArr[id_list.indexOf(e[0])].push(id);
      }
    });
  });

  const duplicateArr = idArr.map((e) =>
    e.filter((element, index) => {
      return e.indexOf(element) === index;
    })
  );
  duplicateArr.forEach((e, i) => {
    e.forEach((id, index) => {
      const check = id_list.indexOf(e[index]);
      if (check !== -1) {
        count[check] += 1;
      }
    });
  });

  const kArr = id_list.filter((e, i) => {
    if (count[i] >= k) {
      return e;
    }
  });

  duplicateArr.forEach((e, i) => {
    e.forEach((id, index) => {
      const check = kArr.indexOf(e[index]);
      if (check !== -1) {
        result[i] += 1;
      }
    });
  });
  return result;
};
test("getReportResults", () => {
  expect(
    getReportResults(
      ["muzi", "frodo", "apeach", "neo"],
      ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
      2
    )
  ).toEqual([2, 1, 1, 0]);
});
