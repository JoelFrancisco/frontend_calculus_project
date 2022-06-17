import { Operations } from "../enums/operations";

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

export function rule_of_sarrus(matrix: number[][]) {
  let steps = [];

  const first_line = `${matrix[0][0]} & ${matrix[0][1]} & ${matrix[0][2]}`;
  const second_line = `${matrix[1][0]} & ${matrix[1][1]} & ${matrix[1][2]}`;
  const third_line = `${matrix[2][0]} & ${matrix[2][1]} & ${matrix[2][2]}`;

  steps.push(
    `\\begin{bmatrix} ${first_line}\\\\ ${second_line}\\\\ ${third_line} \\end{bmatrix}`
  );

  const main_diagonal = `${matrix[0][0]}\\cdot${matrix[1][1]}\\cdot${matrix[2][2]}+${matrix[0][1]}\\cdot${matrix[1][2]}\\cdot${matrix[2][0]}+${matrix[1][0]}\\cdot${matrix[2][1]}\\cdot${matrix[0][2]}`;
  const secondary_diagonal = `${matrix[0][2]}\\cdot${matrix[1][1]}\\cdot${matrix[2][0]}+${matrix[0][1]}\\cdot${matrix[1][0]}\\cdot${matrix[2][2]}+${matrix[1][2]}\\cdot${matrix[2][1]}\\cdot${matrix[0][0]}`;

  steps.push(`\\[\\det=${main_diagonal}-(${secondary_diagonal})\\]`);

  const multiplied_main_diagonal = get_multiplied_main_diagonal(matrix);
  const multiplied_secondary_diagonal =
    get_multiplied_secondary_diagonal(matrix);

  steps.push(
    `\\[\\det=${multiplied_main_diagonal}-(${multiplied_secondary_diagonal})\\]`
  );

  const det = multiplied_main_diagonal - multiplied_secondary_diagonal;

  steps.push(`\\[\\det=${det}\\]`);

  return {
    type: Operations.RULE_OF_SARRUS,
    matrix,
    det,
    steps,
  };
}
