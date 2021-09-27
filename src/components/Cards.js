import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { Button } from './Button';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these options:</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Class Performance'
              label='Grades'
              path='/facultycardone'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Individual Performance'
              label='Statistics'
              path='/Studentlist'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
