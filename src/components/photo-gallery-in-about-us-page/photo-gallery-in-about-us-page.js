import React, { useState } from 'react';

import './photo-gallery-in-about-us-page.css';
import {ReactComponent as LeftScrollHebronCommand} from './left-scroll-hebron-command-image.svg';
import {ReactComponent as RightScrollHebronCommand} from './right-scroll-hebron-command-image.svg';

const PhotoGalleryInAboutPage = ({data, itemImageClicked}) => {
    const[currentIndex, setCurrentIndex] = useState(0);

    const galleryButtonClick = (scrollSide) =>{
        if(scrollSide === 'left'){
            setCurrentIndex((currentIndex) => {
                return currentIndex - 6;
            })
        }
        else if(scrollSide === 'right'){
            setCurrentIndex((currentIndex) =>{
                return currentIndex + 6;
            })
        }
    }
    const getDataForRender = () =>{
        if (currentIndex < 0){
            setCurrentIndex(0);
            return data.slice(currentIndex, 6);
        }
        if (data.slice(currentIndex).length >= 6){
            return data.slice(currentIndex, currentIndex + 6);
        }
        else if(data.slice(currentIndex).length < 6){
            setCurrentIndex(data.length - 6);
            return data.slice(currentIndex, 6);
        }
    }
    const renderPhotos = (parameter) =>{
        const dataForRender = getDataForRender();
        const tempData = parameter === 'first' ? dataForRender.slice(0, 3): dataForRender.slice(3);
        return tempData.map((item, index) =>{
            let classNameLi = ((index === 2 && parameter === 'first') || (index === 0 && parameter === 'second')) ? 'photo-gallery-large': 'photo-gallery-small';
            const isLarge = classNameLi === 'photo-gallery-large' ? true: false;
            let isFirstLarge = isLarge && parameter === 'first' ? 'is-first-large' : '';
            let isSecondSmall = !isLarge && parameter === 'second' ? 'is-second-small' : '';
            classNameLi += ' ' + isFirstLarge + isSecondSmall;
            return (
                <li 
                    key={item.id} 
                    className={classNameLi}
                    onClick={() => itemImageClicked(item.id)}>
                    <img src={item.img} alt= ''/>
                </li>
            )
        })
    }
    return (
        <div className='photo-gallery-wrapper row no-gutters'>
            <div className='col-2'></div>
            <div className='col-8 photo-gallery-content-wrapper'>
                <div className='photo-gallery-title-and-buttons-wrapper'>
                    <span>Фотогалерея</span>
                    <div className='photo-gallary-buttons-wrapper'>
                        <div className='photo-gallary-button'
                            onClick={() => galleryButtonClick('left')}>
                            <LeftScrollHebronCommand className='photo-gallery-button-svg'/>
                        </div>
                        <div className='photo-gallary-button'
                            onClick={() => galleryButtonClick('right')}>
                            <RightScrollHebronCommand className='photo-gallery-button-svg'/>
                        </div>
                    </div>
                </div>
                <div className='photo-gallary-orange-triangle'></div>
                <div className='photo-gallery-ul-wrapper'>
                    <ul className='photo-gallery-photos list-unstyled'>
                        {renderPhotos('first')}
                    </ul>
                    <ul className='photo-gallery-photos list-unstyled'>
                        {renderPhotos('second')}
                    </ul>
                </div>

            </div>
            <div className='col-2'></div>
        </div>
    );
}

export default PhotoGalleryInAboutPage;