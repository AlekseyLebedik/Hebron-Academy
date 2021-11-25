import React from 'react';
import './graduate.css';
import { Link } from 'react-router-dom';

export const Graduate = (props) => {

    return(
    <div className='graduates'>
        <img src={props.img} className='card-img-top' alt=''/>
        <div className='block-fullname'>
            <div className='card'>
                <h4>{props.fullname}</h4>
            </div>
            <Link to={{ pathname:`/history/${props.id}` , props: props}}><button className='btn'>Читати історію</button></Link>
        </div>
    </div>
    )
}