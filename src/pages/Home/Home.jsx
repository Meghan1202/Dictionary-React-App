import React from 'react';
import VocabCard from '../../components/VocabCard/VocabCard';
import './Home.css';

const Home = () => (
  <>
    <h3 className="Home-Body">welcome back</h3>
    <div className="Cards-Container">
      <VocabCard />
      <VocabCard />
      <VocabCard />
      <VocabCard />
      <VocabCard />
      <VocabCard />
    </div>
  </>
);

export default Home;
