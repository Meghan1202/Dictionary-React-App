import React from 'react';
import { Link } from 'react-router-dom';
import './FloatingActionButton.css';

const FloatingActionButton = () => (
  <Link to="/add-word">
    <button className="Floating-Action-Button" type="button">
      +
    </button>
  </Link>
);

export default FloatingActionButton;
