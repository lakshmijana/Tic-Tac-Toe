import { useState } from 'react';
import { GAME_STATES, MAX_EMOJIS_PER_PLAYER } from '../utils/constants.js';
import { getRandomEmoji, checkWinner, isValidMove } from '../utils/gameHelpers.js';

export const useGameLogic = () => {
  const [gameState, setGameState] = useState(GAME_STATES.SETUP);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [playerCategories, setPlayerCategories] = useState({ 1: null, 2: null });
  const [playerEmojis, setPlayerEmojis] = useState({ 1: [], 2: [] });
  const [winner, setWinner] = useState(null);
  const [gameHistory, setGameHistory] = useState({ 1: [], 2: [] });

  const startGame = () => {
    if (playerCategories[1] && playerCategories[2]) {
      setGameState(GAME_STATES.PLAYING);
      setBoard(Array(9).fill(null));
      setCurrentPlayer(1);
      setPlayerEmojis({ 1: [], 2: [] });
      setWinner(null);
      setGameHistory({ 1: [], 2: [] });
    }
  };

  const resetGame = () => {
    setGameState(GAME_STATES.SETUP);
    setBoard(Array(9).fill(null));
    setCurrentPlayer(1);
    setPlayerCategories({ 1: null, 2: null });
    setPlayerEmojis({ 1: [], 2: [] });
    setWinner(null);
    setGameHistory({ 1: [], 2: [] });
  };

  const makeMove = (index) => {
    if (!isValidMove(board, index, gameHistory, currentPlayer) || 
        winner || gameState !== GAME_STATES.PLAYING) {
      return;
    }

    const newBoard = [...board];
    const currentEmoji = getRandomEmoji(playerCategories[currentPlayer]);
    const newPlayerEmojis = { ...playerEmojis };
    const newGameHistory = { ...gameHistory };

    // Add the new move to history
    newGameHistory[currentPlayer].push({ index, emoji: currentEmoji });

    // If player has 3 emojis, remove the oldest one
    if (newPlayerEmojis[currentPlayer].length >= MAX_EMOJIS_PER_PLAYER) {
      const oldestMove = newGameHistory[currentPlayer].shift();
      const oldestIndex = oldestMove.index;
      
      // Remove oldest emoji from board
      newBoard[oldestIndex] = null;
      newPlayerEmojis[currentPlayer].shift();
    }

    // Place new emoji
    newBoard[index] = { player: currentPlayer, emoji: currentEmoji };
    newPlayerEmojis[currentPlayer].push({ index, emoji: currentEmoji });

    setBoard(newBoard);
    setPlayerEmojis(newPlayerEmojis);
    setGameHistory(newGameHistory);

    // Check for winner
    const gameWinner = checkWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
      setGameState(GAME_STATES.GAME_OVER);
    } else {
      setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
    }
  };

  const setPlayerCategory = (player, category) => {
    setPlayerCategories({ ...playerCategories, [player]: category });
  };

  return {
    gameState,
    board,
    currentPlayer,
    playerCategories,
    playerEmojis,
    winner,
    gameHistory,
    startGame,
    resetGame,
    makeMove,
    setPlayerCategory
  };
};