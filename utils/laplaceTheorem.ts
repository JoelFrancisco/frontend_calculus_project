import { Operations } from "../enums/operations";
import { rule_of_sarrus } from "./rule_of_sarrus";

function get_multiplied_main_diagonal(matrix: number[][]): number {
  return (
    matrix[0][0] * matrix[1][1] * matrix[2][2] +
    matrix[0][1] * matrix[1][2] * matrix[2][0] +
    matrix[1][0] * matrix[2][1] * matrix[0][2]
  );
}

function get_multiplied_secondary_diagonal(matrix: number[][]): number {
  return (
    matrix[0][2] * matrix[1][1] * matrix[2][0] +
    matrix[0][1] * matrix[1][0] * matrix[2][2] +
    matrix[1][2] * matrix[2][1] * matrix[0][0]
  );
}

function calculaMenorComplementar(matrix: number[][], i: number, j: number) {
  let newMatrix: number[][] = [];
  let row: number[] = [];

  matrix.forEach((x, index) => {
    if (index !== i - 1) {
      x.forEach((y, columnIndex) => {
        if (columnIndex !== j - 1) {
          row.push(y);
        }
      });

      newMatrix.push([...row]);
      row = [];
    }
  });

  let _steps = [];
  const first_line = `${newMatrix[0][0]} & ${newMatrix[0][1]} & ${newMatrix[0][2]}`;
  const second_line = `${newMatrix[1][0]} & ${newMatrix[1][1]} & ${newMatrix[1][2]}`;
  const third_line = `${newMatrix[2][0]} & ${newMatrix[2][1]} & ${newMatrix[2][2]}`;
  _steps.push(
    `\\begin{bmatrix} ${first_line}\\\\ ${second_line}\\\\ ${third_line} \\end{bmatrix}`
  );

  const { steps: sarrusSteps, det } = rule_of_sarrus(newMatrix);
  _steps.push(...sarrusSteps);

  return {
    steps: _steps,
    det,
  };
}

function calculaCofator(matrix: number[][], i: number, j: number) {
  const { steps, det } = calculaMenorComplementar(matrix, i, j);

  steps.push(`\\[C=-1^{i+j} \\cdot ${det} \\]`);
  steps.push(
    `\\[C=-1^${i}${j >= 0 ? "+" : "-"}${Math.abs(j)} \\cdot ${det} \\]`
  );
  steps.push(`\\[C=-1^${i + j} \\cdot ${det} \\]`);
  steps.push(`\\[C=${(i + j) % 2 === 0 ? "1" : "-1"} \\cdot ${det} \\]`);

  const cofator = (i + j) % 2 !== 0 ? -1 * det : det;
  steps.push(`\\[C=${cofator}\\]`);

  return {
    cofator,
    steps,
  };
}

export function laplaceTheorem(matrix: number[][]) {
  let steps = [];

  const first_line = `${matrix[0][0]} & ${matrix[0][1]} & ${matrix[0][2]} & ${matrix[0][3]}`;
  const second_line = `${matrix[1][0]} & ${matrix[1][1]} & ${matrix[1][2]} & ${matrix[1][3]}`;
  const third_line = `${matrix[2][0]} & ${matrix[2][1]} & ${matrix[2][2]} & ${matrix[2][3]}`;
  const fourth_line = `${matrix[3][0]} & ${matrix[3][1]} & ${matrix[3][2]} & ${matrix[3][3]}`;

  steps.push(
    `\\begin{bmatrix} ${first_line}\\\\ ${second_line}\\\\ ${third_line}\\\\ ${fourth_line} \\end{bmatrix}`
  );

  const { cofator: cofator1, steps: stepsCofator1 } = calculaCofator(
    matrix,
    1,
    1
  );
  steps.push(...stepsCofator1);

  const { cofator: cofator2, steps: stepsCofator2 } = calculaCofator(
    matrix,
    1,
    2
  );
  steps.push(...stepsCofator2);

  const { cofator: cofator3, steps: stepsCofator3 } = calculaCofator(
    matrix,
    1,
    3
  );
  steps.push(...stepsCofator3);

  const { cofator: cofator4, steps: stepsCofator4 } = calculaCofator(
    matrix,
    1,
    4
  );
  steps.push(...stepsCofator4);

  steps.push(
    `\\[\\det=${matrix[0][0]}\\cdot${cofator1}+${matrix[0][1]}\\cdot${cofator2}+${matrix[0][2]}\\cdot${cofator3}+${matrix[0][3]}\\cdot${cofator4}\\]`
  );

  steps.push(
    `\\[\\det=${matrix[0][0] * cofator1}+${matrix[0][1] * cofator2}+${
      matrix[0][2] * cofator3
    }+${matrix[0][3] * cofator4}\\]`
  );

  const finalDet =
    matrix[0][0] * cofator1 +
    matrix[0][1] * cofator2 +
    matrix[0][2] * cofator3 +
    matrix[0][3] * cofator4;

  steps.push(`\\[\\det=${finalDet}\\]`);

  return {
    type: Operations.LAPLACE_THEOREM,
    matrix,
    det: finalDet,
    steps,
  };
}
