import React, {useState} from 'react';

import './companies-in-main-page.css';

import ScrollLeftImage from './leftScrollButton.png';
import ScrollRightImage from './rightScrollButton.png';

const CompaniesInMainPage = ({data}) =>{
    const [currentIndex, setIndex] = useState(0);

    const canChangeCurrentIndex = (newIndex) =>{
        if(newIndex + 4 >= data.length || newIndex < 0){
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
        if (currentIndex + 4 < data.length && currentIndex >= 0){
            return [data[currentIndex], 
                    data[currentIndex + 1], 
                    data[currentIndex + 2], 
                    data[currentIndex + 3], 
                    data[currentIndex + 4]];
        }
        else {
            setIndex(0);
            return [data[0], data[1], data[2], data[3], data[4]];
        }
    }
    const newsRender = () =>{
        const dataForRender = getNewsForRender();
        return dataForRender.map((item) => {
            return(
                <li key={item.id} className='companies-item-in-main-page-wrapper'>
                    <div className='companies-item-in-main-page'>
                        <img src={item.img} alt=''></img>
                    </div>
                </li>
            );
        })
    }
    return (
        <div className='companies-in-main-page row no-gutters'>
            <div className='col-1'></div>
            <div className='col-10'>
                <div className='news-in-main-page-titles-wrapper'>
                    <span className='red-title'>ОРГАНІЗАЦІЇ</span>
                    <span className='news-in-main-page-title2'>Наші партнери</span>
                </div>
                <div className='news-in-main-page-content-wrapper'>
                    <div 
                        className='news-in-main-page-content-left-button'
                        onClick={() => scrollNews('left')}>

                            <img 

                            src={ScrollLeftImage} alt=''/>

                    </div>
                    <ul className='companies-in-main-page-wrapper list-unstyled'>
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

export default CompaniesInMainPage;