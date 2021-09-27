import React from 'react';
import '../../App.css';
import { Button } from '../Button';

import { Link } from 'react-router-dom';

export default function Studentlist() {
    return (
        <>
            <h1> Student Number </h1>
            <Button>
                <Link to='/facultycardthree'> 530 </Link>
            </Button>
            
            <Button>
                <Link to='/facultycardthree'> 531 </Link>
            </Button>
            <Button>
                <Link to='/facultycardthree'> 532 </Link>
            </Button>
            <Button>
                <Link to='/facultycardthree'> 533 </Link>
            </Button>
            <Button>
                <Link to='/facultycardthree'> 534 </Link>
            </Button>
            <Button>
                <Link to='/facultycardthree'> 535 </Link>
            </Button>
            <Button>
                <Link to='/facultycardthree'> 536 </Link>
            </Button>
            <Button>
                <Link to='/facultycardthree'> 537 </Link>
            </Button>
            <Button>
                <Link to='/facultycardthree'> 538 </Link>
            </Button>
            <Button>
                <Link to='/facultycardthree'> 539 </Link>
            </Button>
            <Button>
                <Link to='/facultycardthree'> 540 </Link>
            </Button>
            <Button>
                <Link to='/facultycardthree'> 541 </Link>
            </Button>
            <Button>
                <Link to='/facultycardthree'> 542 </Link>
            </Button>
            <Button>
                <Link to='/facultycardthree'> 543 </Link>
            </Button>
            <Button>
                <Link to='/facultycardthree'> 544                                                                                 </Link>
            </Button>
            <Button>
                <Link to='/facultycardthree'> 545               </Link>
            </Button>

            <section className='footer-subscription'>
            <p className='footer-subscription-text'>
            Search for a student:
            </p>
            <div className='input-areas'>
            <form>
                <input
                className='footer-input'
                name='email'
                type='email'
                placeholder='Name or ID'
                />
                <Button buttonStyle='btn--test'>search</Button>
            </form>
            </div>
        </section>
        </>
    );
}