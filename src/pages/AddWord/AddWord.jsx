import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AddWord.css';

const AddWord = () => {
  const [word, setWord] = useState('');
  const [meaning, setMeaning] = useState('');

  const handleWord = (event) => {
    setWord(event.target.value);
  };

  const handleSentence = (event) => {
    setMeaning(event.target.value);
  };

  const handleSubmit = () => {
    const wordMeaning = {
      word,
      meaning,
    };
    const words = localStorage.getItem('dictionary');
    if (words) {
      const wordsData = JSON.parse(words);
      localStorage.setItem('dictionary', JSON.stringify([...wordsData, wordMeaning]));
    } else {
      localStorage.setItem('dictionary', JSON.stringify([wordMeaning]));
    }
  };
  return (
    <>
      <div className="Add-Word-Page">
        <form>
          <label htmlFor="word" className="Word-Fill-Label">What is the word?</label>
          <br />
          <input type="text" className="Word-Fill" name="word" onChange={handleWord} value={word} />
          <br />
          <label htmlFor="meaning" className="Word-Meaning-Label">let&apos;s use it in a sentence</label>
          <br />
          <input type="text" className="Word-Meaning" name="meaning" onChange={handleSentence} value={meaning} />
        </form>
      </div>
      <Link to="/home" type="button" className="Add-Word-Button" onClick={() => { handleSubmit(); }}>✔️</Link>
    </>
  );
};

export default AddWord;
