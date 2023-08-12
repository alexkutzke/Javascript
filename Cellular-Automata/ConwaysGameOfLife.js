/*
Conway's Game of Life
The Game of Life is a cellular automaton devised by the British mathematician John Horton Conway in 1970. The universe of the Game of Life is an infinite, two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, live or dead, (or populated and unpopulated, respectively). Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:
  1. Any live cell with two or three live neighbours survives.
  2. Any dead cell with three live neighbours becomes a live cell.
  3. All other live cells die in the next generation. Similarly, all other dead cells stay dead.
(description adapted from https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life )
(example adapted from https://github.com/TheAlgorithms/Python/blob/master/cellular_automata/conways_game_of_life.py )
*/

/**
 * Generates the next generation for a given state of Conway's Game of Life.
 */
export function newGeneration(cells) {
  const numRows = cells.length;
  const numCols = cells[0].length;
  
  const getNextCellValue = (row, col) => {
    const isInsideGrid = (r, c) => r >= 0 && r < numRows && c >= 0 && c < numCols;
    const getNeighborValue = (r, c) => isInsideGrid(r, c) ? cells[r][c] : 0;

    const neighbors = [
      getNeighborValue(row - 1, col - 1), getNeighborValue(row - 1, col), getNeighborValue(row - 1, col + 1),
      getNeighborValue(row, col - 1),                                      getNeighborValue(row, col + 1),
      getNeighborValue(row + 1, col - 1), getNeighborValue(row + 1, col), getNeighborValue(row + 1, col + 1),
    ];
    
    const aliveNeighbors = neighbors.reduce((acc, neighbor) => acc + neighbor, 0);
    const isAlive = cells[row][col] === 1;

    if ((isAlive && aliveNeighbors >= 2 && aliveNeighbors <= 3) || (!isAlive && aliveNeighbors === 3)) {
      return 1;
    } else {
      return 0;
    }
  };

  const nextGeneration = [];
  for (let i = 0; i < numRows; i++) {
    const nextGenerationRow = [];
    for (let j = 0; j < numCols; j++) {
      nextGenerationRow.push(getNextCellValue(i, j));
    }
    nextGeneration.push(nextGenerationRow);
  }
  
  return nextGeneration;
}
