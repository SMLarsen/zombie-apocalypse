/*jshint esversion: 6 */
let knownInfections = [];
let infectionsMatrix = [];
let colCount = 0;
let rowCount = 0;

function findZombies(matrix) {
  colCount = matrix[0].length;
  rowCount = matrix.length;
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
    if (!thisInfectionKnown(thisInfection)) {
      if (thisInfection.row > 0 && matrix[thisInfection.row - 1][thisInfection.col] === virus) {
        if (!thisInfectionKnown({
            row: thisInfection.row - 1,
            col: thisInfection.col
          })) {
          newInfections.push({
            row: thisInfection.row - 1,
            col: thisInfection.col
          });
        }
      }
      if (thisInfection.row < rowCount - 1 && matrix[thisInfection.row + 1][thisInfection.col] === virus) {
        if (!thisInfectionKnown({
            row: thisInfection.row + 1,
            col: thisInfection.col
          })) {
          newInfections.push({
            row: thisInfection.row + 1,
            col: thisInfection.col
          });
        }
      }
      if (thisInfection.col > 0 && matrix[thisInfection.row][thisInfection.col - 1] === virus) {
        if (!thisInfectionKnown({
            row: thisInfection.row,
            col: thisInfection.col - 1
          })) {
          newInfections.push({
            row: thisInfection.row,
            col: thisInfection.col - 1
          });
        }
      }
      if (thisInfection.row < colCount - 1 && matrix[thisInfection.row][thisInfection.col + 1] === virus) {
        if (!thisInfectionKnown({
            row: thisInfection.row,
            col: thisInfection.col + 1
          })) {
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

thisInfectionKnown = (potentialInfection) => {
  let infectionKnown = false;
  for (var i = 0; i < knownInfections.length; i++) {
    infectionKnown = knownInfections[i].row === potentialInfection.row && knownInfections[i].col === potentialInfection.col ? true : false;
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
  [1, 8, 8]
];

var exampleResult = [
  [1, 0, 0],
  [1, 0, 0],
  [0, 0, 0]
];

console.log(findZombies(exampleMatrix));
