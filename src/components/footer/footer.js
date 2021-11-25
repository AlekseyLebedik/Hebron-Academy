import React from 'react';

import './footer.css';
import Logo from './Hebron-Logo.png';
import Visa from './visa.png';
import MasterCard from './master-card.png';

const Footer = () =>{
    return(
        <div className='footer-wrapper'>
            <div className='main-content-on-footer row no-gutters'>
                <div className='col-2'></div>
                <div className='col-2 logo-footer'>
                    <img src={Logo} alt='logo-footer'></img>
                </div>
                <div className='col-2 contact-info-wrapper-footer'>
                    <div className='contact-info-footer'>
                        <span className='font-weight-light-footer light-text-footer'>Пишіть нам на пошту або телефонуйте:</span>
                        <span className='font-weight-normal-footer'>itacademyfororphans@gmail.com</span>
                        <span className='font-weight-normal-footer'>+380975623220</span>
                    </div>
                </div>
                <div className='col-1'></div>
                <div className='col-3 credentials-footer'>
                    <div className='text-footer'>
                        <span className='first-block-footer'>Оплата картою:</span>
                        <span>VISA / Mastercard</span>
                    </div>
                    <div className='images-block-footer'>
                        <img src={Visa} alt='visa'></img>
                        <img src={MasterCard} alt='masterCard'></img>
                    </div>
                    <div>
                        <button className='support-button-footer'>Підтримати</button>
                    </div>
                </div>
                <div className='col-2'></div>

            </div>
            <div className='copyright-footer row no-gutters'>
                <span>© 2021 Hebron. All Rights Reserved</span>
            </div>
        </div>
    );
}

export default Footer;