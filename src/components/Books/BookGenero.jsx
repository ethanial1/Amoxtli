import React from 'react';
import style from './Books.module.css';

const BookGenero = ({background, name, index, current, setCurrent, updateGen}) => {

    const handleClick = () => {
        setCurrent(index);
        updateGen();
    }

    return (
        <div className={`${style.gen_container} ${ current === index ? style.activa : null}`}>
            <button className={style.gen_card} onClick={handleClick}>
                <img src={`https://amoxtliapi.herokuapp.com/ingress/assets/gen/cover/${background}`} alt={name} />
            </button>
            <h4>{name}</h4>
        </div>
    )
};

export default BookGenero;
