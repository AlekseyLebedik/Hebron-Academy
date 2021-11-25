import React from 'react';
import iPhone from './iphone.png';
import './contacts.css';

const Contacts = () =>{
    return(
        <div className='contacts row no-gutters'>
            <div className='data col-5'>
                <h4>ПРИЄДНУЙТЕСЬ</h4>
                <h3>Залиште свої контакти і ми</h3>
                <h3>передзвонимо вам!</h3>
                <label for="validationDefault01" className="form-label">ПІБ:</label>
                <input className='form-control'/>
                <label for="validationDefault02" className="form-label">Номер телефону:</label>
                <input className='form-control'/>
                <button className='btn-send'>Надіслати</button>
            </div>
            <img src={iPhone} alt='' className='col-7'/>
        </div>
    )
}
export default Contacts;