import React from 'react';

import './pop-up-form-submit.css';

const PopUpFormSubmit = (props) => {
    return(
        <div className='popUp-wrapper'>
            <div className='popUp-inner'>
                <div className='close-submit-popup'>
                    <span onClick={props.onClick}>X</span>
                </div>
                <div className='submit-popup-menu'>
                    <br />
                    <br />
                    <span className='red-title'>ДЯКУЄМО!</span>
                    <div className='pop-up-title'>
                        <span>
                            Ми розглянемо вашу заявку та 
                        </span>
                        <span>зв’яжемось з вами.</span>
                        </div>
                    <br />
                    <div 
                    onClick={props.onClick}
                    className='Ok-pop-up-button'>
                        <span>ОК</span></div>
                    <br />
                    <br />
                </div>
            </div>
        </div>
    );
}
export default PopUpFormSubmit;