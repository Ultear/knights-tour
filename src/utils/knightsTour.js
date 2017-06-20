const KNIGHT_MOVES = [[-1, -2], [-1, 2], [-2, -1], [-2, 1], [1, -2], [1, 2], [2, -1], [2, 1]];

const createBoard = (boardSize = 8) =>
  new Array(boardSize).fill()
  .map(row => new Array(boardSize).fill(true))

const findPossibleMoves = (board, x, y) =>
  KNIGHT_MOVES
    .map(moves => ({
      x: x + moves[0],
      y: y + moves[1]
    }))
    .filter(moves => board[moves.x] && board[moves.x][moves.y])


export {
  createBoard,
  findPossibleMoves
}
