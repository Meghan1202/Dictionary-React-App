import React from 'react';
import './VocabCard.css';
import PropTypes from 'prop-types';

const VocabCard = ({ meaning, word }) => (
  <div className="Card-Body" data-testid="Card-Body">
    <h3 className="Word">{word}</h3>
    <p>{meaning}</p>
  </div>
);

VocabCard.defaultProps = {
  meaning: 'Used to denote a term in the English language',
  word: 'Word',
};

VocabCard.propTypes = {
  meaning: PropTypes.string,
  word: PropTypes.string,
};

export default VocabCard;
