import React from 'react';
import './read.css';

export const Read = (props) => {
    const p = props.location.props;
    return(
        <div className='card-container'>
            <div className='news-img-read'>
                <img src={p.img} alt=''/>
            </div>
            <div className='img-info'>
                <h4>{p.h1}</h4>
                <p>{p.p}</p>
            </div>
        </div>
    )
    
}