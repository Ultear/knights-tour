// Possible knight moves
const KNIGHT_MOVES = [[-1, -2], [-1, 2], [-2, -1], [-2, 1], [1, -2], [1, 2], [2, -1], [2, 1]];


/**
 * creates a multidimensional array, which illustrates current game state
 * @param  {Number} [boardSize=8] [Matrix size]
 * @return {Array}
 */
const createBoard = (boardSize = 8) =>
  new Array(boardSize).fill()
  .map(row => new Array(boardSize).fill(true))


/**
 * Finds possible moves from current position
 * @param  {Array} board  Currect game state created by createBoard function
 * @param  {Integer} x    x Position
 * @param  {Integer} y    y Position
 * @return {Array}        Collection of possible moves from given position
 */
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
