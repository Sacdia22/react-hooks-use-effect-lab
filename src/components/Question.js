
import React, { useState, useEffect } from 'react';

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  useEffect(() => {
    // First, check if time has run out
    if (timeRemaining === 0) {
      setTimeRemaining(10); // Reset timer
      onAnswered(false);    // Notify parent
      return; // Important: don't set up a new timeout
    }

    // Set up the timeout to decrease timer after 1 second
    const timeoutId = setTimeout(() => {
      setTimeRemaining(timeRemaining - 1);
    }, 1000);

    // Cleanup function to clear timeout
    return () => {
      clearTimeout(timeoutId);
    };
  }, [timeRemaining, onAnswered]); // Dependencies

  return (
    <div>
      <h1>{question.text}</h1>
      {/* Make sure the text format matches what tests expect */}
      <p>{timeRemaining} seconds remaining</p>
      {/* Answer options are probably here */}
    </div>
  );
}

export default Question;