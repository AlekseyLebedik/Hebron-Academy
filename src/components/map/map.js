import React from 'react';
import Maping from './map.png';
import './map.css';
import Placeholder from './placeholder.png'
import Facebook from './facebook.png';
import In from './in.png';
import Twitter from './twiter.png';
import Youtube from './youtube.png';


export const Maps = () => {
    return(
        <div className='map col-12'>   
            <img src={Maping} alt=''/>
                <div className='place'>
                    <img src={Placeholder} alt=''/>
                    <h2>HEBRON</h2>
                </div>

                <div className='map-card'>
                    <div class="card">
                        <div class="card-body">
                            <h4>КОНТАКТИ</h4>
                            <h3 >Як нас знайти?</h3>
                            <div className='text-card'>
                                <p>Адреса:  79491, Львів-Брюховичі, вул. Бірківська, 11</p>
                                <p>E-mail:  itacademyfororphans@gmail.com</p>
                                <p>Skype:  ITacademyfororphans</p>
                                <p>Телефон:  +380 50 750 2555 - Орест Яцкуляк</p>
                            </div>
                            <div className='logo-network'>
                                <div className='facebook'>
                                    <img src={Facebook} alt=''/>
                                    <p>Facebook</p>
                                </div>
                                <div className='twitter'>
                                    <img src={Twitter} alt=''/>
                                    <p>Twitter</p>
                                </div>
                                <div className='in'>
                                    <img src={In} alt=''/>
                                    <p>In</p>
                                </div>
                                <div className='youtube'>
                                    <img src={Youtube} alt=''/>
                                    <p>Youtube</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}