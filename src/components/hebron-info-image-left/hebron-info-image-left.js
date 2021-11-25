import React from 'react';

import './hebron-info-image-left.css';

const HebronInfoImageLeft = (props) =>{
  const {img, title, text, redTitle} = props;
  return(
      <div className='info-wrapper row no-gutters'>
        <div className='left-block col-6'>
              <img src={img} alt=''></img>
          </div>
          <div className='right-block col-6'>
            <div className='half-visible-title'>
                <span>{title}</span>
            </div>
            <div className='main-info-wrapper'>
                <div className='main-info'>
                    <div className='top-red-title'>{redTitle}</div>
                    <div className='regular-title'>{title}</div>
                    <div className='text-field'>{text}</div>
                    <button className='more-info-btn'>Детальніше</button>
                </div>
            </div>

          </div>

      </div>
  );
}

export default HebronInfoImageLeft;