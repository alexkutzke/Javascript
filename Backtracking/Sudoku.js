class Sudoku {
  // Sudoku Class to hold the board and related functions
  constructor (board) {
    this.board = board
  }

  findEmptyCell () {
    // Find a empty cell in the board (returns [-1, -1] if all cells are filled)
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (this.board[i][j] === 0) return [i, j]
      }
    }
    return [-1, -1]
  }

  checkBoard ([y, x], value) {
    // checks if the value to be added in the board is an acceptable value for the cell

    // checking through the row
    if (this.checkRow(x, value) == false) return false
    // checking through the column
    if (this.checkColumn(y, value) == false)  return false

    // checking through the 3x3 block of the cell
    if (this.checkCellBlock(x, y, value) == false) return false

    return true
  }

  checkRow(x, value) {
    for (let i = 0; i < 9; i++) {
      if (this.board[i][x] === value) return false
    }
  }

  checkColumn(y, value) {
    for (let i = 0; i < 9; i++) {
      if (this.board[y][i] === value) return false
    }
  }

  checkCellBlock(x, y, value) {
    const row = Math.floor(y / 3)
    const column = Math.floor(x / 3)
    for (let i = (row * 3); i < ((row * 3) + 3); i++) {
      for (let j = (column * 3); j < ((column * 3) + 3); j++) {
        if (y !== i && x !== j && this.board[i][j] === value) return false
      }
    }
  }

  solve() {
    const [y, x] = this.findEmptyCell()

    // checking if the board is complete
    if (y === -1 && x === -1) return true

    if (this.checkIfBoardSolved([y, x]) == true) return true

    // returning false the board cannot be solved using current configuration
    return false
  }

  checkIfBoardSolved([y, x]) {
    for (let val = 1; val < 10; val++) {
      if (this.checkBoard([y, x], val)) {
        this.board[y][x] = val
        if (this.solve()) return true
        // backtracking if the board cannot be solved using current configuration
        this.board[y][x] = 0
      }
    }
  }

  getRowSection (row, [start, end]) {
    return this.board[row].slice(start, end)
  }

  printBoard () {
    // helper function to display board
    for (let i = 0; i < 9; i++) {
      if (i % 3 === 0 && i !== 0) console.log('- - - - - - - - - - - -')
      console.log(
        ...this.getRowSection(i, [0, 3]), ' | ',
        ...this.getRowSection(i, [3, 6]), ' | ',
        ...this.getRowSection(i, [6, 9]))
    }
  }
}

function main () {
  // main function with an example
  const sudokuBoard = new Sudoku([
    [3, 0, 6, 5, 0, 8, 4, 0, 0],
    [5, 2, 0, 0, 0, 0, 0, 0, 0],
    [0, 8, 7, 0, 0, 0, 0, 3, 1],
    [0, 0, 3, 0, 1, 0, 0, 8, 0],
    [9, 0, 0, 8, 6, 3, 0, 0, 5],
    [0, 5, 0, 0, 9, 0, 6, 0, 0],
    [1, 3, 0, 0, 0, 0, 2, 5, 0],
    [0, 0, 0, 0, 0, 0, 0, 7, 4],
    [0, 0, 5, 2, 0, 6, 3, 0, 0]
  ])

  sudokuBoard.printBoard()

  console.log('\n')
  sudokuBoard.solve()

  sudokuBoard.printBoard()
}

main()
