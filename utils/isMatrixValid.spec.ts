import { validateMatrix } from "./isMatrixValid";

describe("isMatrixValid", () => {
  it("Should fail because matrix is undefined", () => {
    const matrix = [[], [], []];

    const isMatrixValid = validateMatrix(matrix);

    expect(isMatrixValid).toBe(false);
  });

  it("Should fail because one matrix element is undefined", () => {
    const matrix = [
      [1, 2],
      [4, 5, 6],
      [7, 8, 9],
    ];

    const isMatrixValid = validateMatrix(matrix);

    expect(isMatrixValid).toBe(false);
  });

  it("Should pass because matrix is not undefined", () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];

    const isMatrixValid = validateMatrix(matrix);

    expect(isMatrixValid).toBe(true);
  });
});
