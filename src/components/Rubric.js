import React from 'react';
import './Rubric.css';
import RubricItem from './RubricItem';
import { Button } from './Button';
import { Link } from 'react-router-dom';



function Rubric() {
  return (
    <div className='rubric'>
      <h1>Your History Answer</h1>
      <div className='rubric__container'>
        <div className='rubric__wrapper'>
          <ul className='rubric__items'>
            <textarea>
   
            </textarea>
          </ul>

          <h1> History Evaluation </h1>
          <ul className='credit'>
            <h3> Items Found in Note: </h3>
          <RubricItem 
              text='PPNBP3WEEKS'
            />
                      <RubricItem 
              text='PPNFURNITURE'
            />
                      <RubricItem 
              text='PPNFLEX'
            />
                      <RubricItem 
              text='PPNTYLENOL'
            />
                      <RubricItem 
              text='PPNRADIATE'
            />
                                  <RubricItem 
              text='PPNEXCERCISE'
            />
                      <RubricItem 
              text='PPNFATHERHIST'
            />
                      <RubricItem 
              text='PPNLEGS'
            />
                      <RubricItem 
              text='PPNBOWEL'
            />

          </ul>

          <ul className='nocredit'>
          <h3> Items NOT Found in Note: </h3>
          <RubricItem
              text='PPNBLADER'
            />
 
          </ul>
        </div>
      </div>


      <h1>Your Physical Exam Answer</h1>
      <div className='rubric__container'>
        <div className='rubric__wrapper'>
          <ul className='rubric__items'>
            <textarea>
            No spinal tenderness to palpation. Paraspinal muscles in lumbar region tender to palpation bilaterally. Limited spinal flexion, lateral bending. 
            </textarea>
          </ul>

          <h1> Physical Exam Evaluation </h1>
          <ul className='credit'>
            <h3> Items Found in Note: </h3>
          <RubricItem 
              text=''
            />

          </ul>

          <ul className='nocredit'>
          <h3> Items NOT Found in Note: </h3>
          <RubricItem
              text=''
              />


          </ul>
        </div>
      </div>
        <div className='input-areas'>
          <Link to='/'>
            <Button
              buttonStyle='btn--test'
            >
              Logout & Take Survey
            </Button>
          </Link>
        </div>
    </div>
  );
}

export default Rubric;
