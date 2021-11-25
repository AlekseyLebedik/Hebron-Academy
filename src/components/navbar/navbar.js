import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import LogoInHeader from '../logo-in-header/logo-in-header';
import './navbar.css';

const pagesInfo = [
    {page_name:'Про НАС', link_to: '/about-us/', id: 1},
    {page_name:'НАВЧАННЯ', link_to: '/education/', id:2},
    {page_name:'НОВИНИ', link_to: '/news/', id: 3},
    {page_name:'ХЕВРОН 100', link_to: '/hebron100/', id: 4},
    {page_name:'ПРИЄДНАТИСЬ', link_to: '/join/', id: 5},
    {page_name:'Види пожертв', link_to: '/donations/', id: 6},
]

const Navbar = () =>{
    const renderPages = () =>{
        return pagesInfo.map((item) => {
            const liStyle = selectedPage === item.id ? 'li-selected-navbar': 'li-not-selected-navbar';
            return(
                <Link to={item.link_to} className='unstyled-link-navbar'>
                <li key={item.id} className={liStyle}
                onClick={() => setSelectedPage(item.id)}
                >
                    {item.page_name}
                </li>
                </Link>
            )
        })
    }
    const getStyleForLanguage = (value) =>{
        if(value === 'eng' && currentLanguage === 'eng'){
            return 'selected-language-navbar'
        }
        else if(value === 'ukr' && currentLanguage === 'ukr'){
            return 'selected-language-navbar';
        }
        else{
            return 'not-selected-language-navbar';
        }
    }
    const [selectedPage, setSelectedPage] = useState(0);
    const [currentLanguage, setCurrentLanguage] = useState('ukr');
    return (
        <div className='row no-gutters navbar-wrapper'>
            <div className='col-1'></div>
            <div className='col-2' 
            onClick={() => setSelectedPage(0)}
            >
                <Link to='/' className='logo-in-navbar-link-wrapper'>
                    <div className='logo-in-navbar-wrapper'>
                        <LogoInHeader/>
                    </div>
                </Link>
            </div>
            <div className='col-5'>
                <ul className='ul-navbar list-unstyled'>
                    {renderPages()}
                </ul>
            </div>
            <div className='col-3 buttons-on-navbar-wrapper'>
                <button className='successful-stories-navbar-button'>
                    Успішні історії
                </button>
                <div className='language-switcher-wrapper'>

                    <span className={getStyleForLanguage('ukr')}
                    onClick={() => setCurrentLanguage('ukr')}
                    >
                        ukr
                    </span>
                    <span className={getStyleForLanguage('eng')}
                    onClick={() => setCurrentLanguage('eng')}>
                        eng
                    </span>
                </div>
                <button className='support-button-navbar'>
                    ПІДТРИМАТИ
                </button>
            </div>
            <div className='col-1'></div>
        </div>
    )
}

export default Navbar;