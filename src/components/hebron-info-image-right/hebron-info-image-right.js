import React from 'react';

import './hebron-info-image-right.css';

const HebronInfoImageRight = (props) =>{
  const {img, title, text, redTitle} = props;
  return(
      <div className='info-wrapper row no-gutters'>
          <div className='left-block col-6'>
            <div className='half-visible-title-right'>
                <span>{title}</span>
            </div>
            <div className='main-info-wrapper-right'>
                <div className='main-info-right'>
                    <div className='top-red-title'>{redTitle}</div>
                    <div className='regular-title'>{title}</div>
                    <div className='text-field'>{text}</div>
                    <button className='more-info-btn'>Детальніше</button>
                </div>
            </div>

          </div>
          <div className='right-block col-6'>
              <img src={img} alt=''></img>
          </div>
      </div>
  );
}

export default HebronInfoImageRight;