function validateMatrixIsThreeByThree(matrix: number[][]) {
  const rowsLengths = matrix.map((row) => row.length);

  if (rowsLengths.length !== 3) {
    return false;
  }

  const isMatrixCorrectFormat = rowsLengths.every(
    (rowLength) => rowLength === 3
  );

  return isMatrixCorrectFormat;
}

export function validateMatrixIsFourByFour(matrix: number[][]) {
  const rowsLengths = matrix.map((row) => row.length);

  if (rowsLengths.length !== 4) {
    return false;
  }

  const isMatrixCorrectFormat = rowsLengths.every(
    (rowLength) => rowLength === 4
  );

  return isMatrixCorrectFormat;
}

export function validateMatrix(matrix: number[][]) {
  const isMatrixCorrectFormat = validateMatrixIsThreeByThree(matrix);
  if (!isMatrixCorrectFormat) return false;
  return true;
}
