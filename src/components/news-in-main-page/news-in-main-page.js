import React, {useState} from 'react';

import './news-in-main-page.css';

import ScrollLeftImage from './leftScrollButton.png';
import ScrollRightImage from './rightScrollButton.png';

const NewsInMainPage = ({data}) =>{
    const [currentIndex, setIndex] = useState(0);

    const canChangeCurrentIndex = (newIndex) =>{
        if(newIndex + 2 >= data.length || newIndex < 0){
            return false;
        }
        return true;
    }
    const scrollNews = (value) => {
        if(value === 'right'){
            let newIndex = currentIndex + 1;
            if(canChangeCurrentIndex(newIndex)){
                setIndex(newIndex);
            }
        }
        else if(value === 'left'){
            let newIndex = currentIndex - 1;
            if(canChangeCurrentIndex(newIndex)){
                setIndex(newIndex);
            }
        }
    }
    const getNewsForRender = () =>{
        if (currentIndex + 2 < data.length && currentIndex >= 0){
            return [data[currentIndex], data[currentIndex + 1], data[currentIndex + 2]];
        }
        else {
            setIndex(0);
            return [data[0], data[1], data[2]];
        }
    }
    const newsRender = () =>{
        const dataForRender = getNewsForRender();
        return dataForRender.map((item) => {
            return(
                <li key={item.id} className='news-item-in-main-page-wrapper'>
                    <div className='news-item-in-main-page'>
                        <img src={item.img} alt=''></img>
                        <span className='red-title'>{item.red_title}</span>
                        <span className='title'>{item.title}</span>
                        <small>{item.text}</small>
                        <div className='read-more-in-main-page-wrapper'>
                            <span>Read more</span>
                            <div className='short-red-line-in-main-page-news'></div>
                        </div>
                    </div>
                </li>
            );
        })
    }
    return (
        <div className='news-in-main-page row no-gutters'>
            <div className='col-1'></div>
            <div className='col-10'>
                <div className='news-in-main-page-titles-wrapper'>
                    <span className='red-title'>НОВИНИ</span>
                    <span className='news-in-main-page-title2'>Наш блог</span>
                </div>
                <div className='news-in-main-page-content-wrapper'>
                    <div 
                        className='news-in-main-page-content-left-button'
                        onClick={() => scrollNews('left')}>

                            <img 

                            src={ScrollLeftImage} alt=''/>

                    </div>
                    <ul className='news-in-main-page-wrapper list-unstyled'>
                        {newsRender()}
                    </ul>
                    <div 
                        className='news-in-main-page-content-right-button'
                        onClick={() => scrollNews('right')}>
                        <img src={ScrollRightImage} alt=''/>
                    </div>
                </div>
            </div>

            <div className='col-1'></div>

        </div>
    );
}

export default NewsInMainPage;