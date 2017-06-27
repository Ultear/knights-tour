Knigths tour
============

A knight's tour is a sequence of moves of a knight on a chessboard such that the knight visits every square only once. If the knight ends on a square that is one knight's move from the beginning square (so that it could tour the board again immediately, following the same path), the tour is closed, otherwise it is open.

The knight's tour problem is the mathematical problem of finding a knight's tour. Creating a program to find a knight's tour is a common problem given to computer science students.[1] Variations of the knight's tour problem involve chessboards of different sizes than the usual 8 × 8, as well as irregular (non-rectangular) boards.

Game goal
---------
Fill the matrix without leaving empty field using chess knight's moves.



API Docs
--------


## createBoard(boardSize)

```
    let board = createBoard(8)
```


## findPossibleMoves(board, x, y)

```
    // Dummy data
    let coordinates = {
        x: 3,
        y: 7
    }
    
    let board = createBoard(8)
    let {x, y} = coordinates
    
    let possibleMoves = findPossibleMoves(board, x, y) //Array with possible moves
```



