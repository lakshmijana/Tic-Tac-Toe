import React from 'react';
import { EMOJI_CATEGORIES } from '../../utils/constants.js';

const CategoryButton = ({ category, player, isSelected, onSelect }) => {
  return (
    <button
      onClick={() => onSelect(player, category)}
      className={`p-4 rounded-lg border-2 transition-all ${
        isSelected
          ? 'border-blue-500 bg-blue-50 shadow-md'
          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
      }`}
    >
      <div className="text-2xl mb-2">
        {EMOJI_CATEGORIES[category].slice(0, 4).join('')}
      </div>
      <div className="text-sm font-medium capitalize">{category}</div>
    </button>
  );
};

export default CategoryButton;
