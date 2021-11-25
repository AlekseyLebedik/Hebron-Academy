import React from 'react';
import './CardAbout.css';



export default function CardAbout(props) {
    return(
        <div className="About-card">
            <img src={props.img} style={props.styleImg} className="card__img" alt=''/>
            <div className="card__text" style={props.styleText}>
                  <span className="card__text-heading">Hebron 100</span>
                  <span className="card__text-title">{props.title}</span>
                    <p className="card__text-description">{props.description}</p>
            </div>
        </div>
    )
}