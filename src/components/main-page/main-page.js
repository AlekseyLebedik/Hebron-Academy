import React, {useState} from 'react';
import axios from "axios";

import './main-page.css';
import {ReactComponent as MissionLogo} from './Mission.svg';
import {ReactComponent as VisionLogo} from './vision.svg';
import {ReactComponent as ContactsLogo} from './contacts.svg';
import {ReactComponent as CredentialsLogo} from './credentials.svg';
//import {ReactComponent as UkraineHebronMap} from './Habron design (1).svg';

import HebronInfoImageRight from '../hebron-info-image-right';
import HebronInfoImageLeft from '../hebron-info-image-left';
import MainPageJoinHebron from '../main-page-join-hebron';
import NewsInMainPage from '../news-in-main-page';
import CompaniesInMainPage from '../companies-in-main-page';
import PopUpFormSubmit from '../pop-up-form-submit';

import HebronHeaderImage from './Hebron-Header.png';
import OurGraduatesImage from './OurGraduates.png';
import EducationImage from './education.png';
import PosibilitiesImage from './Posibilities.png';
import CommandImage from './Command.png';
import News1Image from './News1.png';
import News2Image from './News2.png';
import News3Image from './News3.png';
import HebronUkrMap from './Habron design (2).png';
import Comp1Image from './Comp1.png';
import Comp2Image from './Comp2.png';
import Comp3Image from './Comp3.png';
import Comp4Image from './Comp4.png';
import Comp5Image from './Comp5.png';


//Data for the news
const News1 = {id: 1, img: News1Image, red_title: 'Newsletter', title: 'Join a charity project', text: 'Friends, 16 new students from different cities and villages of Ukraine have already come to study at Hebron IT Academy. All of them are from the social crisis category...'};
const News2 = {id: 2, img: News2Image, red_title: "Success Story",title: 'Vlad Ostafii`s Success Story', text:'Hebron provided me with many opportunities, such as...'};
const News3 = {id: 3, img: News3Image, red_title: 'Blog', title: 'How Can I Pray for Orphans?', text:'I bow my knees before the Father, From whom every family in heaven and on earth is named...'};
const News4 = {id: 4, img: News2Image, red_title: 'Test', title: 'Test', text: 'Test'};
let AllNewsForMainPage = [News1, News2, News3, News4];

const Comp1 = {id:1, img: Comp1Image};
const Comp2 = {id:2, img: Comp2Image};
const Comp3 = {id:3, img: Comp3Image};
const Comp4 = {id:4, img: Comp4Image};
const Comp5 = {id:5, img: Comp4Image};
const Comp6 = {id:6, img: Comp5Image};
let AllCompaniesForMainPage1 = [Comp1, Comp2, Comp3, Comp4, Comp5, Comp6];


async function REST_request(myVeriable){
        let request = axios.get('http://127.0.0.1:8000/main-page-user/?format=json')
        myVeriable = await request
}


//Text for hebron-info-image-right and hebron-info-image-left
const OurGraduatesText = <div><span>В перспективі стають не лише кваліфікованими спеціалістами в галузі IT, а й</span> <b>СВІДОМИМИ</b> <span>та</span> <b>АКТИВНИМИ</b> <span>громадянами сучасного суспільства</span></div>;
const EducationText = <div><span> 5 років тому ми задумались, яким чином можна допомогти кризовій молоді, в якої є потенціал, але немає можливості успішно самореалізуватись у суспільстві, через брак коштів та моральної підтримки. І зрозуміли, що найкраща допомога - це </span><b>ОСВІТА</b></div>;
const PosibilitiesText = <div><span>- це молоді люди з числа сиріт та випускників інтернатів, внутрішньо переміщені особи, діти учасників воїнів АТО,  а також та молодь, яка опинилася у складних життєвих обставинах. Це хлопці та дівчата, які можуть та хочуть працювати, розвиватися та приносити користь суспільству. Все, що їм потрібно, це  дати</span> <b>МОЖЛИВІСТЬ</b></div>;
const CommandText = <div>Хеврон ІТ Академія - це спільнота  людей,  яким важлива доля соціально незахищеної молоді в Україні. Ми об’єднуємо довкола себе меценатів, жертводавців, волонтерів, менторів та просто небайдужих людей! </div>

