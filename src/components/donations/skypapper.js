import React, { useState } from 'react';
import './skypapper.css';
import Sky from './sky.png';
import {ReactComponent as CompanyLogo} from './SkyscraperLogo.svg';
import {ReactComponent as VoluntaryLogo} from './VolonterLogo.svg';


export const Skypapper = () =>{
    const [content, setContent] = useState(null);
    let TextLogoA = () => {
        return(
                <div className='text-logo-a'>
                <p>Какой-то текст</p>
            </div>
        )
    }
    
    let TextLogoB = () =>{
        return(
       <div className='text-logo-b'>
                <p>Ви  можете запросити студентів Хеврон IT Академії на роботу </p>
    
                <p>Ми розміщуємо інформацію про вашу  жертовність на наших</p>
                <p>ресурсах і допомагаємо вашому  бренду стати</p>
                <p>більш  впізнаваним та привабливим </p>
    
                <p>У вашій компанії зростає рівень соціально-відповідальної</p>
                <p>культури, що стимулює  працівників до продуктивності</p>
                
                <p>Студенти Хеврон ІТ Академії в міру своїх можливостей можуть</p>
                <p>допомагати вам на волонтерській основі</p>
                
                <p>Благодійність збільшить рівень довіри клієнтів до вашої</p>
                <p>компанії!</p>
        </div>)
    }
   
let onClick1 = (parameter) => {
    switch(parameter){
        case 'TextLogoA' : 
            setContent(TextLogoA);
            console.log('TextLogoA clicked');
            break;
        case 'TextLogoB' : 
            setContent(TextLogoB);
            console.log('TextLogoB clicked');
            break;
        default: console.log(TextLogoA)
    };
}
     
    return(
        <div className='skypappers'>
            <img src={Sky} alt=''/>
            <div className='text-c'>
                <h4>ХТО ВИ?</h4>
                <h3>Необхідні потреби Хеврону</h3>
                <div className='text-c-img'>
                    <div className = 'img'>
                        <div className='logo-a' onClick={()=>onClick1('TextLogoA')}>
                            <VoluntaryLogo className='logo-svg'/>
                            <div className='logo-a-p'>
                                <p>01---</p><h4>ВОЛОНТЕР</h4>
                                
                            </div>
                        </div>
                        <div className='logo-b' onClick={()=>onClick1('TextLogoB')}>
                                <CompanyLogo className='logo-svg'/>
                            <div className='logo-b-p'>
                                02---<h4>КОМПАНІЯ</h4>
                            </div>
                        </div>
                    </div>
                    <div className = "donait-text">
                        {content}
                    </div>
            </div>  
        </div>
    </div>
    )
}