import React from 'react';
import './news.css';
import New from './img/new.png';
import NewsArr from './newsArr';
import { Arrinfo } from './ArrInfo';
import { Link } from 'react-router-dom';
import { Maps } from '../map/map';

const News = () => {
    return(
        <div className='new col-12'>
            <div className='new-img'>
                <img src={New} alt=''/>
            </div>
            <div className='lin'>
                <Link path='#'><button className='btn'>Усі статті</button></Link>
                <Link path='#'><button className='btn'>Новинки</button></Link>
                <Link path='#'><button className='btn'>Історії успіху</button></Link>
                <Link path='#'><button className='btn'>Блог</button></Link>
            </div>
            <div className='news-info'>
                {NewsArr.map( i  =>{
                return(   
                <Arrinfo img={i.img} h1={i.h1} p={i.p} id={i.id}/>
                )})}
            </div>
            <Maps/>
        </div>
    )
}

export default News;
