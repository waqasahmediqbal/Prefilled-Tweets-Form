import React, { useState, useEffect } from 'react';

const Title = () => {
  const [currentWord, setCurrentWord] = useState('');
  const words = ['TWEETS FORM']; // Replace with your own array of words

  useEffect(() => {
    let currentLetterIndex = 0;
    let currentWordIndex = 0;
    const interval = setInterval(() => {
      const word = words[currentWordIndex];
      setCurrentWord(word.substring(0, currentLetterIndex + 1));
      currentLetterIndex++;

      if (currentLetterIndex === word.length && currentWordIndex === 0) {
        clearInterval(interval); // Stop the interval when first word is complete
        setTimeout(() => {
          setCurrentWord(word); // Set the complete word after a delay
        }, 300);
      }

      if (currentLetterIndex === word.length && currentWordIndex === 1) {
        clearInterval(interval); // Stop the interval when second word is complete
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return <h1 style={{ color: '#379AC1', fontSize: '60px' }}>{currentWord}</h1>;
};

export default Title;
