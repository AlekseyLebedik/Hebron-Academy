import React, {useState} from 'react';


import './FQA-in-about-us.css';

const FQAInAboutUs = ({data}) =>{
    const setFalse = (datas) => {

        return datas.map((item) =>{
            return(
                {...item, showAnswer: false}
            );
        });

    }
    const [items, setItems] = useState(setFalse(data));

    const onLiClick = (id) => {
        const oldItem = items[id - 1];
        const value = !oldItem['showAnswer'];
        const newItem = {...items[id - 1], 'showAnswer': value};
        const before = items.slice(0, id - 1);
        const after = items.slice(id);
        setItems([...before, newItem, ...after]);

    }
    
    const renderQuestions = (dataForRender) =>{
        return dataForRender.map((item, index, array) =>{
            const symbol = item.showAnswer ? '-' : '+';
            const answer = symbol === '+' ? null : item.answer;
            let listyle = array.length - 1 === index ? 'fqa-last-li': 'fqa-li-style';
            return(
                <li key={item.id} className={listyle} onClick={() => onLiClick(item.id)}>
                    <div className='question-number'>0.{item.id}</div>
                    <div className='question-style'>{item.question}</div>
                    <div className='fqa-symbol-style'>{symbol}</div>
                    <div className='fqa-answer-style'>{answer}</div>
                </li>
            )
        })
    }
    return(
        
        <div className='row no-gutters FQA-wrapper'>
            <div className='col-2'></div>
            <div className='col-8 hebron-fqa-info-wrapper'>
                <ul className='list-unstyled fqa-ul-style'>
                    {renderQuestions(items.slice(0,3))}
                </ul>
                <ul className='list-unstyled fqa-ul-style'>
                    {renderQuestions(items.slice(3))}
                </ul>
                <div className='controll-buttons'></div>
            </div>
            <div className='col-2'></div>
        </div>
    );
}

export default FQAInAboutUs;