import React from 'react';
import './CardsStudent.css';
import CardItem from './CardItem';
import { Button } from './Button';

function CardsStudent() {
    return (
        <div className='cards'>
            <h1>Check out these options:</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-3.jpg'
                            text='Individual Performance'
                            label='Grades'
                            path='/facultycardthree'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CardsStudent;
