import React from 'react';
import { X } from 'lucide-react';

const HelpModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 max-w-2xl max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">How to Play</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="space-y-4 text-sm">
          <div>
            <h3 className="font-semibold mb-2">🎯 Objective</h3>
            <p>Get 3 of your emojis in a row (horizontal, vertical, or diagonal) to win!</p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">🎮 Setup</h3>
            <p>Each player chooses an emoji category. You'll get random emojis from your chosen category.</p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">✨ The Twist - Vanishing Rule</h3>
            <ul className="list-disc ml-4 space-y-1">
              <li>Each player can only have 3 emojis on the board at once</li>
              <li>When you place your 4th emoji, your oldest emoji disappears</li>
              <li>You cannot place a new emoji where your oldest emoji just vanished</li>
              <li>This creates a dynamic, ever-changing board!</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">🏆 Winning</h3>
            <p>Form a line of 3 emojis from your category. The game continues until someone wins - no draws possible!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpModal;