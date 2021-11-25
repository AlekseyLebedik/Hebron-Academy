import React, {useState} from 'react';

import './hebron-command-in-about-us-page.css';

import InstLogo from './inst.png';
import {ReactComponent as LeftScrollHebronCommand} from './left-scroll-hebron-command-image.svg';
import {ReactComponent as RightScrollHebronCommand} from './right-scroll-hebron-command-image.svg';

const HebronCommandInAboutUsPage = ({data}) =>{

    const [currentIndex, setIndex] = useState(0);

    const canChangeCurrentIndex = (newIndex) =>{
        if(newIndex + 2 >= data.length || newIndex < 0){
            return false;
        }
        return true;
    }
    const scrollCommandMembers = (value) => {
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
    const getpersonsForRender = () =>{
        if (currentIndex + 2 < data.length && currentIndex >= 0){
            return [data[currentIndex], data[currentIndex + 1], data[currentIndex + 2]];
        }
        else {
            setIndex(0);
            return [data[0], data[1], data[2]];
        }
    }
    const CommandRender = () =>{
        const dataForRender = getpersonsForRender();
        return dataForRender.map((item, index) =>{
            const linkWrapper = item.id % 2 === 1 ? 'wrapper-for-link-hebron-command' : 'green-wrapper-for-link-hebron-command';
            const borderColorForMainInfo = item.id % 2 === 1 ? 'hebron-command-item-main-info' : 'green-hebron-command-item-main-info';
            return(
                <li className='hebron-command-item' key={item.id}>
                    <img src={item.img} alt=''/>
                    <div className='hebron-command-item-info-empty'></div>
                    <div className='hebron-command-item-info'>
                        <div className={borderColorForMainInfo}>
                            <span className='hebron-command-item-main-info-name'>
                                {item.name}
                            </span>
                            <span className='hebron-command-item-main-info-position'>
                                {item.position}
                            </span>
                        </div>
                        <div className='hebron-command-item-links'>
                            <div className={linkWrapper}>
                                <img src={InstLogo} alt=''/>
                            </div>
                            <div className={linkWrapper}>
                                <span>f</span>
                            </div>
                        </div>
                    </div>
                </li>
            );
        });
    }
    return (
        <div className='row no-gutters hebron-command-wrapper'>
            <div className='col-2'></div>
            <div className='col-8 hebron-command-info-wrapper'>
                <ul className='hebron-command-ul list-unstyled'>
                    {CommandRender()}
                </ul>
                <div className='hebron-command-controll-buttons-wrapper'>
                    <div className='hebron-command-controll-button'
                        onClick={() => scrollCommandMembers('right')}>
                        <RightScrollHebronCommand className='scroll-hebron-command'/>
                    </div>
                    <div className='hebron-command-controll-button'
                        onClick={() => scrollCommandMembers('left')}>
                        <LeftScrollHebronCommand className='scroll-hebron-command'/>
                    </div>
                </div>
            </div>
            <div className='col-2'></div>
        </div>
    );
}
export default HebronCommandInAboutUsPage;