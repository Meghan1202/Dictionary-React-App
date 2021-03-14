import React from 'react';
import FloatingActionButton from '../../components/FloatingActionButton/FloatingActionButton';
import VocabCard from '../../components/VocabCard/VocabCard';
import './Home.css';

const getAllWords = () => {
  const dictionaryWords = JSON.parse(localStorage.getItem('dictionary'));
  return dictionaryWords;
};

const Home = () => {
  const dictWords = getAllWords();
  return (
    <>
      <div className="Home-Page">
        <h1 className="Home-Body">welcome back</h1>
        <div className="Cards-Container">
          {
      dictWords
        ? dictWords.map((wordObj) => (
          <VocabCard key={wordObj.word} word={wordObj.word} meaning={wordObj.meaning} />
        ))
        : <VocabCard />
    }
        </div>
        <FloatingActionButton />
      </div>
    </>
  );
};

export default Home;
