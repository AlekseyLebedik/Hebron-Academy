import React from 'react';

import './hebron-needs-join-page-second-button.css';
const data = [
    {id: 1, text: 'Досвідчених front-end та back-end менторів.'},
    {id: 2, text: 'Спікерів на теми пов`язані з ІТ та особистим розвитком.'},
    {id: 3, text: 'Менторів, які допоможуть нашим студентам зростати професійно та духовно.'},
    {id: 4, text: 'Фотографів та відеографів.'},
    {id: 5, text: 'Фандрейзерів.'},
    {id: 6, text: 'Волонтерів для господарських робіт.'},
    {id: 7, text: 'Волонтерів в IT таборі та інших заходах Хеврону.'},
    {id: 8, text: 'Викладачів для проведення занять.'}
]
const HebronNeedsJoinPageSecondButton = () =>{
    const RenderItems = () =>{
        return data.map((item) =>{
            return(
                <li key={item.id}>
                    <span className='hebron-needs-join-page-second-button-ul-indent'>-</span>
                    <span>{item.text}</span>
                </li>
            )
        })
    }
    return (
        <div className='hebron-needs-join-page-second-button-wrapper'>
            <span className='title'>Менторство та волонтерство</span>
            <ul className='list-unstyled'>
                {RenderItems()}
            </ul>
            <button>Написати</button>
        </div>
    )
}
export default HebronNeedsJoinPageSecondButton;