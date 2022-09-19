const matrixRotation = (rows, columns, queries) => {
  const result = [];
  let count = 1;
  let matrix = Array.from(Array(rows), () =>
    new Array(columns).fill(0).map((e) => e + count++)
  );
  for (let i = 0; i < queries.length; i++) {
    turnMatrix(
      queries[i][1] - 1,
      queries[i][0] - 1,
      queries[i][3] - 1,
      queries[i][2] - 1,
      matrix
    );
  }
  return result;

  function turnMatrix(x, y, xx, yy, matrix) {
    const first = matrix[y][x];
    const minArr = [first];
    for (let down = y; down < yy; down++) {
      const next = matrix[down + 1][x];
      matrix[down][x] = next;
      minArr.push(next);
    }
    for (let right = x; right < xx; right++) {
      const next = matrix[yy][right + 1];
      matrix[yy][right] = next;
      minArr.push(next);
    }
    for (let up = yy; up > y; up--) {
      const next = matrix[up - 1][xx];
      matrix[up][xx] = next;
      minArr.push(next);
    }
    for (let left = xx; left > x; left--) {
      const next = matrix[y][left - 1];
      matrix[y][left] = next;
      minArr.push(next);
    }
    matrix[y][x + 1] = first;
    result.push(Math.min(...minArr));
  }
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
});
