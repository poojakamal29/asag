import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


function HeroSection() {
  const closeMobileMenu = () => setClick(false);
  const [click, setClick] = useState(false);

  return (
    <div className='hero-container'>
      <h1>Which one are you?</h1>
      <div className='hero-btns'>
        <Link to='/facultycardtwo'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            FACULTY
          </Button>
        </Link>

        <Link to='/student'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            STUDENT
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
