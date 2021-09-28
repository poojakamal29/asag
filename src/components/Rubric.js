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
            Mr. Kelly Kort is a previously healthy 45 y.o. man who presents to the ambulatory clinic ( day 1) with acute back pain. Three weeks ago was moving
boxes in his living room and after which felt back pain immediately. The pain is described as diffuse and non-radiating. The pain however feels sharp
when he makes quick moves. He is concerned because the pain has not gotten better and the pain is the worst back pain that he's ever felt. He takes
tylenol 2-3 times a day and it has not gotten better or gotten worse. Nothing makes the pain better. He is also concerned because his dad died of
prostate cancer with mets to the spine and he is concerned that he may have cancer of his spine. He drinks a couple times a week but denies drugs and
excessive exercise. He denies flu like symptoms, weight loss, blood loss, dysphagia, and chills, n/v, or syncope. He is otherwise well. Differential
diagnosis for this includes: spinal compression fracture most likely, sprain, or much lower spinal stenosis, pyelonephritis, or compression due to tumor.
Unlikely however cancer but still can proceed with imaging to rule out.
            </textarea>
          </ul>

          <h1> History Evaluation </h1>
          <ul className='credit'>
            <h3> Items Found in Note: </h3>
          <RubricItem 
              text='Back pain for 3 weeks described as dull ache exacerbated by any movement'
            />
                      <RubricItem 
              text='Began after moving furniture'
            />
                      <RubricItem 
              text='Worse with flexion and rotation'
            />
                      <RubricItem 
              text='Trying Motrin and Tylenol with slight relief'
            />
                      <RubricItem 
              text=' Pain radiates laterally across the lower back'
            />
                                  <RubricItem 
              text=' Unable to perform usual exercise routine'
            />
                      <RubricItem 
              text='Father with history of prostate cancer with spine mets'
            />
                      <RubricItem 
              text='No radiation to the legs'
            />
                      <RubricItem 
              text='No bowel symptoms'
            />
            
            <RubricItem 
              text='No LE weakness, numbness or tingling'
            />
                        <RubricItem 
              text=' No fever'
            />
                        <RubricItem 
              text='No past medical history of note'
            />
                        <RubricItem 
              text='No IV drug use in the past'
            />
                        <RubricItem 
              text=' No smoking in the past'
            />
                        <RubricItem 
              text='No concerning alcohol use'
            />
             


          </ul>

          <ul className='nocredit'>
          <h3> Items NOT Found in Note: </h3>
          <RubricItem
              text='No bladder symptoms'
            />
                       <RubricItem 
              text='No weight loss'
            />
 
          </ul>
        </div>
      </div>


      <h1>Your Physical Exam Answer</h1>
      <div className='rubric__container'>
        <div className='rubric__wrapper'>
          <ul className='rubric__items'>
            <textarea>
            12 point exam was negative with the exception of musculoskeletal findings. Including negative for lymphadenopathy. Patient had a positive straight leg
            test. Was able to move the leg only 60 degrees. Had difficulty with flexion of hips bilaterally. Difficulty with spine flexion. Denies flank pain.            </textarea>
          </ul>

          <h1> Physical Exam Evaluation </h1>
          <ul className='credit'>
            <h3> Items Found in Note: </h3>
          <RubricItem 
              text=' Vital signs mentioned - normal'
            />
                      <RubricItem 
              text='Pain on paraspinal palpation'
            />
                      <RubricItem 
              text='Motor strength 5/5 in LE'
            />
                      <RubricItem 
              text=' Reflexes 2/4 in LE bilaterally'
            />
                                  <RubricItem 
              text=' Sensory intact in LE bilaterally'
            />
                                  <RubricItem 
              text=' Pulses 2/4 in DP/PT'
            />
                                  <RubricItem 
              text=' No vertebral tenderness'
            />
                                  <RubricItem 
              text='Babinski down going bilaterally'
            />

          </ul>

          <ul className='nocredit'>
          <h3> Items NOT Found in Note: </h3>
          <RubricItem
              text='Straight leg raise'
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
