import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const Button = () => (
  <React.Fragment data-testid="Get-start">
    <Link to="/home" className="Home-Link"><button className="Get-start" type="button">Get Started</button></Link>
  </React.Fragment>
);

export default Button;
