import React from 'react';
import { Link } from 'react-router-dom';
import './ArrInfo.css';
import Facebook from './img/Facebook.png';
import Twiter from './img/twiter.png';
import In from './img/in.png';

export const Arrinfo = (props) => {
    return(
        <div className='card-container'>
            <div className='news-img'>
                <img src={props.img} alt=''/>
            </div>
            <div className='img-info'>
                <h4>{props.h1}</h4>
                <p>{props.p}</p>
            </div>
            <div className='block-link'>
                <div className='share'>
                    <Link to={{ pathname:`/Read/${props.id}` , props: props}}><button className='a-btn'>Read more -</button></Link>
                    <Link to={{ pathname:`/share/${props.id}` , props: props}}><button className='b-btn'>Share</button></Link>
                        <img src={Facebook} alt=''/>
                        <img src={Twiter} alt=''/>
                        <img src={In} alt=''/>   
                </div>
            </div>
        </div>
    )
}