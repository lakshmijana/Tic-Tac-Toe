import React from 'react';
import { EMOJI_CATEGORIES } from '../../utils/constants.js';
import CategoryButton from './CategoryButton.js';
import Button from '../UI/Button.js';

const CategorySelection = ({ 
  playerCategories, 
  onCategorySelect, 
  onStartGame 
}) => {
  const canStartGame = playerCategories[1] && playerCategories[2];

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg mb-8">
      <h2 className="text-2xl font-bold text-center mb-6">Choose Your Emoji Categories</h2>
      
      {/* Player 1 Selection */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4 text-blue-600">
          Player 1 - Choose your category:
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {Object.keys(EMOJI_CATEGORIES).map(category => (
            <CategoryButton
              key={`p1-${category}`}
              category={category}
              player={1}
              isSelected={playerCategories[1] === category}
              onSelect={onCategorySelect}
            />
          ))}
        </div>
      </div>

      {/* Player 2 Selection */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4 text-red-600">
          Player 2 - Choose your category:
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {Object.keys(EMOJI_CATEGORIES).map(category => (
            <CategoryButton
              key={`p2-${category}`}
              category={category}
              player={2}
              isSelected={playerCategories[2] === category}
              onSelect={onCategorySelect}
            />
          ))}
        </div>
      </div>

      {/* Start Game Button */}
      {canStartGame && (
        <div className="text-center">
          <Button
            onClick={onStartGame}
            variant="success"
            size="lg"
            className="shadow-md"
          >
            Start Game! 🎮
          </Button>
        </div>
      )}
    </div>
  );
};

export default CategorySelection;