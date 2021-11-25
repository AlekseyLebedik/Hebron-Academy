import React, { useState } from 'react';

import './reviews-for-about-us.css';
import {ReactComponent as LeftScrollHebronCommand} from './left-scroll-hebron-command-image.svg';
import {ReactComponent as RightScrollHebronCommand} from './right-scroll-hebron-command-image.svg';

import ComaImage from './coma.png';

const ReviewsForAboutUs = ({data, id}) =>{
    const [currentReviewId, setCurrentReviewId] = useState(id);
    const changeReviewIdClick = (value) =>{
        if(value === 'left' && currentReviewId > 1){
            setCurrentReviewId((newV) => newV - 1);
        }
        else if(value === 'right' && currentReviewId < data.length){
            setCurrentReviewId((newV) => newV + 1);
        }
    }
    return(
        <div className='reviews-for-about-us-wrapper row no-gutters'>
            <div className='col-2'></div>
            <div className='col-8'>
                <div className='reviews-main-block-background-color'></div>
                <div className='reviews-main-block-border'>
                    <div className='reviews-about-us-button-wrapper1'
                        onClick={() => changeReviewIdClick('left')}>
                        <LeftScrollHebronCommand className='reviews-about-us-svg'/>
                    </div>
                    <div className='reviews-about-us-button-wrapper2'
                        onClick={() => changeReviewIdClick('right')}>
                        <RightScrollHebronCommand className='reviews-about-us-svg'/>
                    </div>
                    <div className='quote-and-name-about-us'>
                        <div>{data[currentReviewId - 1]['quote']}</div>
                        <span>{data[currentReviewId - 1]['name']}</span>
                        <div className='quote-and-name-about-us-img-wrapper'>
                            <img src={data[currentReviewId - 1]['img']} alt=''></img>
                        </div>
                    </div>
                </div>
                <div className='reviews-main-comas1'>
                    <img src={ComaImage} alt=''/>
                </div>
                <div className='reviews-main-comas2'>
                    <img src={ComaImage} alt=''/>
                </div>
            </div>
            <div className='col-2'></div>
        </div>
    );
}

export default ReviewsForAboutUs;