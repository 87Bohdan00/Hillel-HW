import React, { useState } from 'react';
import { Smiles } from './Smiles.jsx';

export const Voiting = () => {
   const smiles = ['🤩', '🙃', '😶', '😆', '😃'];
   const [showResults, setShowResults] = useState(false);
   const [votes, setVotes] = useState(smiles.map(() => 0));

   const handleShowResults = () => {
      setShowResults(true);
   };

   const handleResetVotes = () => {
      setVotes(smiles.map(() => 0));
      setShowResults(false);
   };

   const handleVote = (index) => {
      const newVotes = [...votes];
      newVotes[index] += 1;
      setVotes(newVotes);
   };

   const maxVotes = Math.max(...votes);
   const winningIndexes = votes.reduce((acc, vote, index) => {
      if (vote === maxVotes) acc.push(index);
      return acc;
   }, []);

   const winningSmiles = winningIndexes.map((index) => smiles[index]);

   return (
      <div className="container">
         <h1>Voiting</h1>
         <div className="smile-container">
            {smiles.map((emoji, index) => (
               <Smiles
                  key={index}
                  emoji={emoji}
                  index={index}
                  clicks={votes[index]}
                  handleVote={handleVote}
               />
            ))}
         </div>
         <div className="result">
            <button onClick={handleShowResults}>Show Results</button>
            <button onClick={handleResetVotes}>Reset Votes</button>
         </div>
         {showResults && (
            <div>
               <h2>Results:</h2>
               <p>
                  The winning smile(s) is/are: {winningSmiles.join(', ')} with{' '}
                  {maxVotes} votes.
               </p>
            </div>
         )}
      </div>
   );
};
