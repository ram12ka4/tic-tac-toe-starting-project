import { useState } from "react";

const initalGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, turns }) {
  let gameBoard = initalGameBoard;

  for (const turn of turns) {
    console.log('In for loop');
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  console.log("Game Board length@==" + gameBoard.length + " and value@==" + gameBoard[0][0]);

  // const [gameBoard, setGameBoard] = useState(initalGameBoard);

  // function handleSelectSquare(rowIndex, colIndex) {
  //   setGameBoard((previousBoard) => {
  //     const updatedBoard = [
  //       ...previousBoard.map((innerArray) => [...innerArray]),
  //     ];
  //     updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updatedBoard;
  //   });

  //   onSelectSquare();
  // }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