const MainPage = () =>{
    const [isPopUp, setPopUpValue] = useState(false);
    const catchClickSubmit = () => {
        setPopUpValue((value) => !value);
    }
    let popUp = isPopUp ? <PopUpFormSubmit onClick={catchClickSubmit}/> : null;

    
    return (
        <div className = 'main-page-wrapper'>

            <div className='first-block-wrapper row no-gutters'>
                <div className='col-2'></div>
                <div className='col-10 second-col'>
                    <img src={HebronHeaderImage} alt='' className='hebron-header-image'></img>
                </div>
                <div className='col-2 second-block'>                    
                    <div className='orange-rectangle'>
                    </div>
                    <div className='change-life-together-text-div'>
                        <span>ЗМІНЮЄМО</span>
                        <span>ЖИТТЯ</span>
                        <span>РАЗОМ</span>

                    </div>
                </div>
                <div className='col-10 third-block'>
                    <div className='links'>
                        
                        <div className='link'>
                            <div className='link-square'></div>
                            <div>LinkedIn</div>
                        </div>
                        <div className='link'>
                            <div className='link-square'></div>
                            <div>Instagram</div>
                        </div>
                        <div className='link'>
                            <div className='link-square'></div>
                            <div>Facebook</div>
                        </div>
                        <div className='link'>
                            <div className='link-square'></div>
                            <div>Youtube</div>
                        </div>

                    </div>
                    <div className='some-text'>
                        <span>Український центр</span>
                        <span>IT технологій</span>
                        <span>для соціально</span>
                        <span>незахищеної молоді</span>
                    </div>
                    <div className='some-button'>
                        <button className='button-text'>
                            <span>Отримай </span>
                            <span>Взамін від</span>
                            <span><strong>Хеврону</strong> </span>
                        </button>
                    </div>
                </div>
            </div>
            <div className='empty-block-1 row no-gutters'>
                <div className='col-12'></div>
            </div>
            <div className='second-block-wrapper row no-gutters'>
                <div className='col-1'></div>
                <div className='col-10 main-header-block-wrapper'>
                    <div className='main-header-block'>
                        <div className='number-and-title'>
                            <div className='header-number-wrapper'>
                                <div className='number'>01</div>
                                <div className='header-rectangle'></div>
                            </div>
                            <div className='header-title'>МІСІЯ</div>
                        </div>
                            
                        <div className='header-logo'>
                            <MissionLogo className='header-logo-svg'/>

                        </div>
                        <div className='header-text'>788888588</div>
                    </div>


                    <div className='main-header-block'>
                        <div className='number-and-title'>
                            <div className='header-number-wrapper'>
                                <div className='number'>02</div>
                                <div className='header-rectangle'></div>
                            </div>
                            <div className='header-title'>БАЧЕННЯ</div>
                        </div>
                            
                        <div className='header-logo'>
                            <VisionLogo className='header-logo-svg'/>

                        </div>
                        <div className='header-text'>Бути центром інноваційної освіти для сиріт та молоді з групи ризику, побудованої на християнських принципах.</div>
                    </div>
                    <div className='main-header-block'>
                        <div className='number-and-title'>
                            <div className='header-number-wrapper'>
                                <div className='number'>03</div>
                                <div className='header-rectangle'></div>
                            </div>
                            <div className='header-title'>РЕКВІЗИТИ</div>
                        </div>
                            
                        <div className='header-logo'>
                            <CredentialsLogo className='header-logo-svg'/>

                        </div>
                        <div className='header-text'>788888588</div>
                    </div>
                    <div className='main-header-block'>
                        <div className='number-and-title'>
                            <div className='header-number-wrapper'>
                                <div className='number'>04</div>
                                <div className='header-rectangle'></div>
                            </div>
                            <div className='header-title'>КОНТАКТИ</div>
                        </div>
                            
                        <div className='header-logo'>
                            <ContactsLogo className='header-logo-svg'/>

                        </div>
                        <div className='header-text'>788888588</div>
                    </div>

                </div>
                <div className='col-1'></div>
            </div>
            <HebronInfoImageRight 
                img={EducationImage} 
                title='Початок великої місії' 
                text={EducationText} 
                redTitle='ОСВІТА'/>
            <HebronInfoImageLeft 
                img={PosibilitiesImage}
                redTitle='МОЖЛИВІСТЬ'
                title='Студенти Хеврон IT Академії'
                text={PosibilitiesText}
                />
            <div className='Ukraine-map-wrapper row no-gutters'>
                <div className='col-12 Ukraine-map-middleblock'>
                    <img src={HebronUkrMap} className=' Ukraine-map' alt=''/>
                </div>
                <div className='col-3'></div>
                <div className='col-4 rel-map-main-p'>
                        <br></br>
                        <span className='red-title-on-map'>
                            ПІДТРИМКА
                        </span>
                        <span className='title-on-map'>
                            Ми хочемо зробити більше!
                        </span>
                        <div className='text-on-map'>
                            
                                <span>на сьогоднішній день ми змогли допомогти лише невеликій </span>
                                <span>кількості молодих людей, але нашої допомоги потребує значно</span>
                                <span>більша кількість талановитих хлопців та дівчат по всій Україні і ми</span>
                                <span>можемо це зробити<b> З ВАШОЮ ПІДТРИМКОЮ!</b> </span>
                            
                            
                        </div>
                        <br />
                        <button className='btn-on-map'>
                            Детальніше
                        </button>
                    
                </div>
                <div className='col-5'></div>
            </div>
            <HebronInfoImageRight 
                img={OurGraduatesImage} 
                title='Наші випускники' 
                text={OurGraduatesText} 
                redTitle='МАЙБУТНЄ'/>
            <HebronInfoImageLeft 
                img={CommandImage}
                redTitle='КОМАНДА'
                title='Приєднуйтесь до нас!'
                text={CommandText}
                />
            <MainPageJoinHebron catchClick={catchClickSubmit}
            isPop = {isPopUp}/>
            <NewsInMainPage data={AllNewsForMainPage} />
            <div className='empty-block-1 row no-gutters'>
                <div className='col-12'></div>
            </div>            
            <div className='empty-block-1 row no-gutters'>
                <div className='col-12'></div>
            </div>
            <div className='empty-block-1 row no-gutters'>
                <div className='col-12'></div>
            </div>
            <CompaniesInMainPage data={AllCompaniesForMainPage1} />
            {popUp}
        </div>
        

    );
}
export default MainPage;