import React, { useState } from 'react';

export const Smiles = ({ emoji, index, clicks, handleVote }) => {
   return (
      <div className="smile">
         <button onClick={() => handleVote(index)}>{emoji}</button>
         <div className="clicks-count">Clicks: {clicks}</div>
      </div>
   );
};
