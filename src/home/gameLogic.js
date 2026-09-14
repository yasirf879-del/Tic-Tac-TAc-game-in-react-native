export const winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  [0, 4, 8],
  [2, 4, 6],
];

export const checkWinner = (board) => {
  for (const pattern of winningPatterns) {
    const [a, b, c] = pattern;
    if (board[a] !== "" && board[a] === board[b] && board[a] === board[c]) {
      return {
        player: board[a],
        pattern: pattern,
      };
    }
  }
  return null;
};

export const handleMove = ({
  index,
  board,
  currentPlayer,
  winner,
  isDraw,
  setBoard,
  setCurrentPlayer,
  setWinner,
  setWinningPattern,
  setIsDraw,
  setPlayerXWins,
  setPlayerOWins,
  setTotalGames,
  setDrawGames,
}) => {
  if (board[index] !== "") {
    return;
  }

  if (winner || isDraw) {
    return;
  }

  const newBoard = [...board];

  newBoard[index] = currentPlayer;

  setBoard(newBoard);

  const gameWinner = checkWinner(newBoard);

  if (gameWinner) {
    setWinner(gameWinner.player);
    setWinningPattern(gameWinner.pattern);
    if (gameWinner.player === "X") {
      setPlayerXWins((prev) => prev + 1);
    } else {
      setPlayerOWins((prev) => prev + 1);
    }
    setTotalGames((prev) => prev + 1);
    return;
  }
  if (!newBoard.includes("")) {
    setIsDraw(true);
    setDrawGames((prev) => prev + 1);
    setTotalGames((prev) => prev + 1);
    return;
  }
  setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
};

export const emptyBoard = ({
  currentPlayer,
  setBoard,
  setWinner,
  setIsDraw,
  setCurrentPlayer,
  setWinningPattern,
}) => {
  setBoard(["", "", "", "", "", "", "", "", ""]);
  setWinner(null);
  setIsDraw(false);
  setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  setWinningPattern(null);
};
