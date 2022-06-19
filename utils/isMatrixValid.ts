function validateMatrixIsThreeByThree(matrix: number[][]) {
  const rowsLengths = matrix.map((row) => row.length);
  const isMatrixCorrectFormat = rowsLengths.every(
    (rowLength) => rowLength === 3
  );
  return isMatrixCorrectFormat;
}

export function validateMatrix(matrix: number[][]) {
  const isMatrixCorrectFormat = validateMatrixIsThreeByThree(matrix);
  if (!isMatrixCorrectFormat) return false;
  return true;
}
