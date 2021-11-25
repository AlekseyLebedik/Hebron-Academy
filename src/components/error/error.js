import React from 'react';
import './error.css';
import Frame from './Frame.png';
import Frame2 from './Frame2.png'
import {Link} from 'react-router-dom'
//import Errors from './404.png';

const Error = () => {
    return(
        <div className='errors'>
            <div className='logo-frame2'>
                <img src={Frame2} alt=''/>
            </div>
            <div className='centr-block'>
                <h1>Помилка</h1>
                <span>404</span>
                <div className='text-error'>
                    <h4>Вибачте. такої сторінки не існує.</h4>
                    <h4>або вона була видалена.</h4>
                </div>
                <Link to='/'><button className='error-btn'>На головну</button></Link>
            </div>
            <div className='logo-frame'>
                <img src={Frame} alt=''/>
            </div>
            
        </div>
    )
}

export default Error;