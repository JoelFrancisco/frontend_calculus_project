import { Operations } from "../enums/operations";

export function quadraticFormula(a: number, b: number, c: number) {
  let steps = [];
  steps.push("\\[x=\\frac{-b\\pm\\sqrt[]{b^2-4ac}}{2a}\\]");
  steps.push(
    `\\[x=\\frac{-${b}\\pm\\sqrt[]{${b}^2-4\\cdot${a}\\cdot${c}}}{2\\cdot${a}}\\]`
  );

  const squaredB = b ** 2;
  const minusFourTimesAC = -4 * a * c;
  const twoTimesA = 2 * a;

  steps.push(
    `\\[x=\\frac{-${b}\\pm\\sqrt[]{${squaredB}${
      minusFourTimesAC < 0 ? "-" : "+"
    }${Math.abs(minusFourTimesAC)}}}{${twoTimesA}}\\]`
  );

  steps.push(
    `\\[x=\\frac{-${b}\\pm\\sqrt[]{${squaredB}${
      minusFourTimesAC < 0 ? "-" : "+"
    }${Math.abs(minusFourTimesAC)}}}{${twoTimesA}}\\]`
  );

  const delta = squaredB + minusFourTimesAC;

  steps.push(`\\[x=\\frac{-${b}\\pm\\sqrt[]{${delta}}}{${twoTimesA}}\\]`);

  const sqrtDelta = Math.sqrt(delta);

  steps.push(`\\[x=\\frac{-${b}\\pm${sqrtDelta}}{${twoTimesA}}\\]`);

  steps.push(`\\[x1=\\frac{-${b}+${sqrtDelta}}{${twoTimesA}}\\]`);
  const numeratorX1 = b * -1 + sqrtDelta;
  steps.push(`\\[x1=\\frac{${numeratorX1}}{${twoTimesA}}\\]`);
  const x1 = numeratorX1 / twoTimesA;
  steps.push(`\\[x1=${x1}\\]`);

  steps.push(`\\[x2=\\frac{-${b}-${sqrtDelta}}{${twoTimesA}}\\]`);
  const numeratorX2 = b * -1 - sqrtDelta;
  steps.push(`\\[x2=\\frac{${numeratorX2}}{${twoTimesA}}\\]`);
  const x2 = numeratorX2 / twoTimesA;
  steps.push(`\\[x2=${x2}\\]`);

  return {
    type: Operations.QUADRATIC_FORMULA,
    x1,
    x2,
    steps,
  };
}
