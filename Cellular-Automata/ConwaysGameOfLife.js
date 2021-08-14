/*
Conway's Game of Life
The Game of Life is a cellular automaton devised by the British mathematician John Horton Conway in 1970. The universe of the Game of Life is an infinite, two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, live or dead, (or populated and unpopulated, respectively). Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:
  1. Any live cell with two or three live neighbours survives.
  2. Any dead cell with three live neighbours becomes a live cell.
  3. All other live cells die in the next generation. Similarly, all other dead cells stay dead.
(description adapted from https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life )
(example adapted from https://github.com/TheAlgorithms/Python/blob/master/cellular_automata/conways_game_of_life.py )
*/

/*
 *  Doctests
 *
 *  > newGeneration([[0, 1, 0], [0, 1, 0], [0, 1, 0]])
 *  [ [ 0, 0, 0 ], [ 1, 1, 1 ], [ 0, 0, 0 ] ]
 */

/*
 *  Generates the next generation for a given state of Conway's Game of Life.
 */
function nextGenerationCells(cells) {
  const nextGeneration = []
  for (let i = 0; i < cells.length; i++) {
    const nextGenerationRow = [];
    for (let j = 0; j < cells[i].length; j++) {

      neighbourCount = getNumberOfLivingNeighbours(cells, i, j);

      const alive = cells[i][j] === 1;
      deadOrAlive = decideCellIsAliveOrDead(alive, neighbourCount);
      nextGenerationRow.push(deadOrAlive)
    }
    nextGeneration.push(nextGenerationRow)
  }
  return nextGeneration
}

function getNumberOfLivingNeighbours(cells, i, j) {
  let neighbourCount = 0
  if (i > 0) {
    neighbourCount += livingNeighboursOnPreviousRow(cells, i - 1, j)
  }
  neighbourCount += livingNeighboursOnSameRow(cells, i, j)

  if (i < cells.length - 1) {
    neighbourCount += livingNeighboursOnNextRow(cells, i + 1, j)
  }
  return neighbourCount
}

function livingNeighboursOnSameRow(cells, sameRow, currentColumn) {
  let neighbourCount = 0
  if (currentColumn > 0) neighbourCount += cells[sameRow][currentColumn - 1]
  if (currentColumn < cells[sameRow].length - 1) neighbourCount += cells[sameRow][currentColumn + 1]
  return neighbourCount;
}

function livingNeighboursOnPreviousRow(cells, previousRow, currentColumn) {
  let neighbourCount = 0
  neighbourCount += cells[previousRow][currentColumn]
  if (currentColumn > 0) neighbourCount += cells[previousRow][currentColumn - 1]
  if (currentColumn < cells[previousRow].length - 1) neighbourCount += cells[previousRow][currentColumn + 1]
  return neighbourCount;
}

function livingNeighboursOnNextRow(cells, nextRow, currentColumn) {
  let neighbourCount = 0
  neighbourCount += cells[nextRow][currentColumn]
  if (currentColumn > 0) neighbourCount += cells[nextRow][currentColumn - 1]
  if (currentColumn < cells[nextRow].length - 1) neighbourCount += cells[nextRow][currentColumn + 1]
  return neighbourCount;
}

function decideCellIsAliveOrDead(alive, neighbourCount) {
  if ((alive && neighbourCount >= 2 && neighbourCount <= 3) || (!alive && neighbourCount === 3)) {
    return 1
  }
  return 0
}

/*
 *  utility function to display a series of generations in the console
 */
async function animate(cells, steps) {
  /*
   * utility function to print one frame
   */
  function printCells(cells) {
    for (let i = 0; i < cells.length; i++) {
      let line = ''
      for (let j = 0; j < cells[i].length; j++) {
        if (cells[i][j] === 1) line += '\u2022'
        else line += ' '
      }
      console.log(line)
    }
  }

  printCells(cells)

  for (let i = 0; i < steps; i++) {
    await new Promise(resolve => setTimeout(resolve, 250)) // sleep
    cells = nextGenerationCells(cells)
    printCells(cells)
  }
}

// Define glider example
const glider = [
  [0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
]

animate(glider, 16)