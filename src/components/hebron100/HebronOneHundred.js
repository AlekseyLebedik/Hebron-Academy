import './HebronOneHundred.css';
import React from 'react';
import Header from './Header/Header';
import card1 from './img/card1.png';
import card2 from './img/card2.png';
import CardAbout from './CardAbout/CardAbout';
import PaymentMenu from './PaymentMenu/PaymentMenu';

let date = new Date();  
let minutes = date.getMinutes();
let time = Math.floor(minutes/10);


class HebronOneHundred extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
          timeInMinuts: time,
          InformationsCard:{
                      lastStyleBorder: {borderBottom: "2px solid #D1D1D1"},
                        FirstCard:{
                          styleImg: {order: -1},
                          styleText: {paddingLeft:'150px'},
                          FirstCardImg: card1,
                          title: 'Ідея',
                          description: `Ми обєднуємо благодійників у спільноту, яка готова працювати для спільної мети — якісної освіти для соціально незахищеної молоді. Благодійники проекту “Хеврон 100” утворюють мережу, у якій можливо досягнути поставлених цілей.`
                        },
                        SecondCard:{
                          styleImg: {order: 1},
                          styleText: {paddingLeft:'150px'},
                          SecondCardImg: card2,
                          title: 'Реалізація',
                          description: 'Благодійники з України та інших країн світу роблять щомісячні внески в тому розмірі, в якому їм зручно. Мінімальна сума внеску 500 грн. Така регулярна підтримка забезпечує розвиток та підтримку благодійної організації Хеврон ІТ Академія.'
                        } 
                    },
          // END state InformationsCard

        }
      }

  render(){
    return (
        <div className="container">
            <Header time = {this.state.timeInMinuts}/>

            {/* Start information-block */}
            <div className="top-information">
                <span className="orange">Хеврон 100</span>
                  <h5 className="title">Інвестуйте в освіту!</h5>
                  <p className="description">Ми віримо, що якісна освіта - це найкраща інвестиція на 
                  сьогоднішній день! Тому розробили програму підтримки&nbsp;<span>“Хеврон 100”</span>. Ми шукаємо &nbsp;<span>100</span> &nbsp;людей, які 
                  готові виділити на розвиток проекту хоча б&nbsp;<span>500</span>&nbsp;грн в місяць . Для когось це дрібниця, а для наших
                  студентів - це шанс на краще життя.Ми зможемо допомогти соціально незахищеній молоді з великим потенціалом заради кращого майбутнього!</p>
            </div>
            {/*  Start card-block-about! */}
            <div className="information-card">
                <CardAbout img = {this.state.InformationsCard.FirstCard.FirstCardImg} 
                            styleImg={this.state.InformationsCard.FirstCard.styleImg}
                            styleText = {this.state.InformationsCard.FirstCard.styleText}
                            title = {this.state.InformationsCard.FirstCard.title}
                            description = {this.state.InformationsCard.FirstCard.description}
                />
                <CardAbout img= {this.state.InformationsCard.SecondCard.SecondCardImg}
                          styleImg = {this.state.InformationsCard.SecondCard.styleImg}
                          styleText = {this.state.InformationsCard.SecondCard.styleText}
                          title = {this.state.InformationsCard.SecondCard.title} 
                          description = {this.state.InformationsCard.SecondCard.description}
                          border = {this.state.InformationsCard.lastStyleBorder}
                  />
              </div>
              <PaymentMenu time={this.state.timeInMinuts}/>
        </div>
      );
  }
}

export default HebronOneHundred;
