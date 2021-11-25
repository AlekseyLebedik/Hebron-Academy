import React from 'react';
import './join.css';
import Joins from './img/join.png';
import Group from './img/group.png';
import Join_us from './img/join_us.png';
import Quote from './img/lapki.png';
import Hands from './img/hands.png';
import People from './img/people.png';
import Item from './img/item.png';
import { Sacrifices } from './sacrifices/sacrifices';
import { Maps } from '../map/map';

const Join = () => {
    return(
        <div className='join'>
            <div className='join-img-a'>
                <div className='group-img'>
                    <div className='orange-block-a'></div>
                        <img src={Group} alt=''/>
                    </div>
                <div className='joins-img'>
                    <div className='join-img-join'>
                        <div className='block-join'></div>
                        <img src={Joins} alt=''/>
                    </div>
                    <div className='join-img-text-a'>
                        <h3>Як приєднатися до</h3>
                        <h4>Хеврон ІТ Академії?</h4>
                        <p>Хеврон ІТ Академія існує завдяки добровільним пожертвам</p>
                        <p>небайдужих людей. Завдяки залученим коштам студенти</p>
                        <p>забезпечені харчуванням, житлом, медичною підтримкою</p>
                        <p>протягом 2-х навчальних років. Також розробляємо навчальні</p>
                        <p>програми, надаємо соціальний супровід, менторську та</p>
                        <p>психологічну підтримку.</p>
                    </div>
                    <div className='join_us-img'>
                        <img src={Join_us} alt=''/>
                    </div>
                </div>
            </div>
            <div className='join-img-b'>
                <div className='join-img-text-b'>
                    <div>
                        <img src={Quote} alt=''/>
                    </div>
                    <h1>Кожен внесок є цінним</h1>
                    <p>Окрім фінансової підтримки, ми шукаємо волонтерів, які</p>
                    <p>зможуть навчати наших студентів та стати для них</p>
                    <p>друзями. Приєднуйтеся до спільноти благодійників</p>
                    <p>Хеврон ІТ Академії та разом з нами впливайте на життя</p>
                    <p>молоді з кризової категорії!</p>
                </div>
                <div className='hands-img'>
                    <div className='orange-block-b'></div>
                    <img src={Hands} alt=''/>
                </div>
            </div>
            <Sacrifices/>
            <div className='join-img-d'>
                <div className='join-text-d'>
                    <h4>ПОТРЕБИ</h4>
                    <h3>На що ми</h3> 
                    <h3>збираємо зараз?</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                    <p>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</p>
                    <p>veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>
                    <p>commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</p>
                    <p>velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <div className='text-btn-a'>
                        <button type="button" className="btn btn-outline-warning btn-lg">ДОПОМОГТИ</button>
                    </div>
                </div>
                <div className='join-img-people'>
                    <img src={People} alt=''/>
                </div>
            </div>
            <div className='join-img-i'>
                <div className='join-img-item'>
                    <img src={Item} alt=''/>
                </div>
                <div className='join-text-i'>
                    <h4>ПОТРЕБИ</h4>
                    <h1>На що ми</h1> 
                    <h1>збираємо зараз?</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                    <p>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</p>
                    <p>veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>
                    <p>commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</p>
                    <p>velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <div className='text-btn-b'>
                        <button type="button" className="btn btn-outline-warning btn-lg">ДОПОМОГТИ</button>
                    </div>
                </div>
            </div>
            <Maps/>
        </div>
    )
}

export default Join;