/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

const AddWord = () => {
  const [word, setWord] = useState('');
  const [meaning, setMeaning] = useState('');

  const handleWord = (event) => {
    setWord(event.target.value);
  };

  const handleSentence = (event) => {
    setMeaning(event.target.value);
  };

  return (
    <div>
      <form>
        <label htmlFor="word">What is the word?</label>
        <br />
        <input type="text" id="word" name="word" onChange={handleWord} value={word} />
        <br />
        <label htmlFor="meaning">let&apos;s use it in a sentence</label>
        <br />
        <input type="text" id="meaning" name="meaning" onChange={handleSentence} value={meaning} />
      </form>
    </div>
  );
};

export default AddWord;
