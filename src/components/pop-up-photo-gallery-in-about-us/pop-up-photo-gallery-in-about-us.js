import React, { useState } from 'react';

import {ReactComponent as LeftScrollHebronCommand} from './left-scroll-hebron-command-image.svg';
import {ReactComponent as RightScrollHebronCommand} from './right-scroll-hebron-command-image.svg';
import './pop-up-photo-gallery-in-about-us.css';

const PopUpPhotoGalleryInAboutUs = ({images, onClick, itemClickedId}) => {
    const [currentId, setCurrentId] = useState(itemClickedId);
    const nextImage = (nextImageWay) => {
        if(nextImageWay === 'right' && currentId < images.length){
            console.log('pop-up-gallery: ', currentId);
            setCurrentId((value) => value + 1);
        }
        else if(nextImageWay === 'left' && currentId !== 1){
            console.log('pop-up-gallery: ', currentId);
            setCurrentId((value) => value - 1);
        }
    }
    return (
        <div className='popUp-wrapper'>
            <div className='popUp-inner'>
                <div className='close-submit-popup'>
                    <span onClick={onClick}>X</span>
                </div>
                <div className='submit-popup-menu'>
                    <img src={images[currentId - 1]['img']} alt=''/>
                </div>
                <div className='pop-up-gallery-left photo-gallary-button-pop-up'
                    onClick={() => nextImage('left')}>
                    <LeftScrollHebronCommand className='pop-up-gallery-svg'/>
                </div>
                <div className='pop-up-gallery-right photo-gallary-button-pop-up'
                    onClick={() => nextImage('right')}>
                    <RightScrollHebronCommand className='pop-up-gallery-svg'/>
                </div>
            </div>
        </div>
    )
}

export default PopUpPhotoGalleryInAboutUs;