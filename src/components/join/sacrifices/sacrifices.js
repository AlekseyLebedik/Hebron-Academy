import React from 'react';
import HebronNeedsJoinPage from '../../hebron-needs-join-page';
import Frame from './img/Frame.png';
import './sacrifices.css';


export const Sacrifices = () => {
    return(
        <div className='join-img-c'>
            <div className='frame-img'>
                <img src={Frame} alt=''/>
                <button className='btn-help'>Відкрий філіал у своєму місті</button>
            </div>
            <div className='help'>
                <h4>Допомога</h4>
                <h1>Необхідні потреби Хеврону</h1>
                <HebronNeedsJoinPage className='hebron-needs-join-page-sacrifices'/>
            </div>
            
        </div>
    )
}