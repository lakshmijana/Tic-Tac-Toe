export const EMOJI_CATEGORIES = {
  animals: ['🐶', '🐱', '🐵', '🐰', '🦊', '🐸', '🐨', '🐼'],
  food: ['🍕', '🍟', '🍔', '🍩', '🍪', '🎂', '🍎', '🍌'],
  sports: ['⚽️', '🏀', '🏈', '🎾', '🏐', '🏓', '🎯', '🎳'],
  nature: ['🌸', '🌺', '🌻', '🌹', '🌷', '🌼', '🍀', '🌿'],
  space: ['🌟', '⭐️', '🌙', '☄️', '🪐', '🌍', '🚀', '👽']
};

export const GAME_STATES = {
  SETUP: 'setup',
  PLAYING: 'playing',
  GAME_OVER: 'gameOver'
};

export const WINNING_LINES = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
  [0, 4, 8], [2, 4, 6] // diagonals
];

export const MAX_EMOJIS_PER_PLAYER = 3;