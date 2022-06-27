"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.laplaceTheorem = void 0;
var operations_1 = require("../enums/operations");
var rule_of_sarrus_1 = require("./rule_of_sarrus");
function get_multiplied_main_diagonal(matrix) {
    return (matrix[0][0] * matrix[1][1] * matrix[2][2] +
        matrix[0][1] * matrix[1][2] * matrix[2][0] +
        matrix[1][0] * matrix[2][1] * matrix[0][2]);
}
function get_multiplied_secondary_diagonal(matrix) {
    return (matrix[0][2] * matrix[1][1] * matrix[2][0] +
        matrix[0][1] * matrix[1][0] * matrix[2][2] +
        matrix[1][2] * matrix[2][1] * matrix[0][0]);
}
function calculaMenorComplementar(matrix, i, j) {
    var newMatrix = [];
    var row = [];
    matrix.forEach(function (x, index) {
        if (index !== i) {
            x.forEach(function (y, columnIndex) {
                if (columnIndex !== j) {
                    row.push(y);
                }
            });
            newMatrix.push(__spreadArrays(row));
            row = [];
        }
    });
    var _steps = [];
    var first_line = newMatrix[0][0] + " & " + newMatrix[0][1] + " & " + newMatrix[0][2];
    var second_line = newMatrix[1][0] + " & " + newMatrix[1][1] + " & " + newMatrix[1][2];
    var third_line = newMatrix[2][0] + " & " + newMatrix[2][1] + " & " + newMatrix[2][2];
    _steps.push("\\begin{bmatrix} " + first_line + "\\\\ " + second_line + "\\\\ " + third_line + " \\end{bmatrix}");
    var _a = rule_of_sarrus_1.rule_of_sarrus(newMatrix), sarrusSteps = _a.steps, det = _a.det;
    _steps.push.apply(_steps, sarrusSteps);
    return {
        steps: _steps,
        det: det
    };
}
function calculaCofator(matrix, i, j) {
    var _a = calculaMenorComplementar(matrix, i, j), steps = _a.steps, det = _a.det;
    steps.push("\\[C=-1^(i+j) \\cdot \\det \\]");
    var cofator = (i + j) % 2 !== 0 ? -1 * det : det;
}
function laplaceTheorem(matrix) {
    var steps = [];
    var first_line = matrix[0][0] + " & " + matrix[0][1] + " & " + matrix[0][2] + " & " + matrix[0][3];
    var second_line = matrix[1][0] + " & " + matrix[1][1] + " & " + matrix[1][2] + " & " + matrix[1][3];
    var third_line = matrix[2][0] + " & " + matrix[2][1] + " & " + matrix[2][2] + " & " + matrix[2][3];
    var fourth_line = matrix[3][0] + " & " + matrix[3][1] + " & " + matrix[3][2] + " & " + matrix[3][3];
    steps.push("\\begin{bmatrix} " + first_line + "\\\\ " + second_line + "\\\\ " + third_line + "\\\\ " + fourth_line + " \\end{bmatrix}");
    steps.push();
    var main_diagonal = matrix[0][0] + "\\cdot" + matrix[1][1] + "\\cdot" + matrix[2][2] + "+" + matrix[0][1] + "\\cdot" + matrix[1][2] + "\\cdot" + matrix[2][0] + "+" + matrix[1][0] + "\\cdot" + matrix[2][1] + "\\cdot" + matrix[0][2];
    var secondary_diagonal = matrix[0][2] + "\\cdot" + matrix[1][1] + "\\cdot" + matrix[2][0] + "+" + matrix[0][1] + "\\cdot" + matrix[1][0] + "\\cdot" + matrix[2][2] + "+" + matrix[1][2] + "\\cdot" + matrix[2][1] + "\\cdot" + matrix[0][0];
    steps.push("\\[\\det=" + main_diagonal + "-(" + secondary_diagonal + ")\\]");
    var multiplied_main_diagonal = get_multiplied_main_diagonal(matrix);
    var multiplied_secondary_diagonal = get_multiplied_secondary_diagonal(matrix);
    steps.push("\\[\\det=" + multiplied_main_diagonal + "-(" + multiplied_secondary_diagonal + ")\\]");
    var det = multiplied_main_diagonal - multiplied_secondary_diagonal;
    steps.push("\\[\\det=" + det + "\\]");
    return {
        type: operations_1.Operations.RULE_OF_SARRUS,
        matrix: matrix,
        det: det,
        steps: steps
    };
}
exports.laplaceTheorem = laplaceTheorem;
