/*jshint esversion: 6 */
let knownInfections = [];
let infectionsMatrix = [];
let colCount = 0;
let rowCount = 0;

function findZombies(matrix) {
  colCount = matrix[0].length;
  rowCount = matrix.length;
  knownInfections = [];
  infectionsMatrix = [];
  let virus = matrix[0][0];
  let newInfections = [];
  let infection = {};
  let thisInfection = {};

  newInfections.push({
    row: 0,
    col: 0
  });

  while (newInfections.length > 0) {
    thisInfection = newInfections.shift();
    if (!thisInfectionKnown(thisInfection.row, thisInfection.col)) {
      if (thisInfection.row > 0 && matrix[thisInfection.row - 1][thisInfection.col] === virus) {
        if (!thisInfectionKnown(thisInfection.row - 1, thisInfection.col)) {
          newInfections.push({
            row: thisInfection.row - 1,
            col: thisInfection.col
          });
        }
      }
      if (thisInfection.row < rowCount - 1 && matrix[thisInfection.row + 1][thisInfection.col] === virus) {
        if (!thisInfectionKnown(thisInfection.row + 1, thisInfection.col)) {
          newInfections.push({
            row: thisInfection.row + 1,
            col: thisInfection.col
          });
        }
      }
      if (thisInfection.col > 0 && matrix[thisInfection.row][thisInfection.col - 1] === virus) {
        if (!thisInfectionKnown(thisInfection.row, thisInfection.col - 1)) {
          newInfections.push({
            row: thisInfection.row,
            col: thisInfection.col - 1
          });
        }
      }
      if (thisInfection.row < colCount - 1 && matrix[thisInfection.row][thisInfection.col + 1] === virus) {
        if (!thisInfectionKnown(thisInfection.row, thisInfection.col + 1)) {
          newInfections.push({
            row: thisInfection.row,
            col: thisInfection.col + 1
          });
        }
      }
      knownInfections.push(thisInfection);
    }
  }
  loadInfectionsMatrix();
  return infectionsMatrix;
}

thisInfectionKnown = (row, col) => {
  let infectionKnown = false;
  for (var i = 0; i < knownInfections.length && infectionKnown === false; i++) {
    infectionKnown = knownInfections[i].row === row && knownInfections[i].col === col ? true : false;
  }
  return infectionKnown;
};

loadInfectionsMatrix = () => {
  for (var i = 0; i < rowCount; i++) {
    let tempRow = [];
    for (var j = 0; j < colCount; j++) {
      tempRow.push(0);
    }
    infectionsMatrix.push(tempRow);
  }
  for (var k = 0; k < knownInfections.length; k++) {
    infectionsMatrix[knownInfections[k].row][knownInfections[k].col] = 1;
  }
};

var exampleMatrix = [
  [8, 2, 3],
  [8, 8, 3],
  [8, 8, 3]
];

var exampleResult = [
  [1, 0, 0],
  [1, 0, 0],
  [0, 0, 0]
];

console.log(findZombies(exampleMatrix));


 Test Zombie maps
var a = [
[1, 0, 0, 0, 0, 0, 0, 1],
[1, 1, 1, 0, 0, 0, 1, 1],
[1, 0, 1, 0, 0, 1, 0, 1],
[0, 1, 1, 1, 0, 1, 0, 1],
[0, 0, 0, 1, 1, 1, 0, 1],
[1, 0, 1, 0, 0, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 0, 1],
[1, 1, 0, 0, 0, 1, 0, 1]];
var b = [
[1, 1, 0, 0, 0, 0, 0, 0],
[0, 1, 0, 0, 0, 0, 0, 0],
[0, 1, 1, 1, 1, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0]];
Completed in 3ms
 should show zombies in 8x8 matrix. zombie is number 2
var Expected = [
[1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 0, 0, 0, 0, 0, 1],
[1, 1, 1, 1, 1, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 1],
[1, 1, 0, 0, 0, 0, 0, 1],
[1, 1, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 1],
[1, 1, 1, 1, 1, 1, 1, 1]];
var instead = [
[1, 1, 0, 0, 0, 0, 0, 0],
[0, 1, 0, 0, 0, 0, 0, 0],
[0, 1, 1, 1, 1, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0]];

var cExpected = [
[1, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0]];
var cinstead = [
[1, 1, 0, 0, 0, 0, 0, 0],
[0, 1, 0, 0, 0, 0, 0, 0],
[0, 1, 1, 1, 1, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0]];

var bExpected = [
[1, 0, 0],
[1, 1, 1],
[1, 0, 1],
[0, 0, 1]];
var binstead = [
[1, 1, 0, 0, 0, 0, 0, 0],
[0, 1, 0, 0, 0, 0, 0, 0],
[0, 1, 1, 1, 1, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0],
[0, 0, 0],
[0, 0, 0],
[0, 0, 0]];
