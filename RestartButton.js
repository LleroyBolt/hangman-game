// src/components/RestartButton.js

import React from 'react';

// Here is the RestartButton component for restarting the game
function RestartButton({ onRestart }) {
  return (
    <button onClick={onRestart} className="restart-button">
      Restart Game
    </button>
  );
}

export default RestartButton;
