import React from 'react';
import './Header.css';

function Header(props) {
    let classImage ;
    props.time%2 === 0? classImage = "img1":
                        classImage = "img2";
    return(
        <div className={`header ${classImage}`}>
            <span className="header__text">ХЕВРОН</span>
            <span className="header__text">100</span>
        </div>
    )

}


export default Header;