/*
이해
rows x columns 크기의 행렬이 있습니다. 행렬에는 1부터 rows x columns까지의 숫자가 한 줄씩 순서대로
적혀있습니다. 이 행렬에서 직사각형 모양의 범위를 여러 번 선택해, 테두리 부분에 있는 숫자들을
시계방향으로 회전시키려 합니다. 각 회전은 (x1,y1,x2,y2)인 정수 4개로 표현하며, 그 의미는 다음과 같습니다.

x1 행 y1 열부터 2x 행 y2 열까지의 영역에 해당하는 직사각형에서 테두리에 있는 숫자들을 한 칸씩 시계방향으로 회전합니다.

(2,2,5,4) 회전을 적용하면, 아래 그림과 같이 2행 2열부터 5행 4열까지 영역의 테두리가 시계방향으로 회전합니다. 이때, 중앙의 15와 21이 있는 영역은 회전하지 않는 것을 주의하세요.

행렬의 세로 길이(행 개수) rows, 가로 길이(열 개수) columns, 그리고 회전들의 목록 querires가 주어질 때, 각 회전들을 배열에 적용한 뒤, 그 회전에 의해
위치가 바뀐 숫자들 중 가장 작은 숫자들을 순서대로 배열에 담아 리턴하세요.

제한사항
- rows는 2 이상 100 이하인 자연수입니다.
- columns는 2 이상 100 이하인 자연수입니다.
- 처음에 행렬에는 가로 방향으로 숫자가 1부터 하나씩 증가하면서 적혀있습니다.
- 즉, 아무 회전도 하지 않았을 때, i 행 j 열에 있는 숫자는 ((i-1) x columns + j)입니다.
- queries의 행의 개수(회전의 개수)는 1 이상 10,000 이하입니다.
- queries의 각 행은 4개의 정수 [x1, y1, x2, y2]입니다.
- x1 행 y1 열부터 x2 행 y2 열까지 영역의 테두리를 시계방향으로 회전한다는 뜻입니다.
- 1 ≤ x1 < x2 ≤ rows, 1 ≤ y1 < y2 ≤ columns입니다.
- 모든 회전은 순서대로 이루어집니다.
- 예를 들어, 두 번째 회전에 대한 답은 첫 번째 회전을 실행한 다음, 그 상태에서 두 번째 회전을 실행했을 때 이동한 숫자 중 최솟값을 구하면 됩니다.

계획
1부터 증가하는 rows, columns만큼의 이중배열을 만들고, 배열의 맨 처음값을 저장한 상태에서 회전한 값을 적용해주면서 회전 한값들을
minArr에 넣고 한바퀴를 다돌면 가장 작은 값을 구해서 result 배열에 넣고 반복한다. 회전을 모두 수행하면 결과를 리턴한다.
*/

const matrixRotation = (rows, columns, queries) => {
  const matrix = [];
  let result = [];
  let count = 1;
  for (let i = 1; i <= rows; i++) {
    matrix.push(
      Array(columns)
        .fill(count)
        .map((x, y) => {
          count += 1;
          return x + y;
        })
    );
  }

  for (let i = 0; i < queries.length; i++) {
    let firstNumber = matrix[queries[i][0] - 1][queries[i][1] - 1];
    const [x, y, xx, yy] = queries[i];
    const minArr = [];
    for (let left = x - 1; left < xx - 1; left++) {
      // 왼쪽
      minArr.push(matrix[left + 1][y - 1]);
      matrix[left][y - 1] = matrix[left + 1][y - 1];
    }

    for (let down = y - 1; down < yy - 1; down++) {
      // 아래
      minArr.push(matrix[xx - 1][down + 1]);
      matrix[xx - 1][down] = matrix[xx - 1][down + 1];
    }

    for (let right = xx - 1; right > x - 1; right--) {
      // 오른쪽

      minArr.push(matrix[right - 1][yy - 1]);
      matrix[right][yy - 1] = matrix[right - 1][yy - 1];
    }

    for (let top = yy - 1; top > y - 1; top--) {
      // 위

      minArr.push(matrix[x - 1][top - 1]);
      matrix[x - 1][top] = matrix[x - 1][top - 1];
    }

    minArr.push(firstNumber);
    matrix[x - 1][y] = firstNumber;
    result.push(Math.min(...minArr));
  }
  return result;
};

test("matrixRotation", () => {
  expect(
    matrixRotation(3, 5, [
      [1, 1, 2, 2],
      [2, 3, 3, 4],
      [1, 2, 3, 4],
      [1, 1, 3, 4],
      [2, 2, 3, 5],
    ])
  ).toEqual([1, 8, 1, 1, 3]);
  expect(
    matrixRotation(3, 3, [
      [1, 1, 2, 2],
      [1, 2, 2, 3],
      [2, 1, 3, 2],
      [2, 2, 3, 3],
    ])
  ).toEqual([1, 1, 5, 3]);
  expect(matrixRotation(100, 97, [[1, 1, 100, 97]])).toEqual([1]);
});
