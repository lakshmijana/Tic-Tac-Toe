import { EMOJI_CATEGORIES, WINNING_LINES } from './constants.js';

export const getRandomEmoji = (category) => {
  const emojis = EMOJI_CATEGORIES[category];
  return emojis[Math.floor(Math.random() * emojis.length)];
};

export const checkWinner = (board) => {
  for (let line of WINNING_LINES) {
    const [a, b, c] = line;
    if (board[a] && board[b] && board[c]) {
      if (board[a].player === board[b].player && 
          board[b].player === board[c].player) {
        return board[a].player;
      }
    }
  }
  return null;
};

export const isValidMove = (board, index, gameHistory, currentPlayer) => {
  // Can't place on occupied cell
  if (board[index]) return false;
  
  // If player has 3 emojis, check if trying to place where oldest was
  if (gameHistory[currentPlayer].length >= 3) {
    const oldestMove = gameHistory[currentPlayer][0];
    if (index === oldestMove.index) {
      return false; // Can't place where oldest emoji was
    }
  }
  
  return true;
};