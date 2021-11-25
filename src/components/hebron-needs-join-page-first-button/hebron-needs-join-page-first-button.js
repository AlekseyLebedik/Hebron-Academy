import React from 'react';

import './hebron-needs-join-page-first-button.css';
import VisaImage from './visa.png';
import MasterCardImage from './masterCard.png';

const HebronNeedsJoinPageFirstButton = () =>{

    return(
        <form className='credentials-input-wrapper'
        >
            <span className='semi-black-text-in-credentials'>Мій внесок:</span>
            <select
            name='amountOfCharityTransaction'
            className='select-how-many-times-wrapper'>
                <option value='100'>100 грн</option>
                <option value='200'>200 грн</option>
                <option value='500'>500 грн</option>
            </select>
            <div className='semi-black-text-in-credentials'>
                <span className='orange-star'>*</span>
                <span className='destination-text-in-credentials'>Призначення:</span>
            </div>
            <input name='destination' type='text'></input>
            <div className='credentials-regular-transactions-block'>
                <div className='credentials-regular-transaction-wrapper'>
                    <span className='semi-black-text-in-credentials'>Регулярне списання</span>
                    <input type='checkbox' name='isRegular'
                    className='is-regular-transaction-true-false'></input>
                </div>
                <div className='how-many-times-repeat-wrapper'>
                    <span className='semi-black-text-in-credentials how-many-times-repeat'>
                    Спосіб повторення:
                    </span>
                    <select name='frequensy'
                    className='select-how-many-times-wrapper'>
                        <option value='1'>Щомісяця</option>
                        <option value='1'>Щодня</option>
                        <option value='1'>Щороку</option>
                    </select>
                </div>
            </div>
            <span className='semi-black-text-in-credentials'>
            ПІП:
            </span>
            <input name='pib' type='text'>

            </input>
            <span className='semi-black-text-in-credentials'>
            Email:
            </span>
            <input name='email' type='email'></input>
            <div className='credentials-visa-master-card-submit-wrapper'>
                <div className='credentials-visa-master-card-img'>
                    <img src={VisaImage} alt='' />
                </div>
                <div className='credentials-visa-master-card-img'>
                    <img src={MasterCardImage} alt=''/>
                </div>
                <div className='credentials-visa-master-card-submit-button-wrapper'>
                <input 
                    className='credentials-visa-master-card-submit-button'
                    type="submit" 
                    value="Підтримати"/>
                    </div>

            </div>
            <div className='credentials-text-block-wrapper'>
                <span className='credentials-text-block-title'>Реквізити</span>
                <div className='horizontal-line-in-credentials'></div>
                <span>IBAN: <b>UA973253210000026002053717183</b> в ЗГРУ ПАТ КБ «ПриватБанку» м.Львів</span>
                <div className='horizontal-line-in-credentials'></div>
                <div className='credentials-contact-info-wrapper'>
                    <span>Адреса:  <b>79491, Львів-Брюховичі, вул. Бірківська, 11</b></span>
                    <span>E-mail:  <b>itacademyfororphans@gmail.com</b></span>
                    <span>Skype:  <b>ITacademyfororphans</b></span>

                </div>
                <span>
                    Телефон:  <b>+38 050 750 2555 - Орест Яцкуляк, заступник директора по навчально-виховній роботі</b>
                </span>
            </div>
        </form>
    )
}

export default HebronNeedsJoinPageFirstButton;