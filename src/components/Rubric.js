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
            <textarea className = 'textbox'>
            45 y/o M w/no significant PMH presents w/ non radiating bilateral sharp throbbing lower back pain that began 3 weeks ago after helping his wife rearrange
furniture -negative for weight loss, no urinary or bowel movement issues, denies blood in stool or urine -family hx of prostate cancer (father)
            </textarea>
          </ul>

          <h1> History Evaluation </h1>
          <h4> Note: Any item marked with an * displays an item where the machine had high confidence </h4>

          <ul className='credit'>
            <h3> Items Found in Note: </h3>

                      <RubricItem 
              text='Began after moving furniture *'
            />



                                  <RubricItem 
              text=' Unable to perform usual exercise routine'
            />
 
                      <RubricItem 
              text='No radiation to the legs'
            />



                        <RubricItem 
              text='No past medical history of note'
            />

             


          </ul>

          <ul className='nocredit'>
          <h3> Items NOT Found in Note: </h3>
          <RubricItem className = 'highconfidence'
              text='Back pain for 3 weeks described as dull ache exacerbated by any movement *'
            />
                                  <RubricItem 
              text='Worse with flexion and rotation'
            />
                                  <RubricItem 
              text='Trying Motrin and Tylenol with slight relief *'
            />
          <RubricItem
          
              text='No bladder symptoms'
            />
                                  <RubricItem 
              text='No bowel symptoms'
            />
            
                              <RubricItem 
              text='No radiation to the legs'
            />
                      <RubricItem 
              text='No bowel symptoms'
            />
                                  <RubricItem 
              text=' No fever *'
            />
                                  <RubricItem 
              text='No concerning alcohol use'
            />
                                 <RubricItem 
              text='Father with history of prostate cancer with spine mets'
            />

        <RubricItem 
              text=' Pain radiates laterally across the lower back'
            />

                       <RubricItem 
              text='No weight loss'
            />
                        <RubricItem 
              text='No LE weakness, numbness or tingling *'
            />
                                    <RubricItem 
              text=' No fever *'
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
        </div>
      </div>


      <h1>Your Physical Exam Answer</h1>
      <div className='rubric__container'>
        <div className='rubric__wrapper'>
          <ul className='rubric__items'>
            <textarea>
            cardio: regular rate and rhythm resp: clear bilatearlly abdomen: non tender, non distended msk: pt has limited ROM due to back pain, spine palpation is
negative but tender lower back neuro: alert and oriented x 3; patellar and ankle reflexes are 2 +            </textarea>
          </ul>

          <h1> Physical Exam Evaluation </h1>
          <h4> Note: Any item marked with an * displays an item where the machine had high confidence </h4>

          <ul className='credit'>
            <h3> Items Found in Note: </h3>

                      <RubricItem 
              text='Pain on paraspinal palpation *'
            />

                                  <RubricItem 
              text=' No vertebral tenderness *'
            />
                                  <RubricItem 
              text='Babinski down going bilaterally'
            />

          </ul>

          <ul className='nocredit'>
          <h3> Items NOT Found in Note: </h3>
          <RubricItem 
              text='Vital signs mentioned - normal'
            />
          <RubricItem
              text='Straight leg raise'
              />
                                <RubricItem 
              text='Motor strength 5/5 in LE *'
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
              text='Limited range of motion of the back'
            />
            
          </ul>
        </div>
      </div>



  

      <h1>Your Diagnosis Answer</h1>
      <div className='rubric__container'>
        <div className='rubric__wrapper'>
          <ul className='rubric__items'>
            <textarea>
            Lumbar sprain
            </textarea>

            <textarea>
            paraspinal tenderness, no vertebral tenderness
            </textarea>

            <textarea>
            spinal stenosis  </textarea>

            <textarea>
            radiculopathy  </textarea>
            
          </ul>

          <h1> Diagnosis Evaluation </h1>
          <h4> Note: Any item marked with an * displays an item where the machine had high confidence </h4>

          <ul className='credit'>
            <h3> Items Found in Note: </h3>
          <RubricItem 
              text='Cancer with spinal mets'
            />

          </ul>

          <ul className='nocredit'>
          <h3> Items NOT Found in Note: </h3>
          <RubricItem
              text='Low back strain'
              />
                    <RubricItem
              text='Lumbar Disc Disease'
              />
          </ul>
        </div>
      </div>



      <h1>Your Test Ordered Answer</h1>
      <div className='rubric__container'>
        <div className='rubric__wrapper'>
          <ul className='rubric__items'>
            <textarea>
            unlikely bc no numbness or tingling
            </textarea>

            <textarea>
            No Answer
            </textarea>

            <textarea>
              No Answer
            </textarea>

            <textarea>
              No Answer
            </textarea>

            <textarea>
              No Answer
            </textarea>
          </ul>

          <h1> Test Ordered Evaluation </h1>
          <h4> Note: Any item marked with an * displays an item where the machine had high confidence </h4>
          <ul className='credit'>
            <h3> Items Found in Note: </h3>
          <RubricItem text = 'None '/>

          </ul>

          <ul className='nocredit'>
          <h3> Items NOT Found in Note: </h3>
          <RubricItem 
              text='MRI'
            />
          <RubricItem 
              text='PSA'
            />
          <RubricItem
              text='Prostate exam'
              />
          <RubricItem
              text='XRAY'
              />

          <RubricItem
              text='CT'
              />

          <RubricItem
              text='PSAPE'
              />

          <RubricItem
              text='None'
              />
          </ul>
        </div>
      </div>




        <div className='input-areas'>
          <Link to={{pathname: 'https://jumpsimulation.sjc1.qualtrics.com/jfe/form/SV_6Xcf6pMBNOLAEFU'}} target="_blank">
            <Button
              buttonStyle='btn--test'
            >
              Finish & Take Survey
            </Button>
          </Link>
        </div>
    </div>



  );
}

export default Rubric;
