import React from 'react';

import './video-block-about-us.css';
import ImageInsteadOfVideo from './image-instead-of-video.png';
const VideoBlock = () =>{
    return (
        <div className='row no-gutters video-block-about-us-wrapper'>
            <div className='col-2'></div>
            <div className='col-8 video-block-about-us-main-info'>
                <div className='video-block-about-us-orange-rectange'></div>
                <img src={ImageInsteadOfVideo} alt=''/>
            </div>
            <div className='col2'></div>
        </div>
    );
}

export default VideoBlock;