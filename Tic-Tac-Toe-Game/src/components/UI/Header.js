import React from 'react';
import { RefreshCw, HelpCircle } from 'lucide-react';
import Button from './Button.js';

const Header = ({ onShowHelp, onResetGame }) => {
  return (
    <div className="text-center mb-8">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-2">
        Twisted Tic Tac Toe
      </h1>
      <p className="text-lg text-gray-600">Vanishing Emoji Edition ✨</p>
      <div className="flex justify-center gap-4 mt-4">
        <Button onClick={onShowHelp} className="flex items-center gap-2">
          <HelpCircle size={20} />
          Help
        </Button>
        <Button 
          onClick={onResetGame} 
          variant="secondary"
          className="flex items-center gap-2"
        >
          <RefreshCw size={20} />
          New Game
        </Button>
      </div>
    </div>
  );
};

export default Header;